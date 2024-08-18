import "./recordAndText.css";
import { useState } from "react";

import RecorderButton from "./RecorderButton";

import { IoIosSend } from "react-icons/io";


function RecordAndText() {
    const [shwoInput, setShwoInput] = useState(true);

    const shwoText = `(עכשיו/בעוד (מס' דקות), (מס' נוסעים), (קטגוריה [A, B ...]), מ (עיר) (רחוב) ל (עיר) (רחוב), (מס' טלפון)`

    return (
        <div className={"record-and-text"}>
            <RecorderButton />

            <div>
                {shwoInput && <p> {shwoText}</p>}

                <input 

                />
            </div>

            <IoIosSend />

        </div>
    )
}

export default RecordAndText;


