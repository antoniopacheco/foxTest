var person = function(data){
	this.id = data.id;
	this.firstName = data.firstName;
	this.lastName = data.lastName;
	this.dateOfBirth = data.dateOfBirth;
	this.getFullName = function(){
		return this.firstName + " " + this.lastName;
	};
	this.getAge = function(){
		var birthDate = new Date(this.dateOfBirth)
		var ageDifMs = Date.now() - birthDate.getTime();
			var ageDate = new Date(ageDifMs);
			return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
	this.getCustomAttributes = function(){
		return {
			id: this.id,
			fullName : this.getFullName(),
			age: this.getAge()
		}
	}
}

function getCustomArrayPeople(persons){
	var resultPersons = new Array();
	for(var i = 0; i<persons.length; i++) resultPersons.push(new person(persons[i]).getCustomAttributes());
	return resultPersons
}
	//will be better to create persons type 
var persons=[
{"id":1,"firstName":"John","lastName":"Smith","dateOfBirth":"1978-01-28"},{"id":2,"firstName":"Mary","lastName":"Hernandez","dateOfBirth":"1975-02-19"},
{"id":3,"firstName":"John","lastName":"Smith","dateOfBirth":"1978-01-28"},{"id":4,"firstName":"Mary","lastName":"Hernandez","dateOfBirth":"1975-02-19"},
];
var result = getCustomArrayPeople(persons);
console.log(result);