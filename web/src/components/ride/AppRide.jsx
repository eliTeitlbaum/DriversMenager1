import { useState } from "react";
import "./appRide.css";

import AddRide from "./AddRide";
import RideData from "./RideData";

import HocRide from "./HocRide";


function AppRide() {

    return (<>
        <div className={"price-head"}>
            <p> נסיעות </p>
        </div>

        <HocRide text={"חדש"}>
            <AddRide />
        </HocRide>

        <HocRide text={"מיון / סינון"}>
            <div></div>
        </HocRide>

        <HocRide text={"נסיעות"}>
            <RideData />
        </HocRide>
    </>);
}

export default AppRide;