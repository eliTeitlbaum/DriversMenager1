export default (msg) => {
    if (typeof msg === 'object' && msg != null) {
        return true, "עודכן בצלחה";
    } else if (msg === 422) {
        return false, "אחד מהנתונים אינו חוקי";
    } else if (msg === 404) {
        return false, "משאב לא קיים";
    } else if (msg === 400) {
        return false, "שגיאה באחד מהנתונים";
    } else {
        return false, "שגיאה";
    }
}