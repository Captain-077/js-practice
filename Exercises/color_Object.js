const colorMap = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    white: '#ffffff',
    black: '#000000'
}

function Entry(word) {
    for (let key in word) {
        const val = word[key]
            //  console.log(key,val)
    }
}

const colorKeys = Entry(colorMap);
console.log('color values', colorKeys)