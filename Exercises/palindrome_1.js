const input = 'racecar';

const splitted = input.split('')
splitted.reverse();
const joined = splitted.join('')

// console.log(joined)

if (input === joined) {
    console.log(joined, 'is a palindrome')
} else {
    console.log(joined, 'is a not palindrome')
}