1. - Suppose we have the following array.
var persons=[{"id":1,"firstName":"John","lastName":"Smith","dateOfBirth":"1978-01-28"},{"id":2,"firstName":"Mary","lastName":"Hernandez","dateOfBirth":"1975-02-19"},.....];

Write a JavaScript function that returns an array with the full name of the person and the age. You can create auxiliary functions. Make the code as modular as possible.

[{"id":1,"fullName":"John Smith","age":38},{"id":2,"fullName":"Mary Hernandez","age":41},.....]


2. - Suppose we have an array of employees:

var

employees=[{"id":1,"firstName":"John","lastName":"Smith","sex":"M","department":"IT"},{"i

d":2,"firstName":"Mary","lastName":"Hernandez","sex":"F","department":"Accounting"},...];

We want to implement a function that filters elements on this array. The caller can specify the criteria in the following form:

var criteria1={"firstName": "John"}; //search for all employees with name="John"

var filtered1=filter(employees,criteria1); //filtered1 will contain all employees named

John

var criteria2={"firstName": "John","lastName":"Williams"}; //search for all employees

with firstName="John" and lastName="Williams"

var filtered2=filter(employees,criteria2); //filtered2 will contain all employees named

John Williams

var criteria3={"sex":"F","department":"IT"} //search for all employees with sex="F" and

department="IT"

var filtered3=filter(employees,criteria3); //filtered3 will contain all female employees

in the "IT" department

Implement the function filter:

filter(anArrayOfEmployees,criteria) {

......

//returns a new array with only the employees that matched the criteria

return filteredArray;

}


3. – We have the following REST service (we do, please use it):
https://www.foxnotes.com/sfiles/restsamples.nsf/employees?readform
It returns an array of all the employees in the following form
[ { "id":1, "firstName":"John", "lastName":"Smith", "sex":"M", "department":"IT" }, {
"id":2, "firstName":"Mary", "lastName":"Hernandez", "sex":"F", "department":"Accounting"
},…]
Write a JavaScript snippet using the library of your choice to fetch the data from the REST service and display a table
with all the employees in the body of a page.
Describe how you would handle exceptions (e.g. the service is not responding, etc.)