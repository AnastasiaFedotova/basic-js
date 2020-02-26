let stickString = (string, glue, count) => {
    if(string && count) {
        string = (string + glue).repeat(count).split(glue);
        string.pop()
        return string.join(glue);
    } return string;
}
module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes || 0,
        separator = options.separator || "+",
        addition = String(options.addition) == "undefined" ? "" : String(options.addition),
        additionRepeatTimes = options.additionRepeatTimes || 0,
        additionSeparator = options.additionSeparator || "|";

        return stickString(str + stickString(addition, additionSeparator, additionRepeatTimes), separator, repeatTimes);
};