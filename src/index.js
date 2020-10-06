module.exports = function toReadable (number) {

    const numbers = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    };
    let strNum = number.toString();
    let numLen = strNum.length;
    if(number === 0) return 'zero';
    if(numLen === 3)
        return `${numbers[strNum[0]]} hundred${numbers[strNum.slice(1)] ? (' ' + numbers[strNum.slice(1)]) : ( (numbers[strNum[1] + '0'] ? (' ' + numbers[strNum[1] + '0']) : '')  + (numbers[strNum[2]] ? (' ' + numbers[strNum[2]]) : ''))}`;
    if(numLen === 2)
        return `${numbers[strNum.slice(0)] ? numbers[strNum.slice(0)] : numbers[strNum[0] + '0'] + ' ' + numbers[strNum[1]]}`;
    if(numLen === 1)
        return `${numbers[strNum]}`;
}
