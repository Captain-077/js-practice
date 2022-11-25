const arr = ['pervez', 36]

const newObj = arr.reduce(process, {});

function process(result, nextItem, index) {

    if (index === 0) {
        result.name = nextItem;
    }

    if (index === 1) {
        result.age = nextItem;
    }
    return result
}

console.log(newObj)