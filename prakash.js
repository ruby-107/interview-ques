// 5 days for if conditon it is my goals


// day 27 to 1/4/22
//  let arr=[12,3,2,5,3,6,3,50,70]
// function sorting(arr){
//     let temp;
//     for(i=0;i<arr.length;i++){
//         for(j=0;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }

// let c=sorting(arr)
// console.log(c)
// =========================================================================================================================for 
// let n=5
// let str="";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i
//         ;j++){
//         str += " "
//     }
//     for(let k=0;k<2*i-1;k++){
//         str += "*"
//     }
//     str += "\n"
// }
//  console.log(str)
// ============================================================================================================================================

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//     //   string += "*";
//     }
//       else {
//          if(j === 0 || j === n - 1) {
//            string += "*";
//          }
//        else {
//          string += " ";
//        }
//      }
//     }\
// //    newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string)

// let n=5
// let str=""
// for(i=n;i>0;i--){
//   for(k=0;k<i;k++){
//     str += "*"
//   }
//   for(j=0;j<n;j++){
//     str += " "
//   }
//   str += "\n"
// }
// console.log(str)

//  let n=6;
//  let str=""
// for(i=1;i<=n;i++){
//   for(j=1;j<=n-i;j++){
//     str += " "
//   }
//   for(k=0;k<2*i-1;k++){
//     if(i===1 || i===n){
//     str += "*"
//     }
//     else{
//       if(k==0 || k==2*i-2){
//         str += "*"
//       }
//       else{
//         str += " "
//       }
//     }
//   }
//   str += "\n"
// }
// console.log(str)
// let n=6
// let str =""
// for(i=1;i<=n;i++){
//   for(j=0;j<=n-i;j++){
//     str += " "
//     }
//     for(k=0;k<2*i-1;k++){
//       str += "*"
//     }
    
//   str += "\n"
// }
//  for(b=n;b>0;b--){
//    for(f=0;f<=n-b;f++){
//      str += " "
//      }
//      for(e=0;e<2*b-1;e++){
//        str += "*"
//      }
//      str += "\n"
//  }
//  console.log(str)

// function* getPairs(array, left) {
//   var i = 0;
//   while (i < array.length) {
//       if (left) yield [left, array[i]];
//       else yield* getPairs(array.slice(i), array[i]);
//       i++;
//   }
// }

// var array = [1, 1, 2];

// console.log([...getPairs(array)])
// Replace every element with its previous element

// Given an array A of integers, write a program to replace each element in the array by the previous element. Replace the first element by -1.

 

// Input:

//     4

//     1 2 3 4

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     -1 1 2 3

 

// Explanation: Every element A[i] is replaced by A[i-1]. And the first element will be -1, as the first element doesn't have any previous element.

// let arr=[1,2,3,4]
// let arr1=[]
// for (i=0;i<arr.length;i++){
//     if(i==0){
//         arr1.push(-1)
//     }
//     else{
//         arr1.push(arr[i-1])
//     }
// }
// console.log(arr1)

 
// function reversestring(str){
// // // // siht si a ginrts

// let strrev=""
 
// const length=str.length-1
//  for(let i=length;i>=0;i--){
    
     
//      strrev=strrev+str[i]
     
//  }
//  return strrev
 
// }


// let str= "this is a string"
// console.log(reversestring(str))


// let arr=[1,2,1,4,5,6]
// let n=arr.length
//  let count=0
//  let b=[]
//  let c
//  let a
// for(i=0;i<n-1;i++){
//     for(j=i;j<i;j++){
//         if(arr[j]%arr[i]==0){
//             //  console.log(arr[j])
//             b.push(arr[j])
//         }else {
//             arr[j]=0
//             b.push(arr[j])
//         }
//         //  console.log(arr[i])
//     }
//     //  console.log(b)
//     // console.log(arr[i])
// }
//   console.log(...b)
// console.log(count)

// let  arr=[5 ,4 ,4 ,5 ,1 ,3]
// let val=0
// let result=0
// for(i=0;i<=arr.length-1;i++){
//     for(j=i;j<=arr.length-1;j++){
//         // console.log(val=val+arr[j])
//         val=val+arr[j]+1
//         if(val%2!==0){
//             result++


//         }
//         // console.log(result)
//     }
//     // console.log(result)
// }
//  console.log(result)
// let arr=[1 ,2 ,3 ,4]
// let arr1=[]
// for (i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         arr[i]+1
//         arr1.push(arr[i]+1)
//     }
//     else{
//         arr1.push(arr[i])
//     }
//     // console.log(...a)
// }
// console.log(arr1)
//  let n=5
//  let str=""
//  for(i=1;i<=n;i++){
//       for(j=1;j<=n-i;j++){
        
//          str += " "
//      }
//      for(k=0;k<2*i-1;k++){
//         //   if(i==1 || i==n){
//             if(i==1){
//               str += "*" 
//           }
//           else{
//               if(k==0 || k==2*i-2){
//                  str += "*"
//               }
//               else{
//                   str += " "
//               }
//           }
        
//      }
//      str += "\n"
//  }
//   for(i=n-1;i>0;i--){
//       for(j=1;j<=n-i;j++){
//           str += " "
//       }
//      for(k=0;k<2*i-1;k++){
//         //  if(i==n || i==0){
//             if(i==0){
//               str += "*" 
//           }
//          else{
//              if(k==0 || k==2*i-2){
//                  str += "*"
//               }
//              else{
//                  str += " "
//               }
//           }
        
//       }

//       str += "\n"
//   }


//  console.log(str)



//   function sumArray(arr, n)
//       {
//           let i = 0, temp = 0;
//           let Sum = [];
//           for( i=0;i<n;i++)
//              Sum[i] = 0
//           for (i = 0; i < n; i++) {
//               Sum[i] = temp
//               temp += arr[i]
//           }
//           temp = 0;
//           for (i = n - 1; i >= 0; i--) {
//             //   console.log(Sum[i] += temp);
//               console.log(Sum[i])
//               temp += arr[i];
//           }
//         //    for (i = 0; i < n; i++)
//             //    console.log(Sum[i] + " ");
//       }
//       let arr = [ 3, 6, 4, 8, 9 ];
//       let n = arr.length;
//       sumArray(arr, n);


// // 27 24 26 22 21

//  let arr = [ 3, 6, 4, 8, 9 ]
//  let rev=[]
//  let temp=[]
// for(i=arr.length-1;i>=0;i--){
//     rev +=arr[i]
//     temp=rev 
// }
//  console.log(temp.length)
// 33333333333333333333333333333333333333333333333333333333333333333333#####################################

// let str="best of luck"
// let rev=str.split(" ").reverse().join()
// let temp=""
// for(i=rev.length-1;i>=0;i--){
//     temp += rev[i].replace("," , " ")
// }
// console.log(temp)

// 33333333333333333333333333333333333333333333333333################################################################

// var str = "my name is saurabh ";
//  var empStr='',finalString='';
//  var chunk=[];
//  function reverse(str){
//  var i,j=0,n=str.length;
//      for(i=0;i<n;++i){
//          // for(j=0;j<n;){
//           if(str[i]===' '){
//               chunk[j]=empStr;
//                empStr = '';
//               j++;
//          }else{
//               empStr=empStr+str[i];
//          }
        
//      }
//      for(var z=chunk.length-1;z>=0;z--){
//          finalString = finalString +' '+ chunk[z];
//          // console.log(finalString);
//      }
//      console.log(finalString);
//           // return true;
//     }
//     reverse(str);
// ###############################################################
// let arr=[5,3,6,7,2,3,8]
// let temp
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
    
// }
// console.log(arr)
// #######################333333333333##################################################################################3
//    let str = "best of luck"
//    let blank=" "+str                                                                 
//    let arr=[]
//    let emptystr=""
//    let finalString=""
//    let n=str.length+1
//    let j=0
//    let string=""
//    for(x=n-1;x>=0;x--){
//        string += blank[x]
//    }
//      for (i=0;i<n;i++){
//         if(string[i]===" "){
//             arr[j]=emptystr
//            emptystr=""
//             j++
//         }
//         else{
//             emptystr=emptystr+string[i]
//         }
//      }
//     for(z=arr.length-1;z>=0;z--){
//         finalString=finalString +" "+arr[z]
//     }
//     console.log(finalString)
// let str="best of luck"
// let arr=str.split(" ").reverse().join()
// let temp=""
// for(i=arr.length-1;i>=0;i--){
//     temp += arr[i].replace("," , " ")
// }
// console.log(temp)
// // #################################################################################################################################
// let str="nadan"
// let arr=""
// for (i=str.length-1;i>=0;i--){
//     arr += str[i]
// }
// if(str===arr){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

// let n=5
// let str = ""
// for(i=n;i>0;i++){
//     for(j=0;j<n-1;j++){
//         str += " "
//     }
//     for(k=0;k<2*(n-i)-1;k++){
//         str += "*"
        
//     }
//     str += "\n"
// }

// console.log(str)
   

//  let arr1=[1,2,3,4,5,6,7]
// let arr2=[5,9,10,4,11,12]
// let arr3=[13,5,15,16,17]
// let a=[]
// let b=[]
// for(let i=0;i<arr1.length;i++){
//       for(let j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 a.push(arr2[j])
//                 break;
//             }
//       }
      
// }
// for(k=0;k<arr3.length;k++){
//     for(l=0;l<a.length;l++){
//         if(a[l]==arr3[k]){
//             b.push(arr3[k])
//             break;
//         }
//     }
//   }
// console.log(...b)

// let arr=[1,5,3,4,7,8,6]
// let count=[]
// let add=0
// let temp=-1
// outer: for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             // console.log(`found ${arr[i]} at index ${i} and ${j} and `)
//             count.push(arr[i])
//              break outer
//         }
//     } 
// }
// for(k=0;k<arr.length;k++){
//     for(l=0;l<arr.length;l++){
//         if(arr[k]==count[l]){
//             add++
//         }
//     }
    
// }

// console.log(add)


// function ok(arr){
//     const newarr=new Set()
//     let sum=0
//     for(i=0;i<arr.length;i++){
//             sum += arr[i]
//             if(sum===0  || newarr.has(sum))
//                 return true
//                 newarr.add(sum)
            
            
//          }
//          return false
// }
// let arr=[4,2,-3,1,6]  
// console.log(ok(arr))

// function rearrange(arr,n)

//     {

//         // The following few lines are similar to partition

//         // process of QuickSort. The idea is to consider 0

//         // as pivot and divide the array around it.

//         let i = -1, temp = 0;

//         for (let j = 0; j < n; j++)

//         {

//             if (arr[j] < 0)

//             {

//                 i++;

//                 temp = arr[i];

//                 arr[i] = arr[j];

//                 arr[j] = temp;

//             }

//         }
 

//         // Now all positive numbers are 

//         // at end and negative numbers at

//         // the beginning of array. 

//         // Initialize indexes for starting point

//         // of positive and negative numbers 

//         // to be swapped

//         let pos = i+1, neg = 0;
 

//         // Increment the negative index 

//         // by 2 and positive index by 1, i.e.,

//         // swap every alternate negative number

//         // with next positive number

//         while (pos < n && neg < pos && arr[neg] < 0)

//         {

//             temp = arr[neg];

//             arr[neg] = arr[pos];

//             arr[pos] = temp;

//             pos++;

//             neg += 2;

//         }

//     }
 

    // A utility function to print an array

    // function printArray(arr,n)

    // {

    //     for (let i = 0; i < n; i++)

    //         console.log(arr[i] + "   ");

    // }

    //     let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];

    //     let n = arr.length;

    //     rearrange(arr,n);
    //     printArray(arr,n)
        


//     function max(arr,n){
//         let max=Math.max(...arr)
//         let sum=0
//         for(i=0;i<n;i++){
//             sum += arr[i]
//         }
//         if(sum<0){
//         return max
//         }
//         return sum
//     }
        
    
//    let arr=[-1,-5,-3,-2,-5]
//    let n=arr.length
//    console.log(max(arr,n))
    



//    let a=[]
//    function fact(arr,n){
//     for(i=0;i<n;i++){
//         temp *=arr[i]
//         a.push(temp)
//     }
//     return Math.max(...a)

//    }
//    let arr=[-2,1,-3,4,-1,2,1,5,4]
//    let n=arr.length
//    let temp=1
//    console.log(fact(arr,n))
   


//   let arr=[1,9,3,10,4,20,2]

//   let temp

//   let a=arr.sort((b,c)=>{return b-c})

//   let c=[]
//   for(i=1;i<=arr.length;i++){
//     for(j=0;j<=a.length;j++){
//         if(i==a[j]){
//             c.push(a[j])
//         }
//     }
   
//   }
//   console.log(...c) 


//   function flatten(arr){
//     const result=[]
//     for(i=0;i<arr.length;i++) {
        
    
//         if(Array.isArray(arr[i])){
//             result.push(...flatten(arr[i]))
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result
//   }
//   let arr=[1,2,3,[4,5,[6,7],8,9]]
//   console.log(flatten(arr))


//   function traverse(arr){
//        let temp=1
//        let count=0
//        let store=[1]
//        for(i=0;i<arr.length-1;i++){
//         for(j=i+1;j<=i+1;j++){
//             if(arr[i]>arr[j]){
//                 store.push(temp)
//             }else{
//                 count +=2
//                 store.push(count)
//             }
//         }
//        }
       
//          console.log(...store)
//          return
           
//   }
//   let arr=[100,80,60,70,60,75,85]
//  console.log(traverse(arr))


//  arr=[1,2,4,3,6]
//  let x=10
//  let a=0
//  let temp=-1
//  for(i=0;i<arr.length;i++){
//     // a=arr[i]
//     for(j=i;j<arr.length;j++){
        
//      if(a===x){
//             console.log(1)
//             break
//         }else{
//             console.log(temp)
//         }
//         a +=arr[j]
        
        
//     }
//  }
//   console.log(a)


// function mispos(arr){
// let neg=[]
// let pos=[]
// for(i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         pos.push(arr[i])
//     }else{
//         neg.push(arr[i])
//     }
// }
// let n=pos.length

// for(j=0;j<n;j++){
//     if(pos[j]!==j+1)
//         return(j+1)
    
// }
// return n+1
// }
// let arr=[0,-10,1,2,3,4,5,-20].sort((a,b)=>{
//     return a-b
// })
// console.log(mispos(arr))

//////////////////////////////////////////
// function changepositon(arr,from,to) {
//     arr.splice(to,0,arr.splice(from, 1)[0])
  
//     return arr
//   }
//   let arr=[1,2,3,4,5]
//    let b=arr.reverse()
  
//   arr=changepositon(arr,2,3  )
//   console.log(arr)
// //////////////////////////////////////////////////////////

// let string="prakash"
// let reg=/[aouie]/gi
// let chr=string.match(reg)
// console.log(chr.length)
// console.log(chr.join(" "))
// // let string="helloworld"
// // let later="l"
// let c=0
//  strlen=string.length-1
// // console.log(strlen)
// for (i=0;i<strlen;i++){
//     if (string[i]==later){
//         c++;
//     }
// }
// console.log(c)

// console.log👎
// function great(arr,n){
//     let arr1=arr[0]
//     arr[0]=-1
//     // console.log("1",arr1)
//     for(let i=1;i<n;i++){
//         // console.log("2",i)
//         if(arr1>arr[i]){
//             arr[i]=arr1
//              console.log("3",arr[i])
//         }
//         else if(arr1<=arr[i]){
//             let temp=arr[i]
//             // console.log("4",temp)
//             arr[i]=arr1
//             // console.log("5",arr[i])
//             arr1=temp
//             // console.log("6",arr1)
//         }
//     }
//     console.log(...arr)
// }
// let arr=[4,5,2,1,7,6]
// let n=arr.length
// great(arr,n)
///////////////////////////////////////
//123132132133123123
// 1 is 4 times
// 2 is 3 times
//  let arr=[1,2,3,1,3,2,1,3,2,1,3,3,1,2,3,1,2,3]
//  let b=[...new Set(arr)]
//  //console.log(b)
//  let n=b.length
//  let temp=[]
//  let a=[]
//  let c=[]

//      for(let j=0;j<arr.length;j++){
//          if(b[0]==arr[j]){
//              temp += arr[j]  

//          }else if(b[1]==arr[j]){
//              a +=arr[j]
//          }else{
//              c += arr[j]
//          }
//      } 
//   console.log(`1 is ${temp.length} times`)
//   console.log(`2 is ${a.length} times`)
//   console.log(`3 is ${c.length} times`)

//////////////////////////////////////////////////

//123132132133123123
// 1 is 4 times
// 2 is 3 times
//  let arr=[1,2,3,1,3,2,1,3,2,1,3,3,1,2,3,1,2,3]
//  let b=[...new Set(arr)]
//  let n=b.length
//  let temp=[]
//  let a=[]
//  let c=[]

//      for(let j=0;j<arr.length;j++){
//          if(b[0]==arr[j]){
//              temp += arr[j]  

//          }else if(b[1]==arr[j]){
//              a +=arr[j]
//          }else{
//              c += arr[j]
//          }
//      } 
//   console.log(`1 is ${temp.length} times`)
//   console.log(`2 is ${a.length} times`)
//   console.log(`3 is ${c.length} times`)
 



// 54321
// 5432
// 543
// 54
// 5
// let arr=[5,4,3,2,1]
// let n=arr.length
// let a =[]
// for(i=0;i<n;i++){
//     for(j=0;j<n-i;j++){
//         a += arr[j]
//     }
//     a += "\n"
// }
// console.log(a)
    ////////////////////////////////////
// let arr=[6,8,0,1,3]
// let n=arr.length
// arr.push(0)
// let peak=-1
// let a=[]
// for(let i=0;i<n+1;i++){
//     for(j=i+1;j<=i+1;j++){
//         if(arr[i]<arr[j]){
//             a.push(arr[j])
//             break
//         }
//          else if(arr[i]>arr[j]){
//              a.push(peak)
//          }
//     }
   
// }
// console.log(a)
/////////////////////////////////////
// function cyclic(arr,n){
//     let temp=[]
//     for(i=0;i<n;i++){
//         temp=arr[n-1]
//         arr[n-1]=arr[n-2]
//         arr[n-2]=temp

//     }
//     return arr


// }
// let arr=[1,2,3,4,5]
// let n=arr.length
// console.log(cyclic(arr,n))
///////////////////////////////////////

//let k=3
// arr=[10,20,30,40,50,60,70,80,90,100]
// function arrayofshift(arr,value){
//     deletedofarr=arr.splice(arr.length-value)
//     for (i=0;i<deletedofarr.length;i++){
//         // arr.unshift(deletedofarr[i])
//         arr.splice(i,0,deletedofarr[i])
//         console.log(arr)
//     }
// }
// arrayofshift(arr,k)
// arr=[10,-10,20,11,2,4,100,1,2]
//     b=arr.sort((a,b) =>{
//         return a-b;
//     })
//     console.log(b)
// for (i=0; b.length-1;i++){
//     c=b.shift()
// }
// console.log(c)


// function reverse(str){
//     let string=""
//     for(var i=str.length;i>0;i--){
//         string += str[i]
//     }

// }

// let str="chanda"
// console.log(reverse(str))
///////////////////////////////////////

// practice 
// function even() {
//     let a=[1,2,3,4,5,6,7,8,9,10]
// for(let i=1; i<=a.length; i++) {
//     if (i%2!==0 || i%a==0){
//         console.log(i)
//     }
// }
// }
// even()
// let arr= [1,2,4,3 ,4 ,5 ,6 ,7]
// console.log(arr.length-1c)
// ########################################
// arr.sort();
// console.log(arr)
// #################################3
// arr.push(8)
// console.log(arr)
// ##########################3
// arr.pop();
// console.log(arr)
// #######33###333##############3
// arr.shift();
// console.log(arr)
// arr.unshift("0");
// console.log(arr)
// arr.reverse();
// console.log(arr)
// let a=Array.isArray(arr)
// console.log(a)
// let arr2=[8, 9, 10, 11, 12, 13, 14]
// console.log(arr.concat(arr2))
// console.log(arr.index0f(4))

// let n=5
// let fact=1
// for (i=1;i<=n;i++){
//      fact=fact*i
// }
// console.log(fact)
// let value="madam"
// let a=value.toString().split("").reverse().join("");
// let b=value.toString()
// if (value===a){
//     console.log("yes")
// }
// else
// {
//     console.log("no")
//  Fatal error in , line 0
// # Fatal JavaScript invalid size error 169220804

// console.log(arr)
// const arr=[]
// for(p=2;p<=100;p++){
//     for(i=2;i<p;i++){
//         if(p%i==0){
//             break;
//         }
//     }
//     if(p==i){
//         arr.push(p)
//     }
// }
// console.log(arr)
////////////////////////////////////////////////////
