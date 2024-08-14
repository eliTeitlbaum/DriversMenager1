import React, { useState } from "react";
import "./hocRide.css";

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

function HocRide({ text, children }) {
    const [display, setDisplay] = useState(false);

    return (
        <div className={"hoc-ride"}>
            <div onClick={() => setDisplay((d) => !d)} style={{
                'borderBottom': display ? '0.5px black solid' : 'none'
            }}>
                <p>{text}</p>
                {!display ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>

            <div style={{'display': display ? 'block' : 'none'}}>
                {children}
            </div>
        </div>
    );
}

export default HocRide;