export default ({king, data, setInitData, setMessage}) => {
    // console.log(king, data);
    
    switch (king) {
        case "getRidesByFilter":
            setInitData(data);
            break;
            
        case "message":
            switch (data) {
                case 200:
                    setMessage("עודכן בהצלחה");
                    break;
                default:
                    setMessage("שגיאה");
            }
            break;
    }
}