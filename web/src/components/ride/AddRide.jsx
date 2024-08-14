import "./addRide.css";

import { useState, useContext } from "react";
import { Context } from "../../ProviderApp";
import Socket from "../../function/socket";

import RecordAndText from "./RecordAndText";

import Input from "../forms/Input";
import SelectCitiesStreets from "./SelectCitiesStreets";
import DateTime from "../disegin/DateTime";

import HocRide from "./HocRide";

import Message from "../disegin/Message";


function AddRide({}) {
    const [dataToAdd, setDataToAdd] = useState({
        num: 1, fromCity: "", fromS: "", toCity: "", toS: "", phone: "", typeCar: "", aotoSearch: true, date: "", 
        time: new Date().toISOString().slice(0, 16)
    });

    const [openMessage, setOpenMessage] = useState(false);

    const { streets } = useContext(Context);

    const sendToServer = () => {
        if (! openMessage) {
            setOpenMessage(true);
            Socket.emit("ride", 'n', dataToAdd);
        }
    }

    return (
        <div className="add-ride">
            {
                openMessage && 
                <Message
                text={""}
                />
            }

            <RecordAndText />
            
            <div className={"add-ride-date"}>
                <DateTime 
                dateTime={dataToAdd.time}
                setDateTime={(v) => setDataToAdd({...dataToAdd, time: v})}
                />
            </div>

            <div className={'ride-numOfPassangers'}>
                <p>מס' נוסעים</p>
                <Input
                value={dataToAdd.num} 
                onChange={(value) => setDataToAdd({...dataToAdd, num: value})}
                type={"number"}
                className={"add-ride-numOfPassangers"}
                />
            </div>

            
            <div className={"ride-type"}>
                <p>סוג רכב</p>
                
                <select>
                    <option>רכב רגיל A</option>
                </select>
            </div>

            <SelectCitiesStreets 
            text={"מוצא"} 
            data={streets}
            valueCity={dataToAdd.fromCity}
            setValueCity={(v) => setDataToAdd({...dataToAdd, fromCity: v})}
            valueS={dataToAdd.fromS}
            setValueS={(v) => setDataToAdd({...dataToAdd, fromS: v})}
            className={"ride-select-city-street"}
            />

            <SelectCitiesStreets 
            text={"מוצא"} 
            data={streets}
            valueCity={dataToAdd.toCity}
            setValueCity={(v) => setDataToAdd({...dataToAdd, toCity: v})}
            valueS={dataToAdd.toS}
            setValueS={(v) => setDataToAdd({...dataToAdd, toS: v})}
            className={"ride-select-city-street"}
            />

            
            <div className={"ride-phone"}>
                <p>טלפון</p>
                <Input 
                type={"phone"}
                value={dataToAdd.phone}
                onChange={(v) => setDataToAdd({...dataToAdd, phone: v})}
                className={"add-price-phone"}
                />
            </div>

            <div className={"ride-search"}>
                <input type={"checkbox"} name="ride-search" />
                <p >חיפוש אוטמטי</p>
            </div>

            <div className="send-add-ride" onClick={sendToServer}>
                <p>שליחה</p>
            </div>
        </div>
    );
}

export default AddRide;
