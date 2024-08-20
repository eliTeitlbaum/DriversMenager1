import { useEffect, useState } from "react";
import "./appRide.css";

import Socket from "../../function/socket";

import RideData from "./RideData";
import RideScoller from "./RideScoller";

import Message from "../disegin/Message";
import rideSocketFunction from "./rideSocketFunction";


function AppRide() {
    const [data, setData] = useState({});
    const [message, setMessage] = useState({open: false, text: ""});

    const [settingsFilter, setSettingsFilter] = useState({
        time: 24, num: "all"
    })

    useEffect(() => {

        Socket.on("rideData", (king, data) => {
            rideSocketFunction({
                king: king, data: data, setInitData: setData, 
                setMessage: (text) => setMessage({open: true, text: text})
            });
        })

    }, [])

    return (<>
        {
           message.open && 
           <Message 
           text={message.text} 
           animation={true}
           setClose={() => setMessage({open: false, text: ""})}
           />
        }

        <div className={"price-head"}>
            <p> נסיעות </p>
        </div>

        <div className={"ride-main"}>
            <RideScoller
            dataSettings={settingsFilter}
            setDataSettings={setSettingsFilter}
            setMessage={setMessage}
            />

            <RideData
            data={data}
            settingsFilter={settingsFilter}
            />
        </div>

    </>);
}

export default AppRide;