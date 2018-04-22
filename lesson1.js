
// var 块状作用域
function fun() {
	var a = 1;
   if (a > 0) {
   	var b = ++a;
   	console.log(b)
   }  
   console.log(b)
}

fun(); // 2 2





// let 无变量提升
{

	/*console.log(name)  //name is not defined
	let name = 'pashanhu';*/

	let name = 'pashanhu';
	console.log(name)  //name is not defined
}

{
		 // console.log(a); //a is not defined
		  console.log(b1)  //undefined
		  let a1 = 10;
		  var b1 = 1;
		}
     
     // console.log(a1)  //a1 is not defined
     console.log(b1)  //1


//禁止重声明
  var  count = 2;
{
	let count = 3;  //不同作用域
	// let count = 4;  //Duplicate declaration "a"

	/*
     var count = 3;
     let count = 4; Uncaught SyntaxError: Identifier 'count' has already been declared
	*/
}


{
	const PI = 3.1415;
	//PI = 3; //Uncaught TypeError: Assignment to constant variable.
   
   // const MAX ; //SyntaxError
}

{
	const person = {
		name: 'zhangsan'
	}
	person.name = 'lisi'

	console.log(person.name)

}

	

//作为 let 和 const的题目
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[0]()  // 10

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[0]() // 0


/*var  name = 'zhangsan';
console.log(window.name) // zhangsan

var RegExp = 'hello'; //覆盖原全局变量
console.log('RegExp', window.RegExp) // ‘hello’*/


let RegExp = 'hello';
console.log(RegExp);   //hello
console.log(window.RegExp === RegExp)  // false

