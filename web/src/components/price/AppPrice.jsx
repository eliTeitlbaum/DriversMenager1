import { useState, useContext } from "react";
import { Context } from "../../ProviderApp";
import Socket from "../../function/socket";
import regx from "../../function/regx";
import AddPrice from "./AddPrice";
import DataPrice from "./DataPrice";

import "./price.css";


function AppPrice() {
    const {streets, prices, setPrices} = useContext(Context);
    const [newData, setNewData] = useState({from: "", to: "", price: "", num: 0});

    const editClick = (num) => {
        if (num in prices) {
            const dataClick = prices[num];
            setNewData({from: dataClick[0], to: dataClick[1], price: dataClick[2], num: num});
        }
    }

    const deleteClick = (num) => {
        if (num in prices) {
            Socket.emit('prices', {f: 'd', num: num});
        }
    }

    const sendToServer = () => {
        if (regx('cityHe', newData.from, false) && regx('cityHe', newData.to, false) && regx('number', newData.price, false)) {
            Socket.emit('prices', {...newData, f: 'nu'});
        }
    }

    return (
        <div className={"Appprice"}>
            <div className={"Appprice-head"}>
                <p>עדכון מחירים</p>
            </div>

            <AddPrice
            data={newData}
            setData={setNewData}
            reset={() => setNewData({from: "", to: "", price: "", num: 0})}
            sendToServer={sendToServer}
            streets={Object.keys(streets)}
            />

            <DataPrice
            data={prices}
            editClick={editClick}
            deleteClick={deleteClick}
            />
        </div>
    );
}

export default AppPrice;
