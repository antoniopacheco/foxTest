var getEmployees = function(){
	return(
		$.ajax({
		    url: 'https://www.foxnotes.com/sfiles/restsamples.nsf/employees?readform',
		    type: 'GET',
		    crossDomain: true,
		    success: function(data){ 
		        console.log(data);
		    },
		    error: function(x,y,z) {
		        
		    }
		})
	);
}

$(function() {
	var employes = getEmployees();
	$.when( employes} ).done(function( x ) {
 		 alert( x.testing ); // Alerts "123"
});
});
