//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};


me.name = "Dennis McCoy",
me.age = 43,
me['hair color'] = "brown"


//2. Iterate over the object to console.log the propery or key names. 


for (var key in me) {
	console.log(key, me[key])
}