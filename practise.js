// //Remove duplicates in an array
// // let a=[7,1,1,2,3,4,5,0,5];
// // let b=[];
// // //a.sort();
// // let temp;
// // for(let i=0;i<a.length-1;i++){
// //     if(a[i] !=temp){
// //         b.push(a[i])
// //         temp=a[i]
// //     }
// // }
// // console.log(b)
// ///1
// let reason = {
// 	100:'Incorrect product received',
// 	200:'Product does not fit well',
// 	300:'Quality unsatisfactory',
// 	400:'I changed my mind',
// 	500:'Product received is defective',
// 	600:"It doesn't look good on me",
// 	700:'Look & feel differs from what I saw on Tata CLiQ',
// 	800:'Found a better price',
// 	900:'Part of the order is missing'
// 	}
// //let res = findReason(100)
// console.log(reason[100])
// console.log(reason[200])
// //Incorrect product received





// let obj = {a:1, b:2}
// let obj1={}
// //let obj1 = obj;
// let newObject= Object.assign(obj1,obj)
// console.log(newObject)
// obj1.b = 3
// console.log(obj,obj1)



// //2 Add numbers
// 1 + 2 + 3 +……..+ n
// n=10

// function recursion(n){
//     if(n<=1)
//     return n;
//     return n +recursion(n-1)
// }
// console.log(recursion(10))

////orrrr/////////////////////////
// function natural(n){
//     if(n==1){
//         return n
//     }
//     return n+natural(n-1)
// }
// console.log(natural(10))
// //////////////duplicaation remove////////////
// let arr=[12,23,12,12,23,4,5,6,6];
// function freqency(){
//     let freq= new Map()
//     for(let i=0;i<arr.length;i++){
//         if(freq.get(arr[i])==undefined){
//             freq.set(arr[i],1)
//         }else{
//            freq.set(arr[i],freq.get(arr[i])+1)
//         }
//     }
//         console.log(freq)
       
// }
// freqency();
///////////////////////////////////////////////////////

// function duplication(arr){
//     let map={}
//     for(let i=0;i<arr.length;i++){
//         if(map[arr[i]]){
//             map[arr[i]] +=1
//         }else{
//             map[arr[i]]=1
//         }
//     }
//     let result=[]
//     for(let key in map){
//         result.push(key)
//     }
//     return result.join(" ")
// }
    

// console.log(duplication([12,12,3,4,4,5,6]))


// ////////////////////////////////////////////////////
// var arr=[1,0,8,0,0,5,3,0,0,2]
// function moveZero(arr){
//     var zero=[]
//     var nonzero=[]
//     //let r=arr.length-1;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==0){
//             zero.push(arr[i])

//         }else{
//             nonzero.push(arr[i])
//         }
//     }
//     var ans= nonzero.concat(zero)
//     return ans
// }
// console.log(moveZero(arr))
// ///////////////////////////////
 //var arr=[1,0,5,8,0,0,3,0,0,2]
// function countZero(arr){
//     let zero=[]
//     let nonzero=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==0){
//             zero.push(arr[i])
//         }else{
//             nonzero.push(arr[i])
//         }
//     }
//     //const res=nonzero.concat(zero)
//     const res=zero.concat(nonzero)
//     return res
// }
// console.log(countZero([1,0,5,8,0,0,3,0,0,2]))


// ////////////////////////////////////////
 ///////////////////////////////////
//  function dupli(arr){
//     let ans = new Set()
// for(let i =0;i<arr.length;i++)
   
//   {  ans.add(arr[i])}
//   return ans
// }

// console.log(dupli([1,1,2,3,4,5,6,7,6,5,4,3,2,1]))
////////////////////////////////////////////////////////////
//interview ques 6-june

// function dice(start,end){
//     let currTime=new Date().getTime()
//     console.log(currTime)

//     let res=currTime/10;
//     console.log(res)

    
// }


// dice(1,6)

// ////////////////////////////////////////////////////////////
// var newArr=[]
// var employee={"name":"ABC","CODE":"A01"}
// var officeDetail= {"address":"delhi","name":"new house pvt"};
// var personal={"gender":"M","dob":"31/01/1993"}
// newArr.push(employee);
// newArr.push(officeDetail);
// newArr.push(personal);
// console.log(newArr)

///////////////////////////////////////////////////
// function(){
//     if(this.isWRNotProcessed()){
//         if(this.retriveWRMetaData()){
//             if(this.retrieveWRLines()){
//                 this.getDistinctOrders();
//                 if(this.createNewPOs()){
//                     this.approvePOs();
//                 } else{this.displayError();}
//             } else{this.displayError();}
//         } else{this.displayError();}    
//     } else{this.displayError();}
//       }

///////////////////////////////////////////////////////////////

//////////////////////////////////////////////
// let arr=[1,2,3,4,5,7]
// function missingNum(){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     let minimum=Math.min(...arr)
//     let maximum=Math.max(...arr)
//     //console.log(minimum,maximum)
//     let acutalSum=0;
//     for(let i=minimum;i<=maximum;i++){
//         acutalSum +=i
        
//     }
//     //console.log(acutalSum)
//     return acutalSum-sum
    
// }
// const res=missingNum(arr)
// console.log(res)
///////////////////////////////////////
//let arr=[1,0,8,0,0,5,3,0,0,2] 
//negative and positive
// function zeroCount(array){
//     let left=0;
//     let right=array.length-1;
//     while(left<right){
//         if(array[left]>0 && array[right]<0){
//             left++;
//             right--;
//         }else if(array[left]<0 && array[right]>0){
//             [array[left],array[right]]=[array[right],array[left]]
//         }else if(array[left]<0 && array[right]<0){
//                 right--;
//             }else{
//                 left++;
//             }
//     }
// return array
// }
// const res= zeroCount([-1,-2,-3,-4,2,3,4,5,-1,-2] )
// console.log(res)

// function numCount(arr){
//     let neg=[];
//     let pos=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<0){
//             neg.push(arr[i])
//         }
//         if(arr[i]>1){
//             pos.push(arr[i])
//         }
//     }
//     let res=pos.concat(neg)
//     return res
// }
// console.log(numCount([-1,-2,-3,-4,2,3,4,5,-1,-2]))
////////////////////////////////////////////////////
// let arr=[1,0,5,8,0,0,3,0,0,2]
// function countZeros(arr){
//     let left=0;
//  for(let i=0;i<arr.length;i++){
//      if(arr[i] !=0){
//          arr[left++]=arr[i]
         
//      }
//     }
//      for(let i=left;i<arr.length;i++){
//          arr[i]=0
//      }
//  return arr

// }
// const res=countZeros(arr)
// console.log(res)
///////////////////////////////////////////////////////
//Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// function ratateIndex(arr){
    
//     let arr1=0;
//     for(let i=0;i<arr.length;i++){
//          arr1=arr[i]
           
//            arr[i]=arr[arr.length-1]
//            arr[arr.length-1]=arr1   
//     }
//     return arr

// }
// let arr=[1,2,3,4,5]
// const res=ratateIndex(arr)
// console.log(res)



// Output:
// 5 1 2 3 4
 
//////////////////////////////////////////////////////////////
// // Example 2:

// Input:
// N = 8
// A[] = {9, 8, 7, 6, 4, 2, 1, 3}
// Output:
// 3 9 8 7 6 4 2 1
/////////////////////////////////////////////////////////

// function rotateIndex(arr){
// [arr[0],arr[arr.length-1]] =[arr[arr.length-1],arr[0]]
// return arr
// }
// const res=rotateIndex([1,2,3,4,5])
// console.log(res)
////////////////////////////////////////////////////
//second largest
// function secondLargest(arr){
//     let largest=arr[0];
//     let secondLar=arr[arr.length-1]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             secondLar=largest;
//             largest=arr[i]
//         }else if(arr[i]>secondLar){
//             secondLar=arr[i]
//         }
//     }
//     return secondLar
// }
// const res=secondLargest([2,3,4,5,6,8,9,10])
// console.log(res)
////////////////////////////////////////////////////
//largest sum
// function largestSum(arr){
// let largest=arr[0];
// let second=arr[arr.length-1]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         second=largest;
//         largest=arr[i]
//     }else if(arr[i]>second)
//     second=arr[i]
// }
// return second+largest
// }
// const res=largestSum([2,3,4,5,6,8,9,10])
//  console.log(res)
/////////////////////////////////////////////////

// function getSumPairZero(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         sum=arr[i]+arr[j]
//         if(sum==0){
//             return [arr[i],arr[j]]
//         }else if(sum>0){
//             j--;
//         }else{
//             i++;
//         }
//     }
//     return arr
// }

// console.log(getSumPairZero([-5,-4,-3,-2,0,3,4,5,6,8]))
/////////////////////////////////////////////////
// function reverseArr(arr){
//  let i=0;
//  let j=arr.length-1
//  while(i<j){
//    let temp=arr[i];
//    arr[i]=arr[j];
//    arr[j]=temp
//        i++;
//        j--;
//    }
 
//  return arr;
// }
// const res=reverseArr([2,3,5,6,7,8])
// console.log(res)
////////////////////////////////////
// function countZero(arr){
//  let map={}
//  for(let i=0;i<arr.length;i++){
//      if(map[arr[i]]){
//          map[arr[i]] +=1;
//      }else{
//          map[arr[i]] =1
//      }
//  }
//  let count=0;
//  for(let key in map){
//      if(key==='0') count=map[key]

//  }
//  return count
// }
// const res=countZero([0,2,3,0,0,0,4,5])
// console.log(res)
/////////////////////////////////////////////////////////
//anagram

// function anagram(s1,s2){
//     if(s1.length !== s2.length){
//         return false
//     }
//     let count={}
//     for(let letter of s1){
//         if(count[letter]){
//             count[letter] +=1;
//         }else{
//             count[letter]=1
//         }
//     }
//     for(let item of s2 ){
//         if(!count[item]){
//             return false
//         }
//         count[item] -=1
//     }
//     return true
         
// }
// const res = anagram("hello","hlleo")
// console.log(res)
///////////////////////////////////////////

// let arr = [12,3,6,2,9,11] // => [9,11,12,3,6,2]
// function reverse(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         // arr[i]=arr[i]+arr[j];
//         // arr[j]=arr[i]-arr[j];
//         // arr[i]=arr[i]-arr[j];
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//         i++;
//         j--;

//     }
//     return arr;
// }
// const firstreverse=reverse(arr)
// console.log(firstreverse)
// const secondreverse=reverse(firstreverse.slice(0,2))
// const finalreverse=reverse(firstreverse.slice(2));

// console.log(secondreverse.concat(finalreverse))
////////////////////////////////////////////////////////
// function fact(n){
//     if(n==1||n==0){
//         return 1
//     }
//     return n* fact(n-1)
// }
// console.log(fact(5))
//////////////////////////////////////
// for(let i=1;i<=200;i++){
//     if(i%3==0 && i%5 ==0){
//         console.log(`${i} apple and ornage`)
//     }
//     if(i %3 ==0){
//         console.log(`${i} apple` )
//     }
// }
/////////////////////////////////////////////
// let array=[2,4,5,7,8,9,10]
// function is_an_even_number(array){
// 	var count = 0;
// 	for(let i = 0 ; i < array.length; i++) {
// 		if (array[i] % 2 === 0){
// 			count++;
// 		}
// 	}
// 	return count;
// }
// console.log(is_an_even_number(array))
///////////////////////////////////////////////
// let arr=[2,4,5,7,8,9,11]
// function oddCount(arr){
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2 !=0){
//             count++
//         }
        
//     }
//     return count
// }
// console.log(oddCount(arr))


//////////////////////////////////////////////////////

// function divisible(num){
//     if(num%3==0 && num%5 !==0){
//         console.log("a")
//     }
//     else if(num%5==0 && num%3 !==0){
//         console.log("b")
//     }
//     else if(num%3==0 && num%5==0){
//         console.log("c")
//     }
// }
// divisible(15)
/////////////////////////////////////////
// function isPrime(n){
//     if(n<2){return false}
//     for(let i=0;i<=parseInt(n);i++){
//         if(n%i==0){
//             return false
//         }
       
//     }
//     return true
// }
// function printPrime(x){
//     for(let i=0;i<=x;i++){
//         let count =0;
//         if(isPrime(i)){count++
//         console.log(`${count} prime number is ${i}`)}
//     }
// }
// printPrime(100)
///////////////////////////////////////////////////////
// function arrayChallenge(arr){
//     let count = [];
//     let result=[];
//     for(let i =0;i<arr.length;i++){
//         for(let j =i+1;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 count.push(i,j);
//                 break;
//             }
//             count.length=0;
//         }
//     }
//     result =[...new Set(count)];
//     return result.length;
// }
// console.log(arrayChallenge([1,2,3,0,1,2,3]))
/////////////////////////////////////////////////////////////


// for(let n=1;n<=20;n++){
//     if(n%3==0){console.log("a")}
//     if(n%5==0){console.log("b")}
//     if(n%3==0 && n%5==0){console.log("a&b")}
// }

// async function f1(){
//     await console.log("hello india")
// }
// f1()

// async function f2(){
//     await f1()
//     await console.log("everone")
// }
// f2()


//setTimeout(()=>{console.log("hello")},2000)

// let num=[2,56,34,78,678,900,77,82]
// num.sort()
// console.log(num)

// let arr=[2,2,3,3,6,7,9,9,45,67,89,45]
// function duplicaation(arr){
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//         if(obj[arr[i]]){
//             obj[arr[i]] +=1
//         }else{
//             obj[arr[i]] =1
//         }
//     }
//     let res=[]
//     for(let key in obj){
//         res.push(key)
//     }
//     return res
// }
// console.log(duplicaation(arr))






