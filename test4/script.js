$(document).ready(function() {
    oTable = $('#example').DataTable({
    	"bLengthChange": false

    });


$('#myInputTextField').keyup(function(){
      oTable.search($(this).val()).draw() ;
})
} );
