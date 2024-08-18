import { useState, useEffect, useRef } from 'react';

import { IoCalendarOutline } from "react-icons/io5";

function DateTime({dateTime, setDateTime}) {
    const [selectedTime, setSelectedTime] = useState('עכשיו');
    const [shwoDateTime, setShwoDateTime] = useState(true);

    const inputDate = useRef();

    useEffect(() => {
        if (selectedTime === 'עכשיו') {
            setDateTime(new Date().toISOString().slice(0, 16));
        } else {
            const newDate = new Date();
            newDate.setMinutes(newDate.getMinutes() + parseInt(selectedTime));
            setDateTime(newDate.toISOString().slice(0, 16));
        }
    }, [selectedTime]);

    const clickOnDate = () => {
        inputDate.current.click();
        setShwoDateTime(true);
    }

    const numbers = Array.from({ length: 24 }, (_, i) => (i + 1) * 5);

    return (
        <div>
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                <option value="עכשיו">עכשיו</option>
                {
                    numbers.map((time, key) => (
                        <option key={key} value={time}>{`בעוד ${time} דקות`}</option>
                    ))
                }
            </select>

            <input
                ref={inputDate}
                type="datetime-local" 
                value={dateTime} 
                onChange={(e) => setDateTime(e.target.value)}
                style={{
                    "display": shwoDateTime ? "block" : "none"
                }}
            />

            {/* <div onClick={clickOnDate}>
                <p> {dateTime.split('T')[1]} </p>
                <p> <IoCalendarOutline /> </p>
            </div> */}
        </div>
    );
}

export default DateTime;