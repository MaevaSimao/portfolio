/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */



// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';

var $ = require('jquery'); 



require('../images/typewriter.jpg'); 

var app = {

    init:function() {
        
        console.log('init');

        app.toggleNavBar(); 
        
          
    }, 

    toggleNavBar:function() {

        let $menuBurger = $('<div>'); 

        var $buttonToggle = $('<a href="#menu-toggle" class="btn btn-default" id="menu-toggle"></a>').html($menuBurger);
       
        $buttonToggle.prependTo('#toggle-navbar');

        $buttonToggle.click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            app.toggleSidebar(); 
        });
    }, 

    toggleSidebar:function() {
        let $toggle = $('#menu-toggle'); 
        $toggle.appendTo('#home-sidebar'); 
        $toggle.html("&#x274C;"); 
        $toggle.click(function(e) {
            app.toggleNavBar(); 
        })
    }
}


$(app.init);




