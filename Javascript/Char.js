const myCharArray = [22, 5]
const myCodeArray = [0x0092]

function charToString(list){
    return String.fromCharCode(...list)
    
}
function codeToString(list){
    return String.fromCharCode(...list)
    
}

console.log(charToString(myCharArray))
console.log(codeToString(myCodeArray))