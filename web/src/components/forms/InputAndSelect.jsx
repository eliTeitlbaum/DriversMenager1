import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import "./inputAndSelect.css";


function InputAndSelect ({dataSelect, textView, value, setValue}) {

    const [filteredOptions, setFilteredOptions] = useState([...dataSelect]);
    const [selectedOption, setSelectedOption] = useState('');
    const [display, setDisplay] = useState(false);

    const selectRef = useRef(null);

    // useEffect(() => {
    //     setFilteredOptions([...dataSelect]);
    // }, [dataSelect])

    const handleFilterChange = (e) => {
        const value = e.target.value;
        setValue(value);

        let filtered = dataSelect;

        if (value !== "") {
            filtered = dataSelect.filter(option =>
                option.toLowerCase().includes(value.toLowerCase())
            );
        }
        
        setFilteredOptions(filtered);

        if (filtered.length === 0) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        setValue(event.target.value);
        setDisplay(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
            e.preventDefault();

            if (e.key === 'ArrowDown' && (selectRef.current.selectedIndex < selectRef.current.options.length - 1)) {
                selectRef.current.selectedIndex += 1;
            } else if (e.key === "ArrowUp" && (selectRef.current.selectedIndex > 0)) {
                selectRef.current.selectedIndex -= 1;     
            } else if (e.key === 'Enter') {
                setSelectedOption(selectRef.current.value);
                setValue(selectRef.current.value);
                setDisplay(false);      
            }
        }
    };
    
    return (
        <div className="select-and-input" onMouseLeave={() => setDisplay(false)}>

            <div>
                <input
                type="text"
                value={value}
                placeholder={textView} 
                onChange={handleFilterChange}
                onKeyDown={handleKeyPress}
                />
                <p onClick={() => setDisplay((d) => !d)}> {display ? <IoIosArrowDown /> : <IoIosArrowForward />} </p>
            </div>

            <select
            value={selectedOption}
            onChange={handleSelectChange}
            onKeyDown={handleKeyPress}
            style={{'display' : display ? 'block' : 'none'}}
            size={filteredOptions.length + 1}
            ref={selectRef}
            >
                <option value={""}></option>
                {
                    filteredOptions.map((value, key) => 
                        <option key={key} value={value}> {value} </option>
                    )
                }
            </select>
        </div>
    )
}

export default InputAndSelect;