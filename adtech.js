// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// To enable screen reader support, press Ctrl+Alt+Z To learn about keyboard shortcuts, press Ctrl+slash
 
// function add(arr,k){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==k){
//                 return [i,j]
//             }
//         }
//     }
//  //return 
// }
// const res=add([2,7,11,15],9)
// console.log(res)
////////////////////////////////////////////////

// function add(arr,target){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         sum=arr[i]+arr[j]
//         if(sum==target){
//             return [i,j]
//         }else if(sum>9){
//             j--
//         }else{
//             i++;
//         }
//     }
    
// }
// console.log(add([2,7,11,15],9))
////////////////////////////////////////////////////

//You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// var maxProfit = function(prices) {
//     let profit = 0;
//     let bestBuying;
    
//     for (let i = 0; i < prices.length; i++) {
//         if ((!bestBuying && bestBuying !== 0) || prices[i] < bestBuying) {
//             bestBuying = prices[i];
//         }
//         profit = (prices[i] - bestBuying) > profit ? (prices[i] - bestBuying) : profit;
//     }
    
//     return profit;
// };

// console.log(maxProfit([7,1,5,3,6,4]))

////////////////////////////////////////////////////////////

// function maximumProfit(arr){
//     let min=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(min>arr[i]){
//             min=arr[i]
//         }
//     }
//     let max=arr[min]
//     for(let i=arr[min];i<arr.length;i++){
//         if(max<arr[i]){
//             max=arr[i]
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==max){
//             return i+1
//         }
//     }
//     return 0
// }
// console.log(maximumProfit([7,1,5,3,6,4]))
//////////////////////////////////////////////////////////////////////


// function repeatedNumber(arr,n){
//     let map={};
//     for(let ele of arr){
//         map[ele] ?map[ele]++ : map[ele] =1
//     }
//     let duplicate=[];
//     for(let key in map){
//         if(map[key]>1) duplicate.push(key)
//     }
//     let res=[];
//     for(let i=0;i<duplicate.length;i++){
//      if(duplicate[i]>n) res.push(duplicate[i])
//     }
//     return res
// }
// console.log(repeatedNumber([2,3,4,5,7,5,8,0,9,7,6,8,6],5))
///////////////////////////////////////////////////////////////////
// function greaterNum(arr,n){
//         let map={};
//         for(let i=0;i<arr.length;i++){
//             if(map[arr[i]]){
//                 map[arr[i]] +=1
//             }else{
//                 map[arr[i]] =1
//             }
//         }
//         let duplicate=[]
//         for(let key in map){
//             if(map[key]>1) duplicate.push(key)
//         }
//         let res=[];
//         for(let i=0; i<duplicate.length;i++){
//             if(duplicate[i]>n) res.push(duplicate[i])
//         }
//         return res
//     }
//     console.log(greaterNum([2,3,4,5,7,5,8,0,9,7,6,8,6],5))
    
  ///////////////////////////////////////////////////////
  
//   function greaterNum(arr){
//     let obj=new Map();
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>5){
//            if(!obj.get(arr[i])){
//             obj.set(arr[i],1)
//            }else{
//             obj.set(arr[i],obj.get(arr[i])+1)
//            }
//         }
//     }
//     let res=[];
//     for(let key of obj){
//         if(key[1]>1) res.push(key[0])
//     }
//     return res
//   }
//   console.log(greaterNum([2,3,4,5,7,5,8,0,9,7,6,8,6]))
/////////////////////////////////////////////////////////////////
  


