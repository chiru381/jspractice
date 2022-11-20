let a = "12.35"

console.log(parseInt(a))
console.log(parseFloat(a))


let b = [1,1, 2, 2,3, 4,5,6, 6,7,8,9,10]
let c = []

for(let i=0; i<b.length; i++){
    if(c.indexOf(b[i]) === -1){
        c.push(b[i])
    }
}
console.log(c)




//remove duplicates

const users = [
    { id: 1, name: 'chiru', address: 'vizag' },
    { id: 2, name: 'nandu', address: 'gwk' },
    { id: 3, name: 'raju', address: 'srikakulam' },
    { id: 4, name: 'laxmi', address: 'rajahmundry' },
    { id: 1, name: 'chiru', address: 'vizag' },
    { id: 2, name: 'nandu', address: 'gwk' },
    ]
    
    console.log(users)
    
    const result = users.reduce((finalArr, current) => {
        let obj = finalArr.find((item) => item.id === current.id)
        console.log( finalArr)
        if(obj){
            return finalArr
            console.log("true")
        } else {
            return finalArr.concat([current])
            console.log("false")
        }
    },[])
    
    console.log("result", result)