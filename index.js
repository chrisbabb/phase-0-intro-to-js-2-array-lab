// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    let newCats = [...cats, name]
    return newCats
}

function prependCat(name) {
    let newCats = [name, ...cats]
    return newCats
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1)
}

function removeFirstCat() {
    return cats.slice(1)
}