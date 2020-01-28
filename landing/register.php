<!DOCTYPE html>
<html lang="en">

<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<title>:: Chech HMS ::</title>
<link rel="icon" href="favicon.ico" type="image/x-icon">

<!-- Core css file -->
<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="assets/fonts/line-icons.css">
<link rel="stylesheet" type="text/css" href="assets/css/animate.css">

<!-- Plugins CSS file -->
<link rel="stylesheet" type="text/css" href="assets/css/slicknav.css">
<link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.min.css">
<link rel="stylesheet" type="text/css" href="assets/css/owl.theme.css">

<!-- Project css with  Responsive-->
<link rel="stylesheet" type="text/css" href="assets/css/main.css">
<link rel="stylesheet" type="text/css" href="assets/css/responsive.css">

</head>
<body>
<!-- Header Area wrapper Starts -->
<header id="header-wrap">
    <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
        <div class="container">
            <div class="navbar-header">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
                    aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="icon-menu"></span>
                    <span class="icon-menu"></span>
                    <span class="icon-menu"></span>
                </button>
                <a href="index.html" class="navbar-brand"><img src="assets/img/logo.png" alt=""></a>
            </div>
            <div class="collapse navbar-collapse" id="main-navbar">
                <ul class="navbar-nav mr-auto w-100 justify-content-end clearfix">
                    <li class="nav-item active"><a class="nav-link" href="#hero-area">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#feature">Feature</a></li>
                    <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                    <li class="nav-item"><a class="nav-link" href="#pricing">Pricing</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
                <div class="btn-sing float-right">
                    <a class="btn btn-border" href="../html/page-login.html">Sign In</a>
                </div>
            </div>
        </div>

        <ul class="mobile-menu navbar-nav">
            <li><a class="page-scroll" href="#hero-area">Home</a></li>
            <li><a class="page-scroll" href="#services">Services</a></li>
            <li><a class="page-scroll" href="#feature">feature</a></li>
            <li><a class="page-scroll" href="#team">Team</a></li>
            <li><a class="page-scroll" href="#pricing">Pricing</a></li>
            <li><a class="page-scroll" href="#contact">Contact</a></li>
        </ul>

    </nav>

<!-- Contact Section Start -->
<div id="contact" class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-header text-center wow fadeInDown" data-wow-delay="0.3s">
                    <h2 class="section-title">Want To Get Started</h2>
                    <p>Dolor eius, et fugit itaque maxime minima modi numquam odio omnis placeat!</p>
                </div>
            </div>
        </div>
        <div class="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">
            <div class="col-md-6 col-lg-4 col-sm-12">
                <div class="contact-right-area wow fadeIn">
                    <h2>Get In Touch</h2>
                    <div class="contact-right">
                        <div class="single-contact">
                            <div class="contact-icon">
                                <i class="lni-map-marker"></i>
                            </div>
                            <p>9602 Woodsman St. <br> Hartford, CT 06106</p>
                        </div>
                        <div class="single-contact">
                            <div class="contact-icon">
                                <i class="lni-envelope"></i>
                            </div>
                            <p><a href="#">info@gmail.com</a></p>
                            <p><a href="#">circle@gmail.com</a></p>
                        </div>
                        <div class="single-contact">
                            <div class="contact-icon">
                                <i class="lni-phone-handset"></i>
                            </div>
                            <p><a href="#">+42 2354 6574</a></p>
                            <p><a href="#">+99 2354 9876</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-8 col-sm-12">
                <div class="contact-block">
                    <h2>Registration Form</h2>
                    <form  method="post" action="registerprocess.php" >
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <select class="form-control" name="module_choose" require data-error="Please select module name">
                                    
                                        <option>-Select Module-</option>
                                        <option>H.M.S</option>
                                        <option>Pharmacy</option>
                                        <option>Laboratory</option>
                                        <option>Radiology</option>
                                        <option>Doctor Appointment</option>
                                    </select>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="name" name="client_name" placeholder="Business Name"
                                        required data-error="Please enter your Business name">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="form-group">
                                    <input type="text" placeholder="Email" id="email" class="form-control" name="client_email"
                                        required data-error="Please enter your email">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="Phone Contact" name="client_phone" id="msg_subject" class="form-control"
                                        required data-error="Please enter your Phone Contact">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <textarea class="form-control" id="message" name="client_address" placeholder="Your Address" rows="4"
                                        data-error="Write your Address" required></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="name" name="client_website_url" placeholder="Your Organisation Website"
                                    >
                                </div>                                   
                            </div>                                     
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="name" name="client_org_type" placeholder="Reg type">                      
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="name" name="client_org_identity" placeholder="Business Number"
                                        required data-error="Please enter your  Number">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            </div>                            
                            </div>
                                <div class="submit-button">
                                    <button class="btn btn-common blush" id="form-submit" type="submit">Register</button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Footer Section Start -->
<footer id="footer" class="footer-area section-padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
                <div class="footer-logo mb-3">
                    <img src="assets/img/logo-light.png" alt="">
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam excepturi quasi, ipsam voluptatem.</p>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                <h3 class="footer-titel">Company</h3>
                <ul>
                    <li><a href="#">Press Releases</a></li>
                    <li><a href="#">Mission</a></li>
                    <li><a href="#">Strategy</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                <h3 class="footer-titel">About</h3>
                <ul>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Clients</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
                <h3 class="footer-titel">Find us on</h3>
                <div class="social-icon">
                    <a class="facebook" href="#"><i class="lni-facebook-filled"></i></a>
                    <a class="twitter" href="#"><i class="lni-twitter-filled"></i></a>
                    <a class="instagram" href="#"><i class="lni-instagram-filled"></i></a>
                    <a class="linkedin" href="#"><i class="lni-linkedin-filled"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>

<section id="copyright">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <p>Copyright © 2018 Oculux All Right Reserved</p>
            </div>
        </div>
    </div>
</section>

<!-- Go to Top Link -->
<a href="#" class="back-to-top"><i class="lni-arrow-up"></i></a>

<!-- Preloader -->
<div id="preloader">
    <div class="loader">
        <img src="../assets/images/icon.svg" width="40" height="40" alt="Oculux">
        <p>Please wait...</p>
    </div>
</div>

<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="assets/js/jquery-min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>

<script src="assets/js/wow.js"></script>
<script src="assets/js/scrolling-nav.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/jquery.nav.js"></script>
<script src="assets/js/jquery.easing.min.js"></script>
<script src="assets/js/jquery.slicknav.js"></script>
<script src="assets/js/particles.min.js"></script>

<script src="assets/js/main.js"></script>
<script src="assets/js/form-validator.min.js"></script>
<script src="assets/js/contact-form-script.min.js"></script>
<script src="assets/js/particlesjs.js"></script>
</body>
</html>