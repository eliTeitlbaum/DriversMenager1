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
            rideSocketFunction();
        })

    }, [])

    return (<>
        {
           message.open && <Message text={message.text} />
        }

        <div className={"price-head"}>
            <p> נסיעות </p>
        </div>

        <RideScoller
        dataSettings={settingsFilter}
        setDataSettings={setSettingsFilter}
        setMessage={setMessage}
        />

        <RideData
        data={data}
        settingsFilter={settingsFilter}
        />

    </>);
}

export default AppRide;