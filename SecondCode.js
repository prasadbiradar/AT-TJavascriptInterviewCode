let arr = [-6, -5, -3, 0, 2, 4, 9]
const absPair=(arr)=>{
    let min=Infinity
    let minipair=[]
    for(let i=0;i<=arr.length;i++){
    for(let j=i+1;j<=arr.length-1;j++){
            let sum=arr[i]+arr[j]
        let abssum=Math.abs(sum)
            if(abssum<min){
              min=abssum;
            console.log("min",min)
            minipair=[arr[i],arr[j]]
          }
          }
        }
       //console.log(minipair)
       return minipair
    }
    console.log(absPair(arr))
