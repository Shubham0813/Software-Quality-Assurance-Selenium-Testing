 $(document).ready(function(){
 
   $('#newCarButton').on('click',function(){
	   $(this).addClass('fire-effect');
	   window.setTimeout(function (){$('#modalSellingForm').modal('show');}, 500);
//		window.setTimeout(function (){$('#newCarButton').removeClass('fire-effect');}, 2000);
    });

	$('#modalSellingForm').on('hide.bs.modal', function (e) {
		$("#newCarButton").removeClass('fire-effect');
	})

 });