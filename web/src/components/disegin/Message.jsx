import './message.css';
import { useEffect, useRef } from 'react';


export default function Massage ({text, animation, buttonAgree, setClose}) {
    const messageRef = useRef(null);

    useEffect(() => {
        if (animation && text !== "") {
            setTimeout(() => {
            setClose();
        }, 2000)}

        if (messageRef) {
            const parent = messageRef.current.parentElement;

            if (text === "") {
                parent.style.opacity = "0.5";
            } else {
                parent.style.opacity = "1.0";
            }
        }

    }, [text])

    const class_name = text === "" ? 'spinner' : animation ? 'massage massage_animation' : 'massage'

    return (
    <div className={class_name} ref={messageRef}>
        <p> {text} </p>

        { buttonAgree &&
        <div> 
            <p onClick={() => {setClose(false)}}> ביטול </p>
            <p onClick={() => {buttonAgree()}}> אישור </p>
        </div> 
        }
    </div>
    )
}