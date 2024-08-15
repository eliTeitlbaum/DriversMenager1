import "./rideScoller.css";
import { useState } from "react";

import AddRide from "./AddRide";
import SettingsFilter from "./SettingsFilter";


function RideScoller({dataSettings, setDataSettings}) {
    const [open, setOpen] = useState("");

    function clickOnScoller (name) {
        setOpen((o) => o === name ? "": name);
    }

    return (<>
        <div className={"ride-scoller-head"}>
            <p onClick={() => clickOnScoller("new")}>חדש</p>
            <p onClick={() => clickOnScoller("sort")}>מיון</p>
            <p onClick={() => clickOnScoller("filter")}>סינון</p>
            <p onClick={() => clickOnScoller("settinges")}>הגדרות</p>
            <p>עצור</p>
            <p>המשך </p>
        </div>

        <div className={"ride-scoller-data"}>
            {
                open === "new" &&
                <AddRide />
            }

            <SettingsFilter
            data={dataSettings}
            setData={setDataSettings}
            />
        </div>
    </>);
}

export default RideScoller;
