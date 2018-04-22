// 对象解构赋值
{
	let person = {
		name: 'zhangsan',
		age: 18
	}

	let name = person.name;
	let age = person.age;
	console.log(name, age);
}
// 默认值
{
	let person = {
		name: 'zhangsan',
		age: 18
	}
	let {name, age, gender='male'} = person;
	console.log(name, age, gender);
}
// 非同名局部变量
{
	let person = {
		name: 'zhangsan',
		age: 18
	}
	let {name: localName, age: localAge, gender: lcoalGender='male'} = person;
	console.log(localName, localAge, lcoalGender);
}
// 嵌套赋值
{
	let person = {
		name: 'zhangsan',
		age: 18,
		hobby: {
			sports: 'football',
			code: 'javascript'
		}
	}
	let {hobby: {code}} = person;
	console.log(code);
}

// 数组解构赋值
// 占位符
{
	let colors = ['red', 'green', 'blue'];
	let [ , , thirdColor] = colors;
	console.log(thirdColor);  //blue
}
// 默认值
{
	let colors = ['red', 'green', 'blue'];
	let [ , , thirdColor, fourColor='orange'] = colors;
	console.log(fourColor);  // orange
}
// 嵌套数组解构
{
	let colors = ['red', ['green', 'yellow'], 'blue'];
	let [firstColor, [secondColor]] = colors;
	console.log(firstColor);  //red
	console.log(secondColor);  //green
}
// 不定元素
{
	let colors = ['red', 'green', 'blue'];
	let [firstColor, ...restColors] = colors;
	console.log(firstColor);  //red
	console.log(restColors);  //["green", "blue"]
}


// 对象参数解构赋值

{
	function func({name, age}) {
		console.log(name + ' is ' + age);
	}
	let person = {
		name: 'zhangsan',
		age: 18
	}
	func(person); //zhangsan is 18
}
//默认值
{
	function func({name, age, gender='male'}) {
		console.log(name + ' is ' + age +' '+ gender);
	}
	let person = {
		name: 'zhangsan',
		age: 18
	}
	func(person); //zhangsan is 18 male
}

	