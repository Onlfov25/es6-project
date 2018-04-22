//字符串模板
{
	let name = 'zhangsan';
	console.log(`hello ${name} `)
}

{
	let message = `hello  
	world`;
	console.log(message);
}

// 字符串新增api
{
	let s = 'Hello world!';
	console.log(s.startsWith('Hello')) // true
	console.log(s.endsWith('!')) // true
	console.log(s.includes('o')) // true
}

//这三个方法都支持第二个参数，表示开始搜索的位置。
{
	let s = 'Hello world!';

	s.startsWith('world', 6) // true
	s.endsWith('Hello', 5) // true 5往左看，不包括索引5
	s.includes('Hello', 6) // false
}

{
	'x'.repeat(3) // "xxx"
	'hello'.repeat(2) // "hellohello"
	'na'.repeat(0) // ""
}

{
	'x'.padStart(5, 'ab') // 'ababx'
	'x'.padStart(4, 'ab') // 'abax'

	'x'.padEnd(5, 'ab') // 'xabab'
	'x'.padEnd(4, 'ab') // 'xaba'
}
