<?php include('start.php') ?>

<div class="container home-page-wrapper z-depth-5 wow slideInDown">
	
	<div class="row">
    	<div class="col-md-12 text-center heading">
    			<h2>Welcome to <i>SellMyCar.com</i></h2>
    	</div>
	</div>

	<div class="row">
			<div class="col-md-4"></div>
	 		<div class="col-md-2 text-center">
            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#modalSellingForm">Sell New Car</a>
        </div>
        <div class="col-md-2 text-center">
            <a href="#" class="btn btn-primary">Search For Cars</a>
        </div>
        <div class="col-md-4"></div>
	</div>
</div>

<div class="modal fade" id="modalSellingForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog cascading-modal" role="document">
        <div class="modal-content">

            <div class="modal-header light-blue darken-3 white-text">
                <h4 class="title"><i class="fa fa-pencil"></i> Selling form</h4>
                <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body mb-0">
                <div class="md-form form-sm">
                    <i class="fa fa-envelope prefix"></i>
                    <input type="text" id="form1" class="form-control">
                    <label for="form1">Name</label>
                </div>

                <div class="md-form form-sm">
                    <i class="fa fa-lock prefix"></i>
                    <input type="text" id="form2" class="form-control">
                    <label for="form2">Address</label>
                </div>

                <div class="md-form form-sm">
                    <i class="fa fa-tag prefix"></i>
                    <input type="text" id="form3" class="form-control">
                    <label for="form3">City</label>
                </div>


                <div class="md-form form-sm">
                    <i class="fa fa-tag prefix"></i>
                    <input type="text" id="form4" class="form-control">
                    <label for="form4">Phone Number</label>
                </div>


                <div class="md-form form-sm">
                    <i class="fa fa-tag prefix"></i>
                    <input type="text" id="form5" class="form-control">
                    <label for="form5">Email</label>
                </div>


                <div class="md-form form-sm">
                    <i class="fa fa-tag prefix"></i>
                    <input type="text" id="form6" class="form-control">
                    <label for="form6">Vehicle Details (Make, Model and Year)</label>
                </div>

                <div class="text-center mt-1-half">
                    <button class="btn btn-info mb-2">Save <i class="fa fa-send ml-1"></i></button>
                </div>
            </div>
            <div>URL</div>
        </div>
    </div>
</div>

 <?php include('end.php') ?>