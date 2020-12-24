import React, {useState} from "react";

const PayPalExpressCheckOut = () => {
    const [client, setClient] = useState({
        sandbox: "AWpsIs5hMz031mT4RNO2opkUyVHTqJdVKWMSpiW7jR3BQ8rHn9HBslMOryQZaTgx6Hm4CTHCN8fRhSUH",
        env: "sandbox",
        commit: true,
        showButton: false
    })
    const payment = () => paypal.rest.payment.create()
}

export  default PayPalExpressCheckOut;
