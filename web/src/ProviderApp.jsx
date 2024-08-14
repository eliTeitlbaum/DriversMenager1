import { createContext, useState, useEffect } from "react";
import Socket from "./function/socket";


export const Context = createContext();


function ProviderApp({ children }) {
    const [streets, setStreets] = useState({});
    const [prices, setPrices] = useState({});
    const [textToMessage, setTextToMessage] = useState("");

    const checkResponse = (msg) => {
        if (typeof msg === 'object' && msg != null) {
            setTextToMessage("עודכן בצלחה");
        } else if (msg === 422) {
            setTextToMessage("אחד מהנתונים אינו חוקי");
        } else if (msg === 404) {
            setTextToMessage("משאב לא קיים");
        } else if (msg === 400) {
            setTextToMessage("שגיאה באחד מהנתונים");
        } else {
            setTextToMessage("שגיאה");
        }
    }

    useEffect(() => {
        Socket.emit("start");

        Socket.on("start", (msg) => {
            if (checkResponse(msg)) {
                if ('streets' in msg) {
                    setStreets(msg['streets']); 
                }

                if ('prices' in msg) {
                    setPrices(msg['prices']);
                }   
            }
        })

        Socket.on("prices", (msg) => {
            if (checkResponse(msg)) {
                if (0 in msg && msg[0] === 'success') {
                    delete msg[0];

                    setPrices((prevPrices) => {
                        const newPrices = { ...prevPrices };

                        Object.keys(msg).map((key) => {
                            if (key in newPrices && msg[key] === 'd') {
                                delete newPrices[key];
                            } else if (msg[key].length === 5) {
                                newPrices[key] = msg[key];
                            }
                        })

                        return newPrices;
                    })
                }
            }
        })

        Socket.on("meesage", (msg) => {
            // checkResponse(msg);
        })

    }, [])

    const pro = {
        streets, 
        prices, 
        setPrices, 
        checkResponse, 
        textToMessage,
        setTextToMessage
    };

    return (
        <Context.Provider value={pro}>
            {children}
        </Context.Provider>
    );
}

export default ProviderApp;
