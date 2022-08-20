
// function secondLargest(arr){
//     let largest=arr[0];
//     let secondLar=arr.length-1
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             secondLar=largest;
//             largest=arr[i]
//         }else if(arr[i]>secondLar){
//             secondLar=arr[i]
//         }
//     }
//     return secondLar+largest
// }
// console.log(secondLargest([2,3,5,7,17,45,34,23]))



// function sumZero(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         sum=arr[i]+arr[j];
//         if(sum==0){
//             return [arr[i],arr[j]]
//         }
//         else if(sum>0){
//             j--;
//         }else{
//             i++;
//         }
//     }
    
// }
// console.log(sumZero([2,3,4,5,0,-5,-4]))
////////////////////////////////////////////////////
// function reverse(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         // let temp=arr[i];
//         // arr[i]=arr[j];
//         // arr[j]=temp;
//         arr[i]=arr[i]+arr[j];
//         arr[j]=arr[i]-arr[j];
//         arr[i]=arr[i]-arr[j];
//         i++;
//         j--;
        
//     }
//     return arr
// }
// console.log(reverse([3,6,8,2,78,65,56]))
/////////////////////////////////////////////////////////

// let str="ruby jafar manish khusboo sagar"
// let arr=str.split(" ")
// function reverse(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         i++;
//         j--;
//     }
//     return arr.join(" ")
// }
// console.log(reverse(arr))
///////////////////////////////////////////////////////
// function countZero(arr){
//     let map={}
//     for(let i=0;i<arr.length;i++){
//         if(map[arr[i]]){
//             map[arr[i]] +=1
//         }else{
//             map[arr[i]] =1
//         }
//     }
//     let count=0;
//     for(let key in map){
//         if(key=="0") count=map[key]
//     }
//     return count
// }
// console.log(countZero([0,8,0,1,0,5,0]))
///////////////////////////////////////////////////////
// function anagram(s1,s2){
//     if(s1.length !== s2.length){
//         return false
//     }
//     let map={};
//      for(let letter of s1 ){
//          if(map[letter]){
//              map[letter] +=1
//          }else{
//              map[letter] =1
//          }
//      }
//      for(let item of s2){
//          if(!map[item]){
//              return false
//          }
//          map[item] = -1
//      }
//      return true
// }
// console.log(anagram("hello","ollgh"))
///////////////////////////////////////////////////
//let arr = [12,3,6,2,9,11] // => [9,11,12,3,6,2]

// let arr = [12,3,6,2,9,11]  //[11,9,2,6,3,12]
// function reverse(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         i++;
//         j--
//     }
//     return arr
// }

// //console.log(reverse(arr))
// const firstReverse=reverse(arr)     //[11,9,2,6,3,12]
// const secondReverse=reverse(firstReverse.slice(0,2))
// console.log(secondReverse)
// const finalReverse=reverse(firstReverse.slice(2));
// console.log(finalReverse())
// console.log(secondReverse.concat(finalReverse))
//////////////////////////////////////////////////////////////////
// let a=5;
// let b=10;
// console.log(a,b)
// a=a+b    //15=a
// b=a-b   //5=b
// a=a-b   //10
// console.log(a,b)
///////////////////////////////////////////
// swap two string  => something good
// let a= "somthing";
// let b= "good"
// // console.log(a,b)
// console.log(b.concat(" "+a))
///////////////////////////////////////////
// function countNUm(count){
//     if(count==0){
//         return 
//     }
//     count--
//     countNUm(count)
//     console.log(count)
// }
// countNUm(10)
////////////////////////////////////////////////
// function sumNatural(n){
//     if(n===0){
//         return 0
//     }
//     return n+sumNatural(n-1)
// }
// console.log(sumNatural(10))

// function naturalMulti(n){
//     if(n==1){
//         return 1
//     }
//     return n*naturalMulti(n-1)
// }
// console.log(naturalMulti(5))
///////////////////////////////////////////////
//fibonacci series//0,1,1,2,3,5,8 
//  function fibo(n){
//      if(n==0){
//          return 0
//      }
//      if(n==1 || n==2){
//          return 1
//      }
//      return fibo(n-1) + fibo(n-2)

//  }
//  console.log(fibo(5))
/////////////////////////////////
// function factorial(n){
//     if(n==1){
//         return 1
//     }
//     return n* factorial(n-1)
// }
// console.log(factorial(6))
//////////////////////////////////
// function reverse(s){
//     let str=""
//     let data=s.split("")
//     for(let i=data.length-1;i>=0;i--){
//         if(i>0){
//             str=str +data[i] +""
//         }else{
//             str=str+data[i]
//         }
//     }
//     return str
// }
// console.log(reverse("backend developer"))
//////////////////////////////////////////////
// function reverse(s){
//     let str=""
//     for(let i=s.length-1;i>=0;i--){
//         if(i>0){
//             str=str+s[i]+""
//         }
//     }
//     return str
// }
// console.log(reverse("software backend"))
//////////////////////////////////////////////////
// function flatArr(arr){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//           result=result.concat(flatArr(arr[i]))
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(flatArr([1,2,[3,[4,[5,6]]],7,[8,9,10],[11,[12,13,[14]]]]))

// const arr= ["cat","dog","rat"] //=>[ 'Cat', 'Dog', 'Rat' ]
// function capital(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i][0].toUpperCase() + arr[i].slice(1)
//     }
//     return arr
// }
// console.log(capital(arr))

// function duplicate(arr){
//     let res=new Set()
//     for(let i=0;i<arr.length;i++){
//         res.add(arr[i])
//     }
//     return res
// }
// console.log(duplicate([4,3,3,6,7,8,8,7,9,5,6]))

// function duplicate(arr){
//     let freq=new Map()
//     for(let i=0;i<arr.length;i++){
//         if(freq.get(arr[i])== undefined){
//             freq.set(arr[i],1)
//         }else{
//             freq.set(arr[i],freq.get(arr[i])+1)
//         }
//     }
//     let count=[]
//     for(let key in freq){
//         if(key[1]>1){
//             count.push(key[0])
//         }
//     }
//     return count
// }
// console.log(duplicate([4,3,3,6,7,8,8,7,9,5,6]))
/////////////////////////////////////////////////////////

// let str ="geeksforgeesks"

// function repeatStr(str){
//     let obj={}
//     for(let i=0;i<str.length;i++){
//         if(obj[str[i]]){
//             obj[str[i]] +=1
//         }else{
//             obj[str[i]] =1
//         }
//     }
//     let res=0;
//     for(let key in obj){
//         if(obj[key]>1){
//             res++
//         }
//     }
//     return res
// }
// console.log(repeatStr(str))
/////////////////////////////////////////////
// function reverseStr(str){
//     let arr=str.split("")
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//         i++;
//         j--
//     }
//     return arr.join('')
// }
// function reverseFirstLastStr(str){
//     let arr=str.split(" ")
//     arr[0]=reverseStr(arr[0])
//     arr[arr.length-1]=reverseStr(arr[arr.length-1])
//     return arr.join(' ')
// }
// console.log(reverseFirstLastStr("this ruby gupta"))
////////////////////////////////////////////////////////////

// function countNegative(arr){
//     let count=0;
//     for(let ele of arr){
//         if(ele<0){
//             count++
//         }
//     }
//     return count
// }
// console.log(countNegative([2,3,4,-2,-3,-4,-6]))
//////////////////////////////////////////////////////////////

// function animalCount(arr){
//     let obj={}
//     for(let ele of arr){
//         if(obj[ele]){
//             obj[ele] +=1
//         }else{

//             obj[ele]=1
//         }
//     }
//     console.log(obj)
// }
// animalCount(["cat","cow","dog","goat","cat","dog","tiger","dog","cow","elephant","lion","lion"])
/////////////////////////////////////////////////////////////////////////////////////////
// function genertareString(num){
//     let alphabet="abcdefghijklmnopqrstuvwxyz";
//     let finalStr=''
//     let currentIndex=0;
//     while(currentIndex < num){
//         finalStr +=alphabet[currentIndex%26]
//         currentIndex++
//     }
//     return finalStr;

// }
// function NewGenertaeString(arr){
// for(let i=0;i<arr.length;i++){
//     arr[i]=genertareString(arr[i])
// }

// }
// const temp=[1,2,3,4,5,6]
//     NewGenertaeString(temp)
//     console.log(temp)
/////////////////////////////////////////////////////
// function primeNum(num){
//     for(let i=2;i<parseInt(num/2);i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return true
// }
// console.log(primeNum(7))
// console.log(primeNum(14))
//////////////////////////////////////////
function largestNumberSecond(arr){
    let largest=0;
    let secondLar=arr.length-1
    for(let i=0;i<arr.length; i++){
        if(arr[i]>largest){
            secondLar=largest;
            largest=arr[i]
        }else if(arr[i]>secondLar){
                secondLar=arr[i]
            }
        }
    
   // return secondLar+largest
   //return {max:largest,secmax:secondLar}
   let countLar=0;
   let countsec=0;
   for(let i=0;i<arr.length;i++){
    if(arr[i]==largest) {countLar++}
    if(arr[i] == secondLar){countsec++}
   }
   return{maxfreq1:countLar,maxfreq2:countsec}
}
console.log(largestNumberSecond([2,4,12,23,14,25]))
/////////////////////////////////////////////////////

//let arr=["jan","feb","feb","mar","mar","apr","june","july"]

// let countDuplicate=month.reduce((obj,month)=>{
//     if(obj[month]==undefined){
//         obj[month] =1
//         return obj
//     }else{
//         obj[month]++
//         return obj
//     }
    
// },{} )
// console.log(countDuplicate)

// function countMonth(arr){
//     let obj={};
//     for(let i=0;i<arr.length;i++){
//         if(obj[arr[i]]){
//             obj[arr[i]] +=1;
//         }else{
//             obj[arr[i]] =1
//         }
//     }
//     return obj
    
// }
// console.log(countMonth(arr))
////////////////////////////////////////
// function countTwo(arr){
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//     obj[arr[i]]  ? obj[arr[i]]++ : (obj[arr[i]] =1)
//     }
//     let val=0;
//     for(key in obj){
//         if(key ==="2") val=obj[key]
//     }
//     return val
   
// }
// console.log(countTwo([0,0,2,2,0,3,2,0,2,0,2]))

/////////////////////////////////////////////////
// function zeroRightSite(arr){
//   let zero=[];
//   let nonZero=[];
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         zero.push(arr[i])
//     }else{
//         nonZero.push(arr[i])
//     }
//   }
//   let res= nonZero.concat(zero)
//   return res
// }
// console.log(zeroRightSite([2,0,5,0,4,0,0,8,7]))
/////////////////////////////////////////////////////////////////////////

// A[] = {1, 2, 3, 4, 5}====>[5 1 2 3 4]
// function rotateIndex(arr){
//   let arr1=0;
//   for(let i=0;i<arr.length;i++){
//     arr1=arr[i]
//     arr[i]=arr[arr.length-1]
//     arr[arr.length-1]=arr1
//   }
// return arr
// }
// console.log(rotateIndex([1,2,3,4,5]))
///////////////////////////////////////////////////////////////

// let arr=[1,3,4,6,8,9,10]
// let array=arr.filter(arr=>arr>5)
//     console.log(array)

// let arr=[1,2,3,4,5,6]
// sqaure=x=>Math.pow(x,2)
// let squares= arr.map(sqaure)
// console.log(arr)
// console.log(squares)
///////////////////////////////////////
// let arr=[2,3,5,4,6,8,9]
// let array=x=>x%2==0
// let even=arr.filter(array)
// console.log(even)
///////////////////////////////////////////////////

// let arr=[1,2,3,4,5,6,7]
// let helperSum=(acc,curr)=>acc+curr
// let sum=arr.reduce(helperSum)
// console.log(sum)
//////////////////////////////////////
// var trees = ["redwood", "bay", "cedar", "oak", "maple"];
// delete trees[3];
// console.log(trees)
//////////////////////////////////////////
// var bar = true;
// console.log(bar + 0);   
// console.log(bar + "xyz");  
// console.log(bar + true);  
// console.log(bar + false);
///////////////////////////////////////////

// var arr = [10, 32, 65, 2];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }
/////////////////////////////////////////////
// var strA = "hi there";
// var strB = strA;
// strB="bye there!";
// console.log (strA)
///////////////////////////////
// var objA = {prop1: 42};
// var objB = objA; 
// objB.prop1 = 90;
// console.log(objA) 
/////////////////////////////////
// var objA = {prop1: 42};
// var objB = objA;
// objB = {};
// console.log(objA)
/////////////////////////////////////////
// var arrA = [0,1,2,3,4,5];
// var arrB = arrA;
// arrB[0]=42;
// console.log(arrA)
////////////////////////////////////
// var arrA = [0,1,2,3,4,5];
// var arrB = arrA.slice();
// arrB[0]=42;
// console.log(arrA)
////////////////////////////////////////////

// var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"}, 3,4,5];
// var arrB = arrA;
// arrB[0].prop1=42;
// console.log(arrA);
/////////////////////////HOISING QUES//////////////////////////////////
//console.log(employeeId);           //undefined

//////////////////////////////////////////
// console.log(employeeId);
// var employeeId = '19000';         //undefined
////////////////////////////////////////////

// var employeeId = '1234abe';
// (function(){
// 	console.log(employeeId);
// 	var employeeId = '122345';         //undefined
// })();
//////////////////////////////////

// var employeeId = '1234abe';            //undefined
// (function() {
// 	console.log(employeeId);
// 	var employeeId = '122345';
// 	(function() {
// 		var employeeId = 'abc1234';
// 	}());
// }());
///////////////////////////////////////
// (function() {               
// 	console.log(typeof displayFunc);
// 	var displayFunc = function(){                      //UNDEFINED
// 		console.log("Hi I am inside displayFunc");
// 	}
// }()); 
//////////////////////////////////////////////
// var employeeId = 'abc123';
// function foo(){
// 	employeeId = '123bcd';
// 	return;
// }
// foo();
// console.log(employeeId);      //123bcd
////////////////////////////////////////////////

// var employeeId = 'abc123';

// function foo() {
// 	employeeId = '123bcd';
// 	return;

// 	function employeeId() {}
// }
// foo();
// console.log(employeeId);             //abc123
/////////////////////////////////////////////////////
// var employeeId = 'abc123';

// function foo() {
// 	employeeId();
// 	return;

// 	function employeeId() {
// 		console.log(typeof employeeId);
// 	}
// }
// foo();                      //function
///////////////////////////////////////////////
// function foo() {
// 	employeeId();
// 	var product = 'Car'; 
// 	return;

// 	function employeeId() {
// 		console.log(product);
// 	}
// }
// foo();                                //undefined
/////////////////////////////////////////////////////////

// (function foo() {                             
                                           
// 	bar();

// 	function bar() {
// 		abc();
// 		console.log(typeof abc);                   //function
// 	}

// 	function abc() {
// 		console.log(typeof bar);                 //function
// 	}
// }());
////////////////////////////////////////////////////////
// (function() {
// 	'use strict';

// 	var person = {
// 		name: 'John'
// 	};
// 	person.salary = '10000$';
// 	person['country'] = 'USA';

// 	Object.defineProperty(person, 'phoneNo', {
// 		value: '8888888888',
// 		enumerable: true
// 	})

// 	console.log(Object.keys(person)); 
// })();
/////////////////////////////////////////////////////
// (function() {
// 	'use strict';

// 	var person = {
// 		name: 'John'
// 	};
// 	person.salary = '10000$';
// 	person['country'] = 'USA';

// 	Object.defineProperty(person, 'phoneNo', {
// 		value: '8888888888',
// 		enumerable: false
// 	})

// 	console.log(Object.keys(person)); 
// })();
/////////////////////////////////////////////
// (function() {
// 	var objA = {
// 		foo: 'foo',
// 		bar: 'bar'
// 	};
// 	var objB = {
// 		foo: 'foo',
// 		bar: 'bar'
// 	};
// 	console.log(objA == objB);
// 	console.log(objA === objB);
// }());
// //////////////////////////////////////////////////////

// (function() {
// 	var objA = new Object({foo: "foo"});
// 	var objB = new Object({foo: "foo"});
// 	console.log(objA == objB);
// 	console.log(objA === objB);
// }());
/////////////////////////////////////////////////////////////////

// (function() {
// 	var objA = Object.create({
// 		foo: 'foo'
// 	});
// 	var objB = Object.create({
// 		foo: 'foo'
// 	});
// 	console.log(objA == objB);
// 	console.log(objA === objB);
// }());
//////////////////////////////////////////////////////////////
// (function() {
// 	var objA = Object.create({
// 		foo: 'foo'
// 	});
// 	var objB = Object.create(objA);
// 	console.log(objA == objB);
// 	console.log(objA === objB);
// }());
//////////////////////////////////////////////////////////////
// (function() {
// 	var objA = Object.create({
// 		foo: 'foo'
// 	});
// 	var objB = Object.create(objA);
// 	console.log(objA.toString() == objB.toString());
// 	console.log(objA.toString() === objB.toString());
// }());
// ///////////////////////////////////////////////////////////////
// (function() {
// 	var objA = Object.create({
// 		foo: 'foo'
// 	});
// 	var objB = objA;
// 	console.log(objA == objB);
// 	console.log(objA === objB);
// 	console.log(objA.toString() == objB.toString());
// 	console.log(objA.toString() === objB.toString());
// }());
///////////////////////////////////////////////////////////////////
// (function() {
// 	var objA = Object.create({
// 		foo: 'foo'
// 	});
// 	var objB = objA;
// 	objB.foo = 'bar';
// 	console.log(objA.foo);
// 	console.log(objB.foo);
// }());
/////////////////////////////////////////////////////////////

// (function() {
// 	var objA = Object.create({
// 		foo: 'foo'
// 	});
// 	var objB = objA;
// 	objB.foo = 'bar';

// 	delete objA.foo;
// 	console.log(objA.foo);
// 	console.log(objB.foo);
// }());
////////////////////////////////////////////////////////////////
// (function() {
// 	var objA = {
// 		foo: 'foo'
// 	};
// 	var objB = objA;
// 	objB.foo = 'bar';

// 	delete objA.foo;
// 	console.log(objA.foo);
// 	console.log(objB.foo);
// }());
///////////////////////////////////////////////////////////////////////
//array ques////////////////////
// (function() {
// 	var array = new Array('100');
// 	console.log(array);
// 	console.log(array.length);
// }());

//////////////////////////////////////////////////////////
// (function() {
// 	var array1 = [];
// 	var array2 = new Array(100);
// 	var array3 = new Array(['1',2,'3',4,5.6]);
// 	console.log(array1);
// 	console.log(array2);
// 	console.log(array3);
// 	console.log(array3.length);
// }());
//////////////////////////////////////////////////////

// (function () {
//     var array = new Array('a', 'b', 'c', 'd', 'e');
//     array[10] = 'f';
//     delete array[10];
//     console.log(array.length);
//   }());
  /////////////////////////////////////////////////////

//   (function(){
// 	var animal = ['cow','horse'];
// 		animal.push('cat');
// 		animal.push('dog','rat','goat');
// 		console.log(animal.length);
// })();
///////////////////////////////////////////////////
// (function(){
// 	var animal = ['cow','horse'];
// 		animal.push('cat');
// 		animal.unshift('dog','rat','goat');
// 		console.log(animal);
// })();
/////////////////////////////////////////////////

// (function(){
// 	var array = [1,2,3,4,5];
// 	console.log(array.indexOf(2));
// 	console.log([{name: 'John'},{name : 'John'}].indexOf({name:'John'}));
// 	console.log([[1],[2],[3],[4]].indexOf([3]));
// 	console.log("abcdefgh".indexOf('e'));
// })();
///////////////////////////////////////////////////////////////////////////
// (function(){
// 	var array = [1,2,3,4,5,1,2,3,4,5,6];
// 	console.log(array.indexOf(2));
// 	console.log(array.indexOf(2,3));
// 	console.log(array.indexOf(2,10));
// })();
/////////////////////////////////////////////////////
// (function(){
// 	var numbers = [2,3,4,8,9,11,13,12,16];
// 	var even = numbers.filter(function(element, index){
// 		return element % 2 === 0; 
// 	});
// 	console.log(even);

// 	var containsDivisibleby3 = numbers.some(function(element, index){
// 		return element % 3 === 0;
// 	});

// 	console.log(containsDivisibleby3);	
// })();
//////////////////////////////////////////////////////
// (function(){
// 	var containers = [2,0,false,"", '12', true];
// 	var containers = containers.filter(Boolean);
// 	console.log(containers);
// 	var containers = containers.filter(Number);
// 	console.log(containers);
// 	var containers = containers.filter(String);
// 	console.log(containers);
// 	var containers = containers.filter(Object);
// 	console.log(containers);		
// })();
////////////////////////////////////////////////////////////////
// (function(){
// 	var list = ['foo','bar','john','ritz'];
// 	    console.log(list.slice(1));	
// 	    console.log(list.slice(1,3));
// 	    console.log(list.slice());
// 	    console.log(list.slice(2,2));
// 	    console.log(list);				
// })();
///////////////////////////////////////////////////
// (function(){
// 	var list = ['foo','bar','john'];
// 	    console.log(list.splice(1));		
// 	    console.log(list.splice(1,2));
// 	    console.log(list);			
// })();
//////////////////////////////////////////////
// (function(){
// 	var arrayNumb = [2, 8, 15, 16, 23, 42];
// 	arrayNumb.sort();
// 	console.log(arrayNumb);
// })();
////////////////////////////////////////////
// var arrA = [0,1,2,3,4,5];
// var arrB = arrA.slice(0,2);
// console.log(arrB)
// //arrB[0]=42;
// //console.log(arrB)
// console.log(arrA)
////////////////////////////////////
// var employeeId = '1234abe';
// (function(){
// 	console.log(employeeId);
// 	var employeeId = '122345';
// })();
///////////////////////////////////////
// var employeeId = '1234abe';
// (function() {
	
// 	var employeeId = '122345';

// 	(function() {
//     console.log(this.employeeId);
// 		//var employeeId = 'abc1234';
// 	}());
// }());
//////////////////////////////////////////
// (function() {
// 	console.log(typeof displayFunc);
// function displayFunc(){
// 		console.log("Hi I am inside displayFunc");
// 	}
// }());
//////////////////////////////////////////
// var a=5;
// function new1(){
//   a=2;
//   console.log(typeof new1)

// }
// new1();
// console.log(typeof new1)
// console.log(a)
//////////////////////////////////////////////////
// (function() {
// 	var array1 = [];
// 	var array2 = new Array(100);
// 	var array3 = new Array(['1',2,'3',4,5.6]);
// 	console.log(array1);
// 	console.log(array2);
// 	console.log(array3);
// 	console.log(array3.length);
// }());

///////////////////////////////////////////////////////////////
// (function () {
//   var array = new Array('a', 'b', 'c', 'd', 'e');
//   array[10] = 'f';
//   delete array[10];
//   array[11] ="ruby"
//   array[8] ="ruby"
//   console.log(array);
// }());

////////////////////////////////////////////////////////////
// (function(){
// 	var containers = [2,0,false,"", '12', true];
// 	var containers = containers.filter(Element=>Element%2==0);
// 	console.log(containers);
// 	var containers = containers.filter(Number);
// 	console.log(containers);
// 	var containers = containers.filter(String);
// 	console.log(containers);
// 	var containers = containers.filter(Object);
// 	console.log(containers);		
// })();



// let a= 3;
// let c = a++ * a++ - a++;
// console.log(c,a);
//////////////////////////////////////////////////////////////////
// var obj1 = { id: 101, name: 'Rajiv Sandal' }
// var obj2 = { age: 35, country: 'INDIA'}

// const employee = { ...obj1, ...obj2 }

// console.log(employee); // { "id": 101, "name": "Rajiv Sandal", "age": 35, "country": "INDIA" }
// /////////////////////////////////////////////////////////////////////

// var num = 10;  
// function sum()   
// {  
// console.log(num+num);  
// }   
// sum();  
// //////////////////////////////////////
// function display()  
// {  
//   console.log(10+20+"30");  
// }  
// display();  
//////////////////////////////////
// function display()  
// {  
//   console.log("10"+20+30);  
// }  
// display();  
///////////////////////////////////////////
// function userDetails(username) {
//   if (username) {
//     console.log(salary); // undefined due to hoisting
//     console.log(age); // ReferenceError: Cannot access 'age' before initialization
//     let age = 30;
//     var salary = 10000;
//   }
//   console.log(salary); //10000 (accessible to due function scope)
//   console.log(age); //error: age is not defined(due to block scope)
// }
// userDetails("John");
//////////////////////////////////////////////////////////////
