function rand10(){
    return Math.floor(Math.random()*10 +1)
}
let n = prompt("Enter a number")
function multiRand(n){
    let arr = []
    for (let i=0;i<n;i++){
    arr.push(rand10())
    }
    return arr
}
console.log(multiRand(n))

