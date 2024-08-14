import { useState, useEffect, useRef } from 'react';

function DateTime({dateTime, setDateTime}) {
    const [selectedTime, setSelectedTime] = useState('עכשיו');

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
                // style={{
                //     "position": 'absolute',
                //     "opacity": 0,
                //     "top": 0,
                //     "left": 0,
                //     "width": 0,
                //     "height": 0
                // }}
            />

            {/* <p onClick={clickOnDate}> 
                {"בחר תאריך"}
            </p> */}
        </div>
    );
}

export default DateTime;