function buildHtmlTable(employees) {
    for (var i = 0 ; i < employees.length ; i++) {
    	var row$ = $('<tr/>');
    	row$.append($('<td/>').html(employees[i].id));
    	row$.append($('<td/>').html(employees[i].firstName));
    	row$.append($('<td/>').html(employees[i].lastName));
    	row$.append($('<td/>').html(employees[i].sex));
    	row$.append($('<td/>').html(employees[i].department));
    	$('#employeesContent').append(row$);
     }
}

function getEmployeesbyGet(){
	 $.ajax({
        type: "post",
        url: "getFile.php",
        dataType:"json",
        success: function (response) {
        	buildHtmlTable(response);
        },
        error: function(xhr){
        	//check status request to show custom error, may be we can choise what to do in any case.
        	switch(xhr.status){
        		case 400 : console.log('Bad request');
        		break;
        		case 403 : console.log('Forbidden');
        		break;
        		case 404 : console.log("page not found");
        		break;
        		case 500: console.log("server error");
        		break;
        	}

        }
    })
}

var getEmployeesbyJsonP = function(){

	$.ajax({
		url: "https://www.foxnotes.com/sfiles/restsamples.nsf/employees?readform",
		dataType: "jsonp",
		timeout: 5000,
		success: function (parsed_json) {
		console.log(parsed_json);
		},
		error: function (xhr, textStatus, errorThrown) {
		console.log(xhr,textStatus,errorThrown);     
		}
	});
}
$(function() {
	getEmployeesbyGet();
	//getEmployeesbyJsonP();
});
