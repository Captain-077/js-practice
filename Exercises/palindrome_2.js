let input = 'racecar';



if (input == input.split('').reverse().join('')) {
    console.log(input, 'is a palindrome')
} else {
    console.log(input, 'is not a palindrome')
}