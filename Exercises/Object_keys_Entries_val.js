let xxx = { a: 1, b: 2, c: 1, d: 2, e: 1, f: 2 }

// for(let key in xxx) {
// // console.log(key)
// const val = xxx[key]
// // console.log(val)
// console.log(key,val)
// }

const key = Object.keys(xxx)
console.log(key)

const value = Object.values(xxx)
console.log(value)

const Entry = Object.entries(xxx)
console.log(Entry)