import InputAndSelect from "../../forms/InputAndSelect";

function SelectCitiesStreets({text, data, valueCity, setValueCity, valueS, setValueS, className}) {
    
    return (<>
        <div className={className}>
            <p> {`עיר ${text}`} </p>

            <InputAndSelect 
            textView={"בחר   עיר"}
            dataSelect={Object.keys(data)}
            value={valueCity}
            setValue={setValueCity}
            />
        </div>

        <div className={className}>
            <p> {`רחוב ${text}`} </p>

            <InputAndSelect 
            textView={"בחר רחוב"}
            dataSelect={valueCity in data ? data[valueCity] : []}
            value={valueS}
            setValue={setValueS}
            />
        </div>
    </>);
}

export default SelectCitiesStreets;
