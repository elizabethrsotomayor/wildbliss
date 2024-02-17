'use strict';
// $("#home, #about, #gallery, #contact").click(function(){

//   //$(".nav navbar-nav li") <-this is looking for a <li> inside a <navbar-nav>  
//   // tag inside a tag with the class "nav"

//   $(".nav.navbar-nav li").removeClass("active");
//   $(this).addClass("active");
// });
console.log("connected");
$(document).ready(function() {
    $.each($('#navbar').find('li'), function() {
        $(this).toggleClass('active', 
            window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    }); 
});