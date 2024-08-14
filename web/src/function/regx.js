export default function (patt, text, empty=true) {

    if (text === "") {
        return empty;
    }

    text = String(text);

    let pattern = /[]/;

    switch (patt) {
        case 'cityHe': {
            pattern = /^[א-ת "'-]+$/;
            break;
        } case 'number': {
            pattern = /^[0-9]+$/;
            break;
        }

    }

    return pattern.test(text);
}