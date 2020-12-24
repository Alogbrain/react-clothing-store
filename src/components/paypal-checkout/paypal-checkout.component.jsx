import React, {useEffect} from "react";

const PaypalCheckOut = () => {
    const [paid, setPaid] = React.useState(false);
    const [error, setError] = React.useState(null);
    const paypalRef = React.useRef();
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Your description",
                                amount: {
                                    currency_code: "INR",
                                    value: 500.0,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaid(true);
                    console.log(order);
                },
                onError: (err) => {
                    //   setError(err),
                    console.error(err);
                },
            })
            .render(paypalRef.current);
    }, []);

    if (paid) {
        return <div>Payment successful.!</div>;
    }

    // If any error occurs
    if (error) {
        return <div>Error Occurred in processing payment.! Please try again.</div>;
    }

    return (
        <div>
            <h4>Total Amount in Rs. : 500 /-</h4>
            <div ref={paypalRef} />
        </div>
    );
    // const onSuccess = (payment) => {
    //     console.log("Your payment was succeeded!", payment);
    // }
    // const onCancel = (data) => {
    //     console.log('You have cancelled the payment!', data);
    // }
    // const onError = (err) => {
    //     console.log("Error!", err);
    // }
    // let currency = 'USD';
    // let total = 1;
    //
    // return (
    //    <PaypalExpressBtn/>
    // )
}


export default PaypalCheckOut;
