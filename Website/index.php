<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Sell My Car</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/bootstrap.min.css" rel="stylesheet"/>
        <link href="css/mdb.min.css" rel="stylesheet"/>
        <link href="css/style.css" rel="stylesheet"/>
        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
        <!-- FontAwesome Icons -->
        <link href="css/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    </head>
    <body class="body-background">

        <div class="container home-page-wrapper z-depth-5 wow slideInDown">

        	<div class="row">
            	<div class="col-md-12 text-center heading">
            			<h2>Welcome to <i>SellMyCar.com</i></h2>
            	</div>
        	</div>

        	<div class="row">
        			<div class="col-md-4"></div>
        	 		<div class="col-md-2 text-center">
                    <a href="#" id="newCarButton" class="btn btn-primary">Sell New Car</a>
                </div>
                <div class="col-md-2 text-center">
                    <a href="#" class="btn btn-primary" id="searchCarsButton">Search For Cars</a>
                </div>
                <div class="col-md-4"></div>
        	</div>
       
        </div>

        <div class="container">
            <div class="row text-center" id="contentArea">

            </div>
        </div>

        <div class="modal fade" id="modalSellingForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog cascading-modal" role="document">
                <div class="modal-content">

                    <div class="modal-header light-blue darken-3 white-text">
                        <h4 class="title"><i class="fa fa-pencil"></i> Selling form
                        <button type="button" id="sellingFormModalCloseButton" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                        </button>
                        </h4>
                    </div>

                    <div class="modal-body mb-0">
                        <div class="alert alert-success text-center" role="alert" id="url-jd">
                          
                        </div>
                        <form id="sellingForm">
                            <div class="md-form form-sm">
                                <i class="fa fa-user prefix"></i>
                                <input type="text" id="form1" class="form-control"
                                    onkeyup="validateName(this.value)">
                                <label for="form1">Seller Name</label>
                                <div class="text-center">
                                    <span class="formValidationError" id="form1Error"></span>
                                </div>
                            </div>

                            <div class="md-form form-sm">
                                <i class="fa fa-map-marker prefix" aria-hidden="true"></i>
                                <input type="text" id="form2" class="form-control"
                                   onkeyup="validateAddress(this.value)">
                                <label for="form2">Address</label>
                                <div class="text-center">
                                    <span class="formValidationError" id="form2Error"></span>
                                </div>
                            </div>

                            <div class="md-form form-sm">
                                <i class="fa fa-globe prefix"></i>
                                <input type="text" id="form3" class="form-control"
                                    onkeyup="validateCity(this.value)">
                                <label for="form3">City</label>
                                <div class="text-center">
                                    <span class="formValidationError" id="form3Error"></span>
                                </div>
                            </div>


                            <div class="md-form form-sm">
                                <i class="fa fa-phone prefix"></i>
                                <input type="text" id="form4" class="form-control"
                                    onkeyup="validatePhoneNumber(this.value)">
                                <label for="form4">Phone Number</label>
                                <div class="text-center">
                                    <span class="formValidationError" id="form4Error"></span>
                                </div>
                            </div>


                            <div class="md-form form-sm">
                                <i class="fa fa-envelope prefix"></i>
                                <input type="text" id="form5" class="form-control"
                                    onkeyup="validateEmail(this.value)">
                                <label for="form5">Email</label>
                                <div class="text-center">
                                    <span class="formValidationError" id="form5Error"></span>
                                </div>
                            </div>


                            <div class="md-form form-sm">
                                <i class="fa fa-car prefix"></i>
                                <input type="text" id="form6" class="form-control"
                                    placeholder="2012 Ford Mustang" 
                                    onkeyup="validateVehicleInfo(this.value)">                        
                                <label for="form6">Vehicle (Year Make Model)</label>
                                <div class="text-center">
                                    <span class="formValidationError" id="form6Error"></span>
                                </div>
                            </div>

                            <div class="text-center mt-1-half">
                                <button class="btn btn-info mb-2" id="formSubmitButton">Save <i class="fa fa-send ml-1"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid" id="footer">
            <div class="row">
                    <div class="col-md-12 text-center">
                            <p>Copyright SellMyCar.com 2017</p>
                    </div>
            </div>
        </div>

        <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/mdb.min.js"></script>
        <script type="text/javascript" src="js/tether.min.js"></script>
        <script type="text/javascript" src="js/script.js"></script>     
        <script type="text/javascript" src="js/validation.js"></script>
    </body> 
</html>