import { createContext, useState, useEffect } from "react";
import Socket from "./function/socket";
import checkResponse from "./function/checkResponse";


export const Context = createContext();


function ProviderApp({ children }) {
    const [streets, setStreets] = useState({});
    const [prices, setPrices] = useState({});

    useEffect(() => {
        Socket.emit("start");

        Socket.on("start", (msg) => {
            if (checkResponse(msg)[0]) {
                if ('streets' in msg) {
                    setStreets(msg['streets']); 
                }

                if ('prices' in msg) {
                    setPrices(msg['prices']);
                }   
            }
        })

        // Socket.on("prices", (msg) => {
        //     if (checkResponse(msg)[0]) {
        //         if (0 in msg && msg[0] === 'success') {
        //             delete msg[0];

        //             setPrices((prevPrices) => {
        //                 const newPrices = { ...prevPrices };

        //                 Object.keys(msg).map((key) => {
        //                     if (key in newPrices && msg[key] === 'd') {
        //                         delete newPrices[key];
        //                     } else if (msg[key].length === 5) {
        //                         newPrices[key] = msg[key];
        //                     }
        //                 })

        //                 return newPrices;
        //             })
        //         }
        //     }
        // })

        // Socket.on("meesage", (msg) => {
        //     checkResponse(msg);
        // })

    }, [])

    const pro = {
        streets, 
        prices, 
        setPrices
    };

    return (
        <Context.Provider value={pro}>
            {children}
        </Context.Provider>
    );
}

export default ProviderApp;
