import React, {useState, useEffect, useRef} from "react";
// import ReactDOM from "react-dom"
// const PayPalButton = window.paypal.Buttons.driver("react", {React, ReactDOM})
import {PayPalButton} from "react-paypal-button-v2";

const PaypalCheckOut = ({total, data, actions}) => {
    const [paid, setPaid] = useState(false);
    // const [error, setError] = useState(null);
    // const [loaded, setLoaded] = useState(false);
    const paypalRef = useRef();

    const product = {
        price: total,
        description: "paypal test",
    }
    return (
        <PayPalButton
            amount={product.price}
            locale="en_US"
            onSuccess={(details, data) => {
                alert("Transaction completed by " + details.payer.name.given_name);

                return fetch("/paypal-transaction-complete", {
                    method: "post",
                    body: JSON.stringify({
                        orderID: data.orderID
                    })
                })
            }}
            options={{
                clientId: "AWpsIs5hMz031mT4RNO2opkUyVHTqJdVKWMSpiW7jR3BQ8rHn9HBslMOryQZaTgx6Hm4CTHCN8fRhSUH",
                locale: "en_VN"
            }}
        />
    )

    // const createOrder = (data, actions) => {
    //   return actions.order.create({
    //       purchase_inits: [
    //           {
    //               amount: {
    //                   value: "0.01"
    //               }
    //           }
    //       ]
    //   })
    // };
    // const onApprove = (data, actions) => {
    //     return actions.order.capture();
    // };
    // return (
    //     <PayPalButton
    //         createOrder={(data, actions) => createOrder(data, actions)}
    //         onApprove={(data, actions) => onApprove(data, actions)}
    //     />
    //     )

    // useEffect(() => {
    //     window.paypal
    //         .Buttons({
    //             createOrder: (data, actions, err) => {
    //                 return actions.order.create({
    //                     intent: "CAPTURE",
    //                     purchase_units: [
    //                         {
    //                             description: product.description,
    //                             amount: {
    //                                 currency_code: "USD",
    //                                 value: 650.0,
    //                             },
    //                         },
    //                     ],
    //                 });
    //             },
    //             onApprove: async (data, actions) => {
    //                 const order = await actions.order.capture();
    //                 setPaid(true);
    //                 console.log("success order" + order);
    //             },
    //             onError: (err) => {
    //                 //   setError(err),
    //                 console.error(err);
    //             },
    //         })
    //         .render(paypalRef.current);
    // }, []);

    // if (paid) {
    //     return <div>Payment successful.!</div>;
    // }
    //
    // // If any error occurs
    // if (error) {
    //     return <div>Error Occurred in processing payment.! Please try again.</div>;
    // }

    // return(
    //     <div>
    //         <div ref={paypalRef}></div>
    //     </div>
    // )

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src="https://www.paypal.com/sdk/js?client-id=AWpsIs5hMz031mT4RNO2opkUyVHTqJdVKWMSpiW7jR3BQ8rHn9HBslMOryQZaTgx6Hm4CTHCN8fRhSUH&currency=USD"
    //     script.addEventListener("load", () =>setLoaded(true))
    //     document.body.appendChild(script)
    //
    //     if(loaded){
    //         setTimeout(() => {
    //             window.paypal.Buttons({
    //                 createOrder: (data, actions) => {
    //                     return actions.order.create({
    //                         purchase_units: [{
    //                             description: product.description,
    //                             amount: {
    //                                 currency_code: "USD",
    //                                 value: product.price
    //                             }
    //                         }]
    //                     })
    //                 },
    //                 onApprove: async (data, actions) => {
    //                     const order = await actions.order.capture();
    //                     setPaid(true);
    //                     console.log(order);
    //                 }
    //             }).render(paypalRef);
    //         })
    //     }
    // })
    // return (
    //     <div>
    //         <div ref={ v => (paypalRef = v)} />
    //     </div>
    // );


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
