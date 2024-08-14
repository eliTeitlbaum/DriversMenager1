import InputAndSelect from "../forms/InputAndSelect";


function SelectCity({data, value, setValue}) {
    return (
        <div>
            <InputAndSelect
            dataSelect={data}
            value={value}
            setValue={setValue}
            textView={"בחר עיר"}
            />
        </div>
    );
}

export default SelectCity;
