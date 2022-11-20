let a = [1,2,3,1,1,4,5,6,6,7,5,4]

for(let i = 0; i < a.length; i++){
    
}
// console.log([...new Set(a)])

let value = [
                    {firstname : "surya" , secondname:"kal" ,  id : 1}, 
                    {firstname : "surya" , secondname:"kiil",  id : 3},
                    {firstname : "teja" , id : 2},
                    {firstname : "ram" , id : 4},
                    {firstname : "krishna" , id : 5},
                    {firstname : "krihna" , id : 6}
]

let newData = {};


for(i of value){
let e = i;
//console.log(e);
    for(i in e){
//        console.log(e[i]);
console.log(e[i], '....1')
        newData[e["name"]] = true;
    }
}


console.log(newData);


// console.log([...new Set(value)])







// let b = []
// let len = b.length
// console.log(len)

// for(let i = 0; i < len; i++){
//     if(b.indexOf(a[i]) === -1){
//         b.push(a[i])
//     }
// }
// console.log(b)

// let b=[]
// let len = a.length
// a.sort()
// let _temp
// for(let i = 0; i < len; i++){
//     if(a[i] !== _temp){
//         b.push(a[i])
//         _temp = a[i]
//     }
// }
// console.log(b)

// obj = {}
// for(let i of a ) {
//     obj[i] = true
// }
// console.log(obj)

// obj = {}
// for(let i of a) {
//     obj[i] = true
// }
// let b = Object.keys(obj)
// console.log(b)

// let bSet = new Set(a)
// console.log(bSet)