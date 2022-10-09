const OnceMap = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
]

const tensMap = [
    'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
]



function covertToWord(input) {

    let numberToWord = '';
    let currentValue = input;

    if (currentValue > 999 && currentValue < 10000) {
        let fourPlace = parseInt(currentValue / 1000);
        let index = fourPlace - 1
        numberToWord += OnceMap[index] + ' thousand'
        currentValue -= fourPlace * 1000
    }


    if (currentValue > 99 && currentValue < 1000) {
        let ThreePlace = parseInt(currentValue / 100);
        let index = ThreePlace - 1
        numberToWord += ' ' + OnceMap[index] + ' hundred'
        currentValue -= ThreePlace * 100
    }

    if (currentValue > 20 && currentValue < 100) {
        let TwoPlace = parseInt(currentValue / 10);
        let index = TwoPlace - 1
        numberToWord += ' ' + tensMap[index]
        currentValue -= TwoPlace * 10
    }


    if (currentValue > 20 && currentValue < 100) {
        let index = currentValue / 10 - 1;
        numberToWord += tensMap[index]
    }

    if (currentValue > 0 && currentValue <= 20) {
        let index = currentValue - 1;
        numberToWord += ' ' + OnceMap[index];
    }
    return numberToWord;
}
const result = covertToWord(93)
console.log(result);