// code your solution here
function saturdayFun(sport = 'roller-skate') {
    return (`This Saturday, I want to ${sport}!`);
}


const mondayWork = function (work = 'go to the office') {
    return (`This Monday, I will ${work}.`)
}

mondayWork();


const wrapAdjective = function (style) {
    return function (descriptor) {
        return (`You are ${style}${descriptor}${style}!`);

    }
}

wrapAdjective("%")("a dedicated programmer");