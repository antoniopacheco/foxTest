
function filter(employees,criteria){
	var result = [];
	var keys = Object.keys(criteria);
	var valid = true;
	employees.forEach(function(employee){
		valid = true;
		keys.forEach(function(key){
			if(employee[key] != criteria[key]) valid = false;
		});
		if(valid) result.push(employee);
	})
	return result;
}

var employees=[
	{"id":1,"firstName":"John","lastName":"Smith","sex":"M","department":"IT"},
	{"id":2,"firstName":"Mary","lastName":"Hernandez","sex":"F","department":"Accounting"},
	{"id":3,"firstName":"John2","lastName":"Smi","sex":"M","department":"IT"},
	{"id":4,"firstName":"Mary2","lastName":"Hernan","sex":"F","department":"Admin"},
	{"id":5,"firstName":"John3","lastName":"Sm","sex":"M","department":"IT"},
	{"id":6,"firstName":"Mary4","lastName":"Herna","sex":"F","department":"Admin"},
	{"id":7,"firstName":"John","lastName":"Williams","sex":"F","department":"IT"},
	];


var criteria1={"firstName": "John"};
var filtered1=filter(employees,criteria1);
console.log("filter 1 : ", filtered1);

var criteria2={"firstName": "John","lastName":"Williams"};
var filtered2=filter(employees,criteria2);
console.log("filter 2 : ", filtered2);

var criteria3={"sex":"F","department":"IT"}
var filtered3=filter(employees,criteria3); 
console.log("filter 3 : ", filtered3);
