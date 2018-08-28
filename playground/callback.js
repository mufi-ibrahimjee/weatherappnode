var getUser = (id, callback) =>
{
	var user =
	{
		id: id,
		name: 'vikram'
	};

	setTimeout(() =>
	{
		callback(user);
	},2000);
	
}

getUser(34, (userObject) =>{
	console.log(userObject);
})