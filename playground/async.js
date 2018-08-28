console.log('print');

setTimeout(() =>{
	console.log('inside timeout');
},2000);

setTimeout(() =>
{
	console.log('timeout after 0 seconds');
},0);
console.log('hey');

