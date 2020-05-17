import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_hNqFzN0QOZZ7ZFTNXAitdfPe00cQiSFd6m'

    const onToken = token => {
        console.log(token)
        alert('Payment Success')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton