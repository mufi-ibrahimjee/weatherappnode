var add= (a,b) =>
{
	return new Promise((resolve, reject) =>
	{
		setTimeout (() => {
		if(typeof(a) === 'number' && typeof(b) ==='number')
		{
			resolve(a+b);
		}
		else
		{
			reject('provide numbers');
		}
	},1500);
	});
};

add(5,7).then((res) => {
	console.log(res)
	return add(res, 33);
}).then((res) =>
{
	console.log(res);
}).catch((errorMessage) =>
{
	console.log(errorMessage);
});