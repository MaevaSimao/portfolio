

import '../css/app.scss';

var $ = require('jquery'); 

require('../images/typewriter.jpg'); 


var app = {


    $menuBurger: $('.divBurger'), 


    /* init */
    init:function() 
    {    
        console.log('init');

        var mql = window.matchMedia("(max-width: 991.98px)")

        // call listener function explicitly at run time
        mediaqueryresponse(mql) 

        // attach listener function to listen in on state changes
        mql.addListener(mediaqueryresponse) 

        function mediaqueryresponse(mql)
        {
            
            /* if media query matches */
            if (mql.matches)
            { 
                app.toggleNavBar(); 
            } 
            else 
            {
                app.deleteToggle();
            }
        }
    }, 



    /* 
    toggleNavBar()
    Display Menu Burger (1) 
    and open sidebar when user clicks on it (2)
    */
    toggleNavBar:function() 
    {

        /* (1) */
        var $buttonToggle = $('<a href="#menu-toggle" class="btn menu-burger" id="menu-toggle"></a>').html(app.$menuBurger);

        $buttonToggle.prependTo('#toggle-navbar');

        /* (2) */
        $buttonToggle.click(function(e) 
        {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            $buttonToggle.removeClass(); 
            app.toggleSidebar(); 
        });
    }, 


    /* 
    toggleSidebar()
    Move #menu-toggle in the sidebar and change html to an icon(1) 
    and remove #menu-toggle and close sidebar when user clicks on it (2)
    */
    toggleSidebar:function() 
    {

        /* (1) */
        let $toggle = $('#menu-toggle').addClass('sidebar-cross'); 
        $toggle.prependTo('#home-sidebar'); 
        $toggle.html("&#x274C;"); 
      
        /* (2) */
        $toggle.click(function(e) { 
            $toggle.remove(); 
            app.toggleNavBar(); 
        })
    }, 



    /* 
    deleteToggle()
    Remove menu-burger, 
    toggle, 
    and class "toggled" (if the sidebar has oppen)
    */
    deleteToggle:function()
    {
        app.$menuBurger.remove(); 
        $('#menu-toggle').remove();
        $('#wrapper').removeClass();    
    }
}


$(app.init);




