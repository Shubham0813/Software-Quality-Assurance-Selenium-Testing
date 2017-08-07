 $(document).ready(function(){
 
   $('#newCarButton').on('click',function(){
	   $(this).addClass('fire-effect');
	   window.setTimeout(function (){$('#modalSellingForm').modal('show');}, 200);
//		window.setTimeout(function (){$('#newCarButton').removeClass('fire-effect');}, 2000);
    });

	$('#modalSellingForm').on('hide.bs.modal', function (e) {
		$("#newCarButton").removeClass('fire-effect');
	});

	$('#searchCarsButton').on('click',function(){

	   if($('#contentArea').css('display') == 'none') {
	   		$(this).addClass('fire-effect');		
	   		$('#contentArea').show();
	   		$.get('db/getPostings.php', function(data) {
				console.log("here");
				$("#contentArea").html(data);
			});
	   } else {
	   		$('#contentArea').hide();
	   		$(this).removeClass('fire-effect');
	   }

   });
 });