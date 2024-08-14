import SelectCity from "./SelectCity";
import Input from "../forms/Input";
import { GrPowerReset } from "react-icons/gr";


function AddPrice({data, setData, reset, sendToServer, streets}) {

    return (
        <div className={"Appprice-add-new"}>
            <GrPowerReset 
            className={"insert"}
            onClick={reset}
            />

            <p>מקור</p>
            <SelectCity 
            data={streets}
            value={data.from}
            setValue={(v) => setData({...data, from: v})}
            />

            <p>יעד</p>
            <SelectCity
            data={streets}
            value={data.to}
            setValue={(v) => setData({...data, to: v})}
            />

            <p>מחיר</p>
            <Input
            textView={"מחיר"}
            value={data.price}
            onChange={(v) => setData({...data, price: v})}
            />

            <p onClick={sendToServer} className={"insert"}>עדכון</p>
        </div>
    );
}

export default AddPrice;
