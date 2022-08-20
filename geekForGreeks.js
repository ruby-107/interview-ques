//1==peak element

const { on } = require("nodemon")

function peak(arr){
    if(arr.length==0) return 0
    for(let i=0;i<arr.length;i++){
        if(i==0 && arr[0]>arr[1]) return 0
        if(i=arr.length-1 && arr[i]>arr[i-1]) return arr.length-1
        if(arr[i]>arr[i-1] && arr[i-1]>arr[i+1]) return i
    }
    return -1
}
//console.log(peak([1,2,3]))
////////////////////////////////////////////////////////
//2==minimum and maximum number in a array

function number(arr){
    let min=arr[0];
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return {min,max}
}
//console.log(number([1, 345, 234, 21, 56789]))

//////////////////////////////////////////////////////
//3==reverse an array

function reverse(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        [arr[i],arr[j]] =[arr[j],arr[i]]
        i++;
        j--;
    }
    return arr
}
//console.log(reverse([1,2,3,4]))
//////////////////////////////////////////////////////////

//4==Sort The Array 

function sortArr(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]) {
                [arr[i],arr[j]] =[arr[j],arr[i]]
            } 
            
        }
    }
    return arr
}
//console.log(sortArr([1,5,4,3,7,9]))

//////////////////////////////////////////////////////

//5===third smallest Kth smallest element 

function thirdSmallest(arr){
    for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            [arr[i],arr[j]] =[arr[j],arr[i]]
        }
    }
    }
    return arr[3]
}
//console.log(thirdSmallest([2,4,6,14,34,56]))

/////////////////////////////////////////////////////////
//6==find the frequency

function freqency(arr){
    let map={}
    for(let key of arr){
        if(map[key]){
            map[key] +=1
        }else{
            map[key] =1
        }
    }
    return map
}
//console.log(freqency([1,1,1,1,1,1]))
//////////////////////////////////////////////////////////////
//7==>Sort an array of 0s, 1s and 2s 

function numberRearrange(arr){
    let zero=[];
    let one=[];
    let two=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            zero.push(arr[i])
        }
        if(arr[i]==1){
            one.push(arr[i])
        }
        if(arr[i]==2){
            two.push(arr[i])
        }
    }
    let res=[...zero,...one,...two]
    return res
}
//console.log(numberRearrange([0,1,2,0,1,2]))
////////////////////////////////////////////////////////////////////
//8==>union of two array
// function union(arr1,arr2){

//     let res=[...arr1,...arr2]
//     let map={}
//     for(let key of res){
//         if(map[key]){
//             map[key] +=1
//         }else{
//             map[key] =1
//         }
//     }
//     return Object.keys(map)
// }
//console.log(union([1,2,3,4,5],[1,2,3]))


//2 method

// let a=[1,2,3,4,5];
// let b=[1,2,3]
// let union=[...new Set([...a,...b])]
// console.log(union)

// function intersction(arr1,arr2){
//     let res=[]
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//      if(arr1[i]==arr2[j]){
//         res.push(arr1[i])
//      }
//         }
//     }
//     return res
// }
//console.log(intersction([1,2,3,4,5],[2,1,4]))
////////////////////////////////////////////////////

//Cyclically rotate an array by one A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4

// function rotate(arr){
//     let res=[]    //[]
//     res[0]=arr[arr.length-1]    //

//     for(let i=0;i<arr.length-1;i++){
//       res.push(arr[i])
//     }
//     return res
// }
// //console.log(rotate([1,2,3,4,5]))

////////////////////////////////////////////////////////////////

// let string1="abcabbcba"    //ab  //abb
// let string2= "abdabbdaa"
// let i=0;
// let j=0;
// let count=0
// let res=[]
// while(i<string1.length && j<string2.length){
//     if(string1[i] == string2[j]){
//      count++
//      //res.push(string1[i])
     
//  }else
//  {
//   res.push(count) 

//    count=0;

//  }
//  i++;
//  j++;
 

// }
// console.log(Math.max(...res))
//console.log(res)

////////////////////////////////////////////
//non-repeating
// Input : arr[] = {-1, 2, -1, 3, 2}
// Output : 3

// function nonRepeating(arr){
//     let map={}
    
//    for(let i=0;i<arr.length;i++){
//     map[arr[i]] ? map[arr[i]]++ : map[arr[i]]=1
//    }
//     let res=[]
//     for(let key in map){
//         //console.log(key)
//         if(map[key]==1) res.push(key)
//     }
//     return res
// }
// console.log(nonRepeating([-1, 2, -1, 3, 2]))
///////////////////////////////////////////////////////////////////////

//missing number
// function missingNumber(arr){
//     let minNum=Math.min(...arr)
//     let maxNum=Math.max(...arr)
//     let miss=[];
//     for(let i=minNum;i<maxNum;i++){
//         if(arr.indexOf(i)<0){
//             miss.push(i)
//         }

//     }
//     return miss
// }
// console.log(missingNumber([1,2,3,4,5,7]))

//////////////////////////////////////////////////////
//first repeated number in a array   //nhi hua h y ques

// ddependra n diya h
///////////////////////////////////////////////////////////////
//console.log(1-"1")


///////////////////////////////////////////////////////////////////
//1
// function rotate(arr,k){
//     for(let i=0;i<k;i++){
//         arr.unshift(arr.pop())
//     }
//     return arr
// }
// console.log(rotate([1, 2, 3, 4, 5, 6, 7],2))
/////////////////////////////////////////////////////////////
// Input: arr[] = {11, 15, 6, 8, 9, 10}, x = 16
// Output: true
// There is a pair (6, 10) with sum 16

// function SumArr(arr,k){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]+arr[j]==k){
//                 return true
//             }
//         }
//     }
//     return false

// }
// console.log(SumArr([11, 15, 6, 8, 9, 10],16))
//////////////////////////////////////////////////////////////////
