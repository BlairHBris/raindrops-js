export function convert(drops) {
    let converted = "";

    if (drops % 3 === 0) {
        converted += "Pling";
    }
    if (drops % 5 === 0) {
        converted += "Plang";
    }
    if (drops % 7 === 0) {
        converted += "Plong";
    }

    return converted ? converted : drops.toString();

}
