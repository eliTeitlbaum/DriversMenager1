import { useEffect, useState } from "react";
import "./appRide.css";

import Socket from "../../function/socket";

import RideData from "./RideData";
import RideScoller from "./RideScoller";


function AppRide() {
    const [data, setData] = useState({});

    const [settingsFilter, setSettingsFilter] = useState({
        time: 24, num: "all"
    })

    useEffect(() => {

        Socket.on("rideData", (king, data) => {
            console.log(king, data);
        })

    }, [])

    return (<>
        <div className={"price-head"}>
            <p> נסיעות </p>
        </div>

        <RideScoller 
        dataSettings={settingsFilter}
        setDataSettings={setSettingsFilter}
        />

        <RideData
        data={data}
        settingsFilter={settingsFilter}
        />

    </>);
}

export default AppRide;