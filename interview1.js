
// // const createUser= userModel.findOne
// // {
// // "firstName" : "Manpreet",
// // "lastName" "Singh",
// // "address": {
// // "address1": "Flat No 101",
// // "address2": "Tower M",
// // "city": "Noida",
// // "country": "India"
// // }
// // }

const { get } = require("mongoose")

// // const detail=userModel.findOneUpdate({_id:id},{$set:{address2:address2}},{new:true})

// // {
// //     "firstName" : "Manpreet",
// //     "lastName" "Singh",
// //     "address":[ {
// //     "addressID": "add1",
// //     "address1": "Flat No 101",
// //     "address2": "Tower M",
// //     "city": "Noida",
// //     "country": "India"
// //     },
// //     {
// //     "addressID": "add2",
// //     "address1": "Flat No 201",
// //     "address2": "Tower N",
// //     "city": "Greater Noida",
// //     "country": "India"
// //     },
// //     {
// //     "addressID": "add3",
// //     "address1": "Flat No 301",
// //     "address2": "Tower G",
// //     "city": "Delhi",
// //     "country": "India"
// //     }
// //     ]
// //     }
// //     model.findOneUpdate({_id:id},{addressID:addressId},{$set:{address2:address2}},{new:true})

// //     db.collection.updateOne({_id: id, "address.addressID: add2}, {$set: {"address.$.address2: "Tower A"}})

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// //softbotic technoloigies company----------

// //You are given an array of multiple items in an order. Find the total bill amount for all items in the order.
// // A flat tax will be added to the bill based on the following conditions:
// // If the item is a pizza, the tax will be 5% of the item's price.
// // If the item is a drink, the tax will be 18% of the item's price.
// // If the item is a snack, the tax is already included in the item's price.

// // Output the subtotal, tax amount, and grand total for the order.



// const order = {
//     customer: {
//       name: "John",
//       address: {
//         street: "123 Main Street",
//         city: "Anytown",
//         state: "California",
//       },
//       phone: "555-555-5555",
//     },
//     items: [
//       { name: "Margherita", price: 277.25, type: "pizza" },
//       { name: "Mineral Water", price: 20, type: "drink" },
//       { name: "Pepperoni", price: 540.1, type: "pizza" },
//       { name: "Chicken Wings", price: 200.0, type: "snack" },
//       { name: "Coffee", price: 300.0, type: "drink" },
//     ],

//   };


//   ////////////////////////////////////////////

//   let totalbill=0,grandtotal=0
//   for(let i=0;i<order.items.length;i++){
//       totalbill+=order.items[i].price


//   }
//   console.log(totalbill)


//   let tax=[]
//   let totaltax=0
//   for(let i=0;i<order.items.length;i++){
//       if(order.items[i].type=="pizza"){
//           let taxamount=order.items[i].price*(5/100)
//           tax.push(taxamount)
//           order.items[i].price+=order.items[i].price*(5/100)

//       }
//       if(order.items[i].type=="drink"){
//           let taxamount=order.items[i].price*(18/100)
//           tax.push(taxamount)
//          // order.items[i].price=order.items[i].price+(order.items[i].price*(18/100))
//          order.items[i].price +=order.items[i].price*(18/100)
//       }
//   grandtotal+=order.items[i].price

//   }
//   console.log(grandtotal)

//   for(let i=0;i<tax.length;i++){
//       totaltax+=tax[i]
//   }
//   console.log(totaltax)
////////////////////////////////////////////////////////////////////////////////////////////////////////
// given two array A=[1,2,0,0] ,B=[3,4,0,0] and we have to find C=[4,6,0,0] and answer should be in array form not in number.

// function addNumber(arr1,arr2){
//   for(let i=0;i<arr1.length;i++){
//     arr1[i]= arr1[i]+arr2[i]
//   }
//   return arr1
// }
// console.log(addNumber([1,2,0,0],[3,4,0,0]))


///////////////////////////////////////////////////////////////////////
//array of sum

// function add(arr){
//   let sum=0;
//   for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
//   }
//   return sum
// }
// console.log(add([2,4,5,6,7,8]))

///////////////////////////////////////////////////
//
//let str1 = 'abcabcglkdjglkdjabcjgkadglkaabckjkejgabcagfhafg'
//let str2 = 'abc'

//Compare string2 (abc) in str1 how many time (abc) comes in str1,maintain a count

// function stringCheck(str1,str2){
//   let res=[]
//   for(let i=0;i<str1.length;i++){
//     for(let j=i+1;j<str1.length +1;j++)
//       res.push(str1.substring(i,j))
//     }
//     let count=0
//     for(i=0;i<res.length;i++){
//       if(res[i]==str2)
//         count++

//     }
//     return count
//   }
// console.log(stringCheck("abcabcglkdjglkdjabcjgkadglkaabckjkejgabcagfhafg","abc"))


//////////////////////////////////////////////////////////////////////////////////////////////////
//Replacing the  vowels 
// Input : hello
// Output : holle 
// Input : hello world
// Output : hollo werld

// function worldChange(s){
// let map={"a":1,"e":1,"i":1,"o":1,"u":1}
// let str=s.split("")
// let i=0;
// let j=str.length-1;
// while(i<j){
//   if(map[str[i]] && map[str[j]]){
//     [str[i],str[j]]=[str[j],str[i]]
//     i++
//     j--
//   }else if(!(map[str[i]]) && !(map[str[j]])){
//     i++
//     j--
//   }else if(!(map[str[i]])) i++
//   else if(!(map[str[j]])) j--
// }
// return str.join("")
// }
// console.log(worldChange("hello world"))


// /////////////////////////////////////////////////////////////////////////

//remove vowel worlds
// function remoceVowel(s){
//   let res=""
//   for(let i=0;i<s.length;i++){
//     if(s[i] == "a" || s[i] == "e"|| s[i] == "i"||s[i] == "o"||s[i] == "u" ){
//       continue;
//     }
//     res +=s[i]
//   }
//   return res
// }
// console.log(remoceVowel("leetcodehelloworldeeehkjhkjjliiooaaakbmbmju"))


//counting total vowel

// function countVowel(s){
//    // let res="";
//     let count=0;
//     for(let i=0;i<s.length;i++){
//         if(s[i]=="a"|| s[i]=="e" || s[i]=="i"||s[i]=="o" || s[i]=="u"){
//             count++
            
//         }
        
//     }
//     return count
// }
// console.log(remoceVowel("leetcodehelloworldeeehkjhkjjliiooaaakbmbmju"))
// console.log(countVowel("youtuber"))

//////////////////////////////////////////////////////////////////////////////////////
//Find the highest number that can be made from the given number 513 -> 531 

// function maxNumber(num){
//   let arr=num.toString().split("")
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i]<arr[j]) {                      //for smallest number  arr[i]>arr[j]
//         [arr[i],arr[j]] = [arr[j],arr[i]]
//       }
//     }
//   }
//   return arr.join("")
// }

// console.log(maxNumber(5154))


//////////////////////////////////////////////////////////////////////////////
//program to find a peak element [1,2,3,5,6,4] and return index
//peak number means 5 se dono number (3,4 ) small h and return index number

// function peakNumber(num){
//   if(num.length ==1) return 0
//   for(let i=0;i<num.length;i++){
//     if(i==0 && num[0]>num[1]) return 0;
//     if(i==num.length-1 && num[i]>num[i-1])  return num.length-1
//     if(num[i]>num[i-1] && num[i]>num[i+1]) return i     //return num[i] se number return honge
//   }
//   return -1
// }
// console.log(peakNumber([1,2,3,5,6,4]))

// //////////////////////////////////////////////////////////////////////////////////



// console.log(2 + '2')   //22
// console.log(2 - '2')    //0 as number liya h usne dono 2 ko

// console.log(2 +  + '2')  // + sign se add kar diya 4
// console.log(2 - -'2')   //4
///////////////////////////////////////////////////////////
// function func(){
//     {
//         let l="let";
//         var v="var"
//     }
// console.log(v);
// console.log(l)
// }
// func();
////////////////////////////////////////////
// let x = function(){
//         if(true){
//             console.log(v)
//             console.log(l)
//             var v=2;
//             let l=1;

//         }

//     }
//     x();
/////////////////////////////////////////////////
// console.log(5<6<7)  //true  (true<7) ==> true     (1<7)
// console.log(7>6>5)   //false   (true>5)==> false    (1>5)
//console.log(Math.max())
//console.log(NaN === NaN)           //false
//////////////////////////////////////////////////////////
//third smallest number

// function getThirdSmallest( a) {
//     let temp;
//     //sort the array
//     for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//     if (a[i] > a[j]) {                         //same third greatest number if(a[i]<a[j]) condition
//     temp = a[i];
//     a[i] = a[j];
//     a[j] = temp;
//     }
//     }
//     }
//     //return third smallest element
//     return a[2];
//     } console.log(getThirdSmallest([11,10,4, 15, 16, 13, 2]))


/////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//let arr = [2, 2, 0, 2, 1, 1, 0, 0, 1]

//output = [0,0,0,1,1,1,2,2,2]

// const sorteArr = (arr) =>{
//   let arr2 = []
//    let obj = {}
//     for (let i = 0; i < arr.length; i++) {

//       obj[arr[i]] = obj[arr[i]] + 1 || 1

//     }

//     for( let key in obj){
//       while(obj[key] != 0){
//         arr2.push(Number(key))
//         obj[key]--
//       }
//     }
//    return arr2
// }


// console.log(sorteArr(arr))

//////////////////////////////////////////////////////////
// function rearrange(arr) {
//     let i = 0
//     let j = arr.length - 1
//     let k = 0
//     while (i <= j) {
//         if (arr[i] == 0) {
//           [arr[i], arr[k]] = [arr[k], arr[i]]
//           i++;
//           k++;
//         }
//         else if (arr[i] === 1) i++;
//         else {
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//             j--
//             i++
//         }
//     }
//     return arr
// }
// console.log(rearrange([1, 0, 0, 1, 2, 0, 2, 1]))


/////////////////////////////////////////////////////////////////

// let arr1=[0,1,2]
// let arr2=[4,6,7]
// let arr3=[6,7,8]
// let ans=[...arr1,...arr2,...arr3];
// console.log(ans)
///////////////////////////////////////////////////

// let arr = [2, 2, 0, 2, 1, 1, 0, 0, 1]   //[0,0,0,1,1,1,2,2,2]
// function rearrangeNumber(arr){
//     let zero=[];
//     let one=[];
//     let two=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==0){
//             zero.push(arr[i])
//         }
//         if(arr[i]==1){
//             one.push(arr[i])
//         }
//         if(arr[i]==2){
//             two.push(arr[i])
//         }
       
//     }
//     let ans=[...zero,...one,...two]
//     return ans

// }
// console.log(rearrangeNumber(arr))

////////////////////////////////////////////////////////
//Print 1, 2 , 3 ….. 10 after 1 second using setInterval
// for(var i = 0; i <= 10; i++){
// print(i);}
// function print(i){
// setTimeout(function(){
//  console.log(i)
//  },2000);
// }

////////////////////////////////////////////////////

// for(let i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }

// for(var i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }
// /////////////////////////////////////////////////////

// let temp={
//      a:10,
//      b : 20,
//      sum(){
//         return this.a + this.b
//      },
//      multi(){
//         return this.a *this.b
//      }
     
// }
// console.log(temp.sum())
// console.log(temp.multi())
////////////////////////////////////////////////

// console.log(+true)
// console.log(!'abc')

/////////////////////////////
// let c={ greeting : "hii"}
// let d;
// d=c;
// c.greeting ="hello"
// console.log(d.greeting)
///////////////////////////////////////
// let greeting;
// greetin:{};
// console.log(greetin)
/////////////////////////////////////

// function sum(a,b){
//     return a+b
// }
// console.log(sum(10,'2'))
///////////////////////////////////////////
// console.log(typeof [])

// console.log(typeof {})
///////////////////////////////////////////////////

// let x=0;
// console.log(x++)   //0
////////////////////////////////////////////////////

//console.log(eval('10*10+5'))   //105

///////////////////////////////////////////////////
// var num=4;
// var num=10;
// console.log(num)

/////////////////////////////////////
// let a=4;
// a=9;
// console.log(a)
///////////////////////////////////////////////////
// const obj={
//     a:'one',a:'two'
// };
// console.log(obj)       //{ a:'two}

////////////////////////////////////////////////////////////////////////////

//(()=> 0)();
/////////////////////////////////////
// console.log(typeof typeof {})     //string
// console.log(typeof typeof [])      //string
// console.log(typeof typeof 1)         //string

/////////////////////////////////////////////////

//console.log(true ===1)   //false
/////////////////////////////////////////////\

// let x=[...'Lydia']
// console.log(x)                          //[ 'L', 'y', 'd', 'i', 'a' ]

/////////////////////////////////////////
// function getAge(...args){
//     console.log(typeof args)
// }
// getAge(21)            //object

////////////////////////////////////////////
// let data="hello peter, how r u?"
// let c=data.substring(0,11)
// console.log(c)

////////////////////////////////////////////////

// let data=[4,6,7,8,9,7,6,5]
// data.length=3;
// console.log(data)

//length fix hi output m dega =[4,6,7]

/////////////////////////////////////////////////


// function reverse(str){
//     let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     let result="";
//     let index = 0;
//     for(let i =str.length-1;i>=0;i--){
//         if(arr.includes(str.charAt(i))){
//           index=arr.indexOf(str.charAt(i))
//           if(index==25){
//               index=0
//               result+=arr[index]
//           }else{
//               result+=arr[index+1]
//           }
//         }
//     }
//     return result;
// }
// console.log(reverse("ccc"))