import "./rideData.css";
import { useState, useEffect } from "react";

import Socket from "../../function/socket";


function RideData({settingsFilter, data}) {
    const [shwoData, setShwoData] = useState({});

    
    useEffect(() => {
        Socket.emit("ride", "get-ride", settingsFilter);
    }, [settingsFilter])

    return (
        <div>

        </div>
    );
}

export default RideData;
