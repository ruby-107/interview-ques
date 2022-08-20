//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//  Input: nums = [1,2,3,1]
// Output: true

//  function containsDuplicate(nums) {
//     for(let i=0;i<nums.length;i++){
//         for(let j=0;j<nums.length;j++){
//             if(nums[i]==nums[j]){
//                 return true
//             }
//         }
//     }
//     return false
// };
// console.log(containsDuplicate( [1,2,3,1]))
//////////////////////////////////////////////////////////////////

//count 0s ,1s ,2s 
// function countNUm(arr){
//     let zero=0;
//     let one=0;
//     let two=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==0) zero++;
//         if(arr[i]==1) one++;
//         if(arr[i]==2) two++
//     }
//     for(let i=0;i<zero;i++) arr[i] =0;
//     for(let i=zero;i<zero+one;i++) arr[i] =1;
//     for(let i=one+zero;i<arr.length;i++) arr[i]=2;
//     return arr

// }
// const res=countNUm([0,1,2,1,0,2,2,2,1,0])
// console.log(res)
///////////////////////////////////////////////////////////////
//negative number move left side


// let arr=[-1,-2,4,6,5,-4,9,-5]
// function moveNegativeNum(arr){
//     let neg=[]
//     let positive=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<0){
//        neg.push(arr[i])
//         }else{
//         positive.push(arr[i])
//         }
//     }
//     return neg.concat(positive)
// }
// console.log(moveNegativeNum(arr))

//////////////////////////////////////////////////////////
//2 method move negative left side

// let arr=[-1,-2,4,6,5,-4,9,-5]
// function negNumber(arr){
// let left=0;
// let right=arr.length-1;
// while(left<right){
//     while(arr[left]<0) left++;
//     while(arr[right]>0) right--;
//     if(left>right)  break;
//     let temp= arr[left];
//     arr[left]=arr[right];
//     arr[right]=temp;
// }
// return arr
// }
// console.log(negNumber(arr))
/////////////////////////////////////////////////////////////
//rotate array

// function rotateArray(arr,k){
// let deleteArray= arr.splice(arr.length - k)             //   [5,6,7]
// for(let i=0; i<deleteArray.length;i++){
//     arr.splice(i,0,deleteArray[i])      //        splice[0,0,5]      //splice[1,0,6]
//     //console.log(`step ${i+1}`,arr)
// }
// return arr
// }
// console.log(rotateArray([1,2,3,4,5,6,7],3))       //output==[5,6,7,1,2,3,4]

//2 method
// function reverse(arr){
//     let left=0;
//     let right=arr.length-1;
//     while(left<right){
//         let temp=arr[left]
//         arr[left]=arr[right]
//         arr[right]=temp;
//         left++;
//         right--;
//     }
//     //return arr
// }

// function rotate(nums,k){
//     k=k%nums.length
//     reverse(nums,0,nums.length-1)
//     reverse(nums,0,k-1)
//     reverse(nums,k, nums.length-1)
//     return nums
// }
// console.log(rotate([1,2,3,4,5,6,7],3))           //output[5,6,7,1,2,3,4]
// //////////////////////////////////////////////////////////////////////////////

// //2 method rotate array

// function rotateArray1 (nums, k) {

//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }
  
//     return nums;
//   }
//   console.log(rotateArray1([1,2,3,4,5,6,7],3))
/////////////////////////////////////////////////////////////////////

//minimum jump in array

// function jumpingArray(arr){
//     let des=0;
//     let jump=0;
//     let pos=0;
//     for(let i=0;i<arr.length-1;i++){
//         des= Math.max(des, arr[i]+1);
//         if(pos==i){
//             pos=des;
//             jump++
//         }
//     }
//     return jump

// }
// console.log(jumpingArray([2,3,1,1,4]))
// //////////////////////////////////////////////////////////////

//right sight number exchange to big number
//input==[17,18,5,4,6,1]   output==[18,6,6,6,1,-1]

// function replaceArray(arr){
//    let max=0;
//    for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//     if(arr[j]>max) max=arr[j]
//     }
//     arr[i]=max
//     max=0;
//    }
//    arr[arr.length-1]=-1
//    return arr
// }
// console.log(replaceArray([17,18,5,4,6,1]))

/////////////////////////////////////////////////////////////////////

//triplet sum array
// function triplet(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             for(let k=i+2;i<arr.length;k++){
//                 if(arr[i]+arr[j] + arr[k]===0) return [arr[i],arr[j],arr[k]]
//             }
//         }
//     }
//     return -1
// }
// console.log(triplet([1,4,45,6,10,8]))
//gadbad h
//////////////////////////////////////////////////////////////////
//swap only first n last charcter

// function swap(value){
// let length=value.length
// return  value.charAt(length-1) + value.substring(1,length-1) + value.charAt(0);
// }
// console.log(swap("hello"))
//////////////////////////////////////////////////////////////////////////////
//console.log(eval('10*10+5'))

/////////////////////////////////////////////////////////////

// function vaildParenthese(str){
//     let map={
//         "{":"}",
//         "(":")",
//         "[":"]"
//     }
//     let stack=[];
//     for(let ch of str){
//         if(map[ch]) stack.push(map[ch]);
//         else if(stack.pop() !==ch) return false;
//     }
//     return !stack.length
// }
// console.log(vaildParenthese("{[()]}"))
/////////////////////////////////////////////////

//using while loop


// function jumpingArray(arr){
//         let des=0;
//         let jump=0;
//         let pos=0;
//         let i=0;
//         while(i<arr.length-1){
//             des= Math.max(des, arr[i]+1);
//             if(i==pos){
//                 pos=des;
//                 jump++
//             }
//             i++
//         }
//         return jump
    
//     }
//     console.log(jumpingArray([2,3,1,1,4]))
//     console.log(jumpingArray([2,3,0,1,4]))

///////////////////////////////////////////////

// function index(nums, target) {
//     let i = 0
//     let j = nums.length
//     while (i <= j) {
//         const middle = Math.floor((i + j) / 2)
//         if (nums[middle] == target) {
//             return middle
//         } else if (nums[middle] < target) {
//             i += 1
//         } else {
//             j -= 1
//         }


//     }
//     return i
// }
// console.log(index([1, 2, 3], 3))
/////////////////////////////////////////////////
//interview ques

// let s= "aaabbbacc"
// let str=s.split("")                //let str=[...s]
// function repearted(str){
//     let map={};
//     for(let aplha of str){
//     if(map[aplha]){
//         map[aplha] +=1
//     }else{
//         map[aplha] =1
//     }
//     }
//     let val={};
//     for(let key in map) val[map[key]]=key
//     return val
    
// }
// console.log(repearted(str))
// //////////////////////////////////////////////////////////////

// let arr=[1,2,3,0,1,2,3]
// function repeatCount(arr){
//     let map={};
//     for(let num of arr){
//         if(map[num]){
//             map[num] +=1
//         }else{
//             map[num] =1
//         }
//     }
//     //return map
//     let val={};
//     for(let key in map) val[map[key]] = key
//     return val
// }
// console.log(repeatCount(arr))

//////////////////////////////////////////////


