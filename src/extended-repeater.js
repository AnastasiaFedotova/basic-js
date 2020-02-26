let stick = (string, stick, count) => {
    if(string && count) {
        string = (string + stick).repeat(count).split(stick);
        string.pop()
        return string.join(stick);
    } return string;
}
module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes || 0,
        separator = options.separator || "+",
        addition = String(options.addition) == "undefined" ? "" : String(options.addition),
        additionRepeatTimes = options.additionRepeatTimes || 0,
        additionSeparator = options.additionSeparator || "|";

        return stick(str + stick(addition, additionSeparator, additionRepeatTimes), separator, repeatTimes);
};