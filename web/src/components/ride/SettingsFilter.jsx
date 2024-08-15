import "./settingsFilter.css";


function SettingsFilter({data, setData}) {
    return (
        <div>
            <select value={data.num}>
                {
                    Array.from({length: 100}, (_, index) => ((index + 1) * 5)).map((index) => (
                        <option value={index}> {index} </option>
                    ))
                }
            </select>
        </div>
    );
}

export default SettingsFilter;
