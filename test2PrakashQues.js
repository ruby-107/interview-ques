
//1===>reverse arr

// let arr=[12,3,2,5,3,6,3,50,70]
// function sorting(arr){
//     let i=0;
//     let j=arr.length-1
//     while(i<j){
//         [arr[i],arr[j]] =[arr[j],arr[i]]
//         i++;
//         j--;
//     }
//     return arr
// }
//console.log(sorting(arr))
/////////////////////////////////////////
// let arr=[12,3,2,5,3,6,3,50,70]
// function rev(arr){
//     let temp;
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j] =temp;
//             } 
//     }
// }
//     return arr
// }
// console.log(rev(arr))
///////////////////////////////////////////

//2==>input==[1,2,3,4] ===output==[-1,1,2,3]

// function inputValue(arr){
//     let s1=[];
//     for(let i=0;i<arr.length;i++){
//    if(i==0){
//     s1.push(-1)
//    }else{
//     s1[i] = arr[i-1]
//    }
//     }
//     return s1
// }
// console.log(inputValue([1,2,3,4]))

////////////////////////////////////////////
///input==[17,18,5,4,6,1]   output==[18,5,4,6,1,-1]

// function shiftArr(arr){
    
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]=arr[i+1]){
//         arr[i] =arr[i+1]
//       }
// }
// arr[arr.length-1] =-1
// return arr

// }
// console.log(shiftArr([17,18,5,4,6,1]))
//////////////////////////////////////////

//input=[17,18,5,4,6,1]  output==[-1,17,18,5,4,6]

// function rightShift(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]=arr[i-1]){
//             arr[i-1]=arr[i]
//         }
//     }
//     arr[0]=-1
//     return arr
// }
// console.log(rightShift([17,18,5,4,6,1]))
//wrong h y abhi
//////////////////////////////////////////////////////

// function rightshift(arr){
//     let arr1=[]
//     for(let i=0;i<arr.length;i++){
//         if(i==0){
//             arr1.push(-1)
//         }else{
//             arr1.push(arr[i-1])
//         }
//     }
//     return arr1
// }
// console.log(rightshift([17,18,5,4,6,1]))
//////////////////////////////////////////////////////////

/// // // siht si a ginrts

// function strRev(s){
//     let str = " "
//     for(let i=s.length-1;i>=0;i--){
//         str=str+s[i]
//     }
//     return str
// }
// console.log(strRev("this is a string"))
//////////////////////////////////////////////////////////

// let str="best of luck"
// let rev=str.split(" ").reverse().join(" ")
// let temp=""
// for(let i=rev.length-1;i>=0;i--){
//  temp += rev[i].replace("," ," ")
// }
// console.log(temp)
///////////////////////////////////////////

// let str="my name is ruby"
// let arr=str.split(" ")
// function reverse(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         [arr[i],arr[j]] =[arr[j],arr[i]]
//         i++;
//         j--;
//     }
//     return arr.join(" ")
// }
// console.log(reverse(arr))                  //output==>ruby is name my

/////////////////////////////////////////////////////////////
//incremaent arr

// let arr=[5,3,6,7,2,3,8]
// function IncrementArr(arr){
//     let temp;
//     for(let i=0;i<arr.length;i++){
//          for(let j=0;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//          }
//     }
//     return arr
// }
// console.log(IncrementArr(arr))
///////////////////////////////////////////////
//  let arr = [5,3,6,7,2,3,8]
//  let temp
//  for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//         temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         }
//     }
//  }
//  console.log(arr)
//////////////////////////////////////////
//find commom element in the array

// let arr1=[1,2,3,4,5,6,7]
// let arr2=[5,9,10,4,11,12]
// let arr3=[13,5,15,16,17]
// let a=[];
// let b=[];
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             a.push(arr2[j])
//             break;
//         }
//     }
// }
// for(let k=0;k<arr3.length;k++){
//     for(let l=0;l<a.length;l++){
//         if(a[l]==arr3[k]){
//             b.push(arr3[k])
//         }
//     }
    
// }
// console.log(...b)
/////////////////////////////////////

// let arr1=[2,4,5,6,8,34,56,78,11]
// let arr2=[4,7,23,6,8,45,77,89]
// let s=[];
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]== arr2[j]){
//             s.push(arr2[j])
//         }
//     }
// }
// console.log(...s)
///////////////////////////////////////////////

// let arr=[1,2,3,[4,5,[6,7],8,9]]
// function falttern(arr){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             result.push(...falttern(arr[i]))
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(falttern(arr))
////////////////////////////////////////////////

///positive number count 

// let arr=[0,-10,1,2,3,4,5,-20]
// let pos=[]
// let neg=[]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]<0){
//     neg.push(arr[i])
//   }else{
//     pos.push(arr[i])
//   }
// }
 
// console.log(pos.length)
///////////////////////////////////////

// let arr=[4,5,2,1,7,6]       //output==>[-1,4,5,5,5,7]

// function shiftArray(arr){
//     let arr1=arr[0];
//     arr[0]=-1
//     for(let i=0;i<arr.length;i++){
        
//             if(arr1[i]>arr[i]){
//                 arr[i] =arr1
                
//         }else if(arr[i]<=arr1){
//             let temp= arr[i]
//             arr[i]=arr1
//             arr1=temp;
//         }
//     }
//     return arr
// }
    
// console.log(shiftArray([4,5,2,1,7,6]))

//wrong h ques
////////////////////////////////////////////////////

// let arr=[1,2,3,1,3,2,1,3,2,1,3,3,1,2,3,1,2,3]
// function countingNum(arr){
//     let map={};
//     for(let i=0;i<arr.length;i++){
//         if(map[arr[i]]){
//             map[arr[i]] += 1
//         }else{
//             map[arr[i]]  =1
//         }
//     }
//     return map
// }
// console.log(countingNum([1,2,3,1,3,2,1,3,2,1,3,3,1,2,3,1,2,3]))
// ////////////////////////////////////////////////////////////////////////
// let arr=[1,2,3,1,3,2,1,3,2,1,3,3,1,2,3,1,2,3]
// let count=0;
// let res=0;
// let result=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==1){
//         count++
//     }
//     if(arr[i]==2){
//         res++
//     }
//     if(arr[i]==3){
//         result++
//     }
    
// }
// console.log("1 is time" + " "+ count)
// console.log("2 is time" + " "+ res)
// console.log("3 is time" + " "+ result)

///////////////////////////////////////////////////
// function swap(arr){
//     [arr[arr.length-1],arr[arr.length-2]] = [arr[arr.length-2],arr[arr.length-1]]
//     return arr
// }
// console.log(swap([1,2,3,4,5]))

////////////////////////////////////////////////////////////////////////

