import './message.css';
import { useEffect, useContext } from 'react';
import { Context } from '../../ProviderApp';


export default function Massage ({text, animation, buttonAgree, setClose}) {

    const {textToMessage, setTextToMessage} = useContext(Context);

    useEffect(() => {
        setTextToMessage(text)
    }, [text])

    useEffect(() => {
        if (animation && textToMessage !== "") {
            setTimeout(() => {
            setClose();
        }, 2000)}
    }, [textToMessage])

    const class_name = textToMessage === "" ? 'spin' : animation ? 'massage massage_animation' : 'massage'

    return (
    <div className={class_name}>
        <p> {textToMessage} </p>

        { buttonAgree &&
        <div> 
            <p onClick={() => {setClose(false)}}> ביטול </p>
            <p onClick={() => {buttonAgree()}}> אישור </p>
        </div> 
        }
    </div>
    )
}