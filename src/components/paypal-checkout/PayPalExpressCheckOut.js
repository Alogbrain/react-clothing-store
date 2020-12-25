import React, {useState} from "react";

const PayPalExpressCheckOut = ({env, client, total, currency}) => {

    const [_client, set_Client] = useState({
        sandbox: "AWpsIs5hMz031mT4RNO2opkUyVHTqJdVKWMSpiW7jR3BQ8rHn9HBslMOryQZaTgx6Hm4CTHCN8fRhSUH",
        env: "sandbox",
        commit: true,
        showButton: false
    })
    const payment = () => window.paypal.rest.payment.create(
        env, client , {
            transaction: [
                {amount: total, currency: currency}
            ]
        }
    )


}

export  default PayPalExpressCheckOut;
