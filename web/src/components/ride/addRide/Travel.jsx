import "./travel.css";
import Input from "../../forms/Input";


function Travel({dataToAdd, setDataToAdd}) {
    return (
        <div className={"travel-add-ride"}>
            <div>
                <p>מבוגרים: </p>
                <Input
                value={dataToAdd.numAdult} 
                onChange={(value) => setDataToAdd({...dataToAdd, numAdult: value})}
                type={"number"}
                className={"add-ride-numOfPassangers"}
                />
            </div>

            <div>
                <p>ילדים: </p>
                <Input
                value={dataToAdd.numChildren} 
                onChange={(value) => setDataToAdd({...dataToAdd, numChildren: value})}
                type={"number"}
                className={"add-ride-numOfPassangers"}
                />
            </div>

            <div>
                <p>תינוקים: </p>
                <Input
                value={dataToAdd.numBaby} 
                onChange={(value) => setDataToAdd({...dataToAdd, numBaby: value})}
                type={"number"}
                className={"add-ride-numOfPassangers"}
                />
            </div>
        </div>
    );
}

export default Travel;
