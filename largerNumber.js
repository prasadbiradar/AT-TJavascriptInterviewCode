let arr=[10, 68, 75, 7, 21, 12 ]
const largest=(arr)=>{
let larger=arr.sort((a,b)=>b-a)
const largerString=larger.join("").toString()
return largerString;
}
console.log(largest(arr))