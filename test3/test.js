$(function() {
    $.ajax({
    url: 'https://www.foxnotes.com/sfiles/restsamples.nsf/employees?readform',
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'jsonpCallback',
    crossDomain: true,
        async: false,

    success: function(data){ 
        console.log(data);
    },
    error: function(x,y,z) {
        console.log(x);
                console.log(y);

        console.log(z);

    }
});
});

window.callback = function(data){
	console.log(callback);
}

function jsonpCallback(xy){
	console.log('jsonpcl')
}