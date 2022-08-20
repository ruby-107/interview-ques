// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

function search(arr){
    let min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }
    }
    
    //return 
    let max=arr[min]
    for(let i=arr[min];i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]==max){
            return i+1
        }
            
        
    }
    return 0
}

console.log(search([7,1,5,3,6,4]))
////////////////////////////////////////////////////////////////////
// const express= require("express")
// const app=express();

// app.get('/about',(req,res)=>{
//     res.send("my first api")
// })


// app.listen(3000,()=>{
//     console.log("server is connect")
// })

// Q3. Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth smallest 
// element in the given array. It is given that all array elements are distinct.
// Example 1:
// Input:
// N = 6
// arr[] = 7 10 4 3 20 15
// K = 3
// Output : 7
// Explanation :
// 3rd smallest element in the given 
// array is 7.



