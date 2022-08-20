//Write a JS code to print numbers from 1 to 10

// function NumberPrint(){
//     for(let i=0;i<=10;i++){
//         console.log(i)
//     }
// }
// NumberPrint()

///2==////////////////////////////////////////////
// function divideNum(){
//     for(let i=1;i<=100;i++){
//         if(i%3==0 && i%5 !==0){
//             console.log(`${i} apple`)
//         }
//         if(i%3 ==0 && i%5==0){
//             console.log(`${i} apple & orange`)
//         }
//     }
// }

// divideNum()
//////////////////////////////////////////////////////////////

//3///Write a JS code to print a 2D array
// function MatrixArray(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[0].length;j++){
//             console.log(arr[i][j])
//         }
//     }
// }
// var arr= [[1,2],
//           [3,4],
//           [5,6]]
// MatrixArray(arr)
/////////////////////////////////////////////
//4===Write a JS code to print Even numbers in given array

// function EvenNum(){
//     for(let i=0;i<=100;i++){
//         if(i%2==0){
//             console.log(`${i} number is even`)
//         }else{
//             console.log(`${i} number is not even`)
//         }
//     }
// }
// //var arr = [13,23,12,45,22,48,66,100]
// EvenNum()
///////////////////////////////////////////////////////////
//5==Write a JS code to delete all occurrence of element in given array

// function occuraElement(arr,ele){
//  for(let i=0;i<arr.length;i++){
//      if(arr[i]==ele){
//          arr.splice(i,1)
//      }
//  }
//  return arr
// }
// const res= occuraElement([2,3,4,5,6,7],7)
// console.log(res)

// let arr=[2,3,4,5,6,7,7,8,8]
// let newArr=[...new Set(arr)]
// console.log(newArr)
/////////////////////////////////////////

//6==Write a JS code to demonstrate Async loop
//  for(let i=0;i<=5;i++){
//      setTimeout(()=>console.log(i),5000)
//  }

/////////////////////////////////////////////////////
//7===Write a JS code to find the power of a number using for loop

// function powerNum(num,pow){
//     let res=1;
//     for(let i=0;i<pow;i++){
//         res=res*num
//     }
//     return res
// }
// const result=powerNum(4,3)
// console.log(result)
//////////////////////////////////////////
//8===Write a JS code to print a pattern using for loop

// for(let i=1;i<=5;i++){
//     let str=" "
//     for(let j=1;j<=i;j++){
//      str  += j+" "   
//     }
//     console.log(str)
// }
//////////////////////////////////////////////////

//9==Write a JS code to calculate the sum of digits in a number

// function sumNum(num){
//     let sum=0;
//     while(num !=0){
//         sum += num%10;
//         num=Math.floor(num/10)

//     }
//     return sum
// }
// console.log(sumNum(4325))
/////////////////////////////////////////////////////////
//10===Write a JS code to find the largest number in an array

// function maximumNumber(arr){
//    let max=1;
//    for(let i=0;i<arr.length;i++){
//        if(arr[i]>max){
//            max=arr[i]
//        }
//    }
//    return max
// }
// console.log(maximumNumber([5,7,9,12,56]))
//////////////////////2--method/////////////////////////////////////
// var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];  
// let largest=arr[0];
// for(let i=0;i<arr.length;i++){
// largest=arr[i]>largest?arr[i]:largest
// }
// console.log(largest)
////////////////////////////////////////////////////////////////
//Write a JS code to find the number of zeros in 2D Matrix

// var arr = [[0,1,1],[0,1,0],[1,0,0]];
// let zeroCount=0;
// for(let i=0;i<arr.length;i++){
//     for(let j=0; j<arr[0].length;j++){
//         zeroCount =arr[i][j]==0 ?zeroCount+1:zeroCount
//     }
    
// }

// console.log(zeroCount) //5
//////////////////////////////////////////////////////
//Write a JS code to find product of two arrays

// function findProduct(arr1,arr2){
//     let Arrprod=arr1.length>arr2.length? arr1:arr2
//     for(let i=0; i< Math.min(arr1.length, arr2.length);i++){
//         Arrprod[i]=arr1[i]*arr2[i]
//     }
//     return Arrprod
// }
// var arr1 = [3,45,23,78,34];
// var arr2 = [4,2,34,4,12,1];
// console.log(findProduct(arr1,arr2))
/////////////////////////////////////////////////////////
//Write a JS code to find duplicate values in a given array

// function findDup(arr) {
//     var arrDup=[]
//     for(var i=0; i<arr.length; i++){
//        if(arr.indexOf(arr[i])!=i&&arrDup.indexOf(arr[i])==-1){
//          arrDup.push(arr[i]);
//        }
//     }
//     return arrDup;
//   }
//   var arr = [4,2,34,4,1,12,1,4];
  
//   console.log(findDup(arr)); //[4, 1]
///////////////////////////////////////////////////////////////////
// for(let i=1;i<=100;i++){
//     if(i%3==0){console.log(`${i} fizz`)}
//     if(i%5==0){console.log(`${i} buzz`)}
//     if(i%3==0 && i%5==0){console.log(`${i} fizzbuzzzzzz`)}
//     }
//////////////////////////////////////////////////////////////////
//1 to 20 number print 17 and 20 number nhi print ho

// function print(num){
//     for(let i=1;i<=num;i++){
//         if(i===17 || i===20) continue
//         console.log(i)
//     }
//     
// }

// console.log(print(20))
///////////////////////////////////////
//console.log(null==undefined)
////////////////////////////////////////)
//1 to 20 number print 17 and 20 number nhi print ho
// for(let i=1;i<=20;i++){
//     if(i===17 || i===20)continue
//     console.log(i)
// }
////////////////////////////////////////////////////////

// for(let i=72;i<=78;i++){
//     if(i===78) continue
//     console.log(i)
// }
///////////////////////////////////////////////
//only print 78 & 79

// for(let i=72;i<=80;i++){
//     if(i==78 || i==79)
//     console.log(i)
// }
// //////////////////////////////////
//write a program print 1 to 20 skip 5,6,10

// for(let i=1;i<=20;i++){
//     if(i==5 || i==6|| i==10)continue
//     console.log(i)
// }


/////////////////////////////////////////////
// var a=10;
// let a=20;
// console.log(a)
/////////////////////////////////////
// let str="Hello World"
// let s1=str.split(" ").join("")
// console.log(s1)
/////////////////////////////////////////
// for(i=0;i<100;i--){
//     console.log(i)
// }
///////////////////////////////////////////////

// console.log(1);
//    setTimeout(() => console.log(2), 0)
//    new Promise((res, rej) => res(console.log(3)))
//    console.log(4)
//    /////////////////////////////////////////////////
//    const f1 = () => {
//     let a = 21;
//     a+=1;
//     a+=1;
//     return () => {
//       console.log(a);
//     };
//    };
    
//    f1()();
///////////////////////////////////////
// function func(){
//    console.log("birabal")
// }
// function func(){
//    console.log("raja")
// }
// func()
//////////////////////////////
// console.log(typeof a);
// console.log(typeof b);
// function a(){

// }
// var b=function(){
//    ;
// }
///////////////////////////////////
// console.log(+new Date());
// console.log(Date.now());
////////////////////////////////////////////////////////////////

// const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
// const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
// console.log(flattenArr)
// //////////////////////////////////////////////////////////////////////////////////////////



