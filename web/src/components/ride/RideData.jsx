import "./rideData.css";
import { useState, useEffect } from "react";

import Socket from "../../function/socket";


function RideData({settingsFilter, data}) {
    const [shwoData, setShwoData] = useState({});

    
    useEffect(() => {
        Socket.emit("ride", "get-ride", settingsFilter);
    }, [settingsFilter])

    useEffect(() => {
        console.log('data', data);
        setShwoData(data);
    }, [data])

    return (
        <div className={"ride-data"}>
            {
                Object.keys(shwoData).map((valueId, keyDiv) => (
                    <div key={keyDiv}>
                        {
                            Object.values(shwoData[valueId]).map((value, keyData) => (
                                <p key={keyData}> {value} </p>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default RideData;
