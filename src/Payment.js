import React, { useEffect, useState } from 'react';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allowed us to charge a customer

        const getClientSecret = async () => {
            try {
                const res = await axios({
                    method: 'post',
                    // Stripe expects the total in a currencies subunits
                    url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
                });

                console.log('Server Response: ',res);

                setClientSecret(res.data.clientSecret || null);
            } catch (error) {
                console.error('Error fetching client secret:', error.message);
                setClientSecret(null);
            }
        };

        getClientSecret();
    }, [basket]);

    console.log('THE SECRET IS >>>', clientSecret)

    const handleSubmit = async (event) => {
    // do all the fancy stripes stuff...
    event.preventDefault();
    setProcessing(true);

    try {
        if (!clientSecret) {
            throw new Error('Invalid client secret');
        }

        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });

        if (error) {
            setError(error.message);
            setSucceeded(false);
            setProcessing(false);
        } else {
            console.log('PaymentIntent:', paymentIntent);

            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            });

            navigate('/orders', { replace: true });
        }
    } catch (error) {
        console.error('Error confirming card payment:', error);
        setError('Error confirming card payment');
        setSucceeded(false);
        setProcessing(false);
    }
};


    const handleChange = event => {
        // Listen for changes in the cardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    const [showTestCard, setShowTestCard] = useState(false);

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Payment section - delivery address */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
                <p>{user?.email}</p>
                <p>123 React Alleyway</p>
                <p>New Delhi, India</p>
            </div>

        </div>

        {/* Payment section - review items */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Review items and delivery</h3>
            </div>
            <div className='payment__items'>
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>

        {/* Payment section - Payment Method */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Payment Method</h3>
            </div>
            <div className='payment__details'>
                {/* Stripe Magic will go here */}

                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange} />

                    <div className='payment__priceContainer'>
                        <CurrencyFormat
                            renderText={(value) => (
                                <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix='₹'
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>
                    </div>

                    {/* Errors */}
                    {error && <div>{error}</div>}
                </form>
            </div>
            {/* Test card details */}
            <div className='payment__testCard'>
                <button onClick={() => setShowTestCard(!showTestCard)}>
                    {showTestCard ? 'Hide Test Card' : 'Show Test Card'}
                </button>
                {showTestCard && (
                    <div>
                        <p>4000 0035 6000 0008</p>
                    </div>
                )}
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Payment
