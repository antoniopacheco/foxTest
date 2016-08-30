var getEmployeesbyGet = function(){

	 $.ajax({
        type: "post",
        url: "https://www.foxnotes.com/sfiles/restsamples.nsf/employees?readform",
        dataType:"json",
        success: function (response) {
        	console.log(response);
            // if(response.status === "success") {
            //     console.log();
            // } else if(response.status === "error") {
            //     // do something with response.message or whatever other data on error
            // }
        },
        error: function(response){
        	console.log(response);
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
	getEmployeesbyJsonP();
});
