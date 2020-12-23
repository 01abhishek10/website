flag = 0;
function openNav() {
  document.getElementById("myNav").style.width="100%";
}

function closeNav() {
  document.getElementById("myNav").style.width="0%";
}

function openSubNav() {
  document.getElementById("subNav").style.height="100%";
}

function closeSubNav() {
  document.getElementById("subNav").style.height="0%";
}
function contactFunction(x){
  x.classList.toggle("fa-sun");
  var ele = document.body;
  ele.classList.toggle('dark-mode');
  if(x.classList[2]!=null){
    $("#main-logo").attr("src", "assets/img/Main Logo.png");
    var navLink = document.getElementById('desk1-display');
    console.log(navLink.className)
    navLink.className = navLink.className.replace(/\btext-dark\b/g, "text-white");
    console.log(navLink.className)
    var navLink = document.getElementById('desk2-display');
    navLink.className = navLink.className.replace(/\btext-dark\b/g, "text-white");
    var navLink = document.getElementById('desk3-display');
    navLink.className = navLink.className.replace(/\btext-dark\b/g, "text-white");
    var navLink = document.getElementById('desk4-display');
    navLink.className = navLink.className.replace(/\btext-dark\b/g, "text-white");
    var mainNav = document.getElementById('mainNav');
    mainNav.className = mainNav.className.replace(/\bbg-light\b/g, "bg-dark");
    var element = document.getElementById('contact-btn');
    element.className = element.className.replace(/\bbtn-outline-dark\b/g, "btn-outline-light");
    var element = document.getElementById('contact-btn3');
    element.className = element.className.replace(/\bbtn-outline-dark\b/g, "btn-outline-light");
  }
  else{
    $("#main-logo").attr("src", "assets/img/Favicon.png");
    // $("#mainNav").css("background" , "white");
    var navLink = document.getElementById('desk1-display');
    navLink.className = navLink.className.replace(/\btext-white\b/g, "text-dark");
    var navLink = document.getElementById('desk2-display');
    navLink.className = navLink.className.replace(/\btext-white\b/g, "text-dark");
    var navLink = document.getElementById('desk3-display');
    navLink.className = navLink.className.replace(/\btext-white\b/g, "text-dark");
    var navLink = document.getElementById('desk4-display');
    navLink.className = navLink.className.replace(/\btext-white\b/g, "text-dark");
    var mainNav = document.getElementById('mainNav');
    mainNav.className = mainNav.className.replace(/\bbg-dark\b/g, "bg-light");
    var element = document.getElementById('contact-btn');
    element.className = element.className.replace(/\bbtn-outline-light\b/g, "btn-outline-dark");
    var element = document.getElementById('contact-btn3');
    element.className = element.className.replace(/\bbtn-outline-light\b/g, "btn-outline-dark");
  }
}

// for about and othe pages
function aboutFunction(x){
  x.classList.toggle("fa-sun");
  var ele = document.body;
  ele.classList.toggle('dark-mode');
  if (x.classList[2]!=null){
        //mobile overlay background
        var overlay = document.getElementById('myNav');
        overlay.className = overlay.className.replace(/\boverlay\b/g, "dark-overlay");
        //chaging overlay content
        var overcontent = document.getElementById('navbarToggler');
        overcontent.className = overcontent.className.replace(/\boverlay-content\b/g, "dark-overlay-content")
        //sunicon bg to white
        $("#night-toggle-mob").css('background', "white");
        //changing footer link colors
        $(".nav-link").css("color" , "white");
        var fla = document.getElementById('fl-a');
        fla.className = fla.className.replace(/\bdark\b/g, "white");
        var flb = document.getElementById('fl-b');
        flb.className = flb.className.replace(/\bdark\b/g, "white");
        var flc = document.getElementById('fl-c');
        flc.className = flc.className.replace(/\bdark\b/g, "white");
        var fld = document.getElementById('fl-d');
        fld.className = fld.className.replace(/\bdark\b/g, "white");
        var fle = document.getElementById('fl-e');
        fle.className = fle.className.replace(/\bdark\b/g, "white");
        var flf = document.getElementById('fl-f');
        flf.className = flf.className.replace(/\bdark\b/g, "white");

        //in desktop change the icon
        if(screen.width >= 992)
            document.getElementById('main-logo').src='assets/img/New logo.png';

        $(window).scroll(function(){
          var scroll = $(window).scrollTop();
          console.log('scroll val'+scroll);
          
          if (scroll < 300 && screen.width >= 992) {
            $("#mainNav").css("background", "black");
          }
        })
        //change the background in mobile view 
        if(screen.width < 768) {
          $("#mainNav").css("background", "white");
      }
    var element = document.getElementById('contact-btn');
    element.className = element.className.replace(/\bbtn-outline-dark\b/g, "btn-outline-light");
    var element = document.getElementById('contact-btn2');
    element.className = element.className.replace(/\bbtn-outline-dark\b/g, "btn-outline-light");
    var element = document.getElementById('contact-btn3');
    element.className = element.className.replace(/\bbtn-outline-dark\b/g, "btn-outline-light");
  }
  else if(x.classList[2] == null){
    //desktop dark mode change
    if(screen.width >=992) {
      $("#mainNav").css("background" , "transparent");
      document.getElementById('night-toggle').style.backgroundColor='transparent';
              // $("#main-logo").attr("src", "assets/img/New logo.png");
              // $(".navbar-brand").css("color", "black");  	
              $(".nav-link").css("color", "black");
              $("#main-logo").attr("src", "assets/img/Footer Logo.png");
    }
     //mobile menu darkmode change
  var overlay = document.getElementById('myNav');
  overlay.className = overlay.className.replace(/\bdark-overlay\b/g, "overlay");

  //mobile menu background change
  var overcontent = document.getElementById('navbarToggler');
  overcontent.className = overcontent.className.replace(/\bdark-overlay-content\b/g, "overlay-content")

 
    //changing footer links
    var fla = document.getElementById('fl-a');
  fla.className = fla.className.replace(/\bwhite\b/g, "dark");
  var flb = document.getElementById('fl-b');
  flb.className = flb.className.replace(/\bwhite\b/g, "dark");
  var flc = document.getElementById('fl-c');
  flc.className = flc.className.replace(/\bwhite\b/g, "dark");
  var fld = document.getElementById('fl-d');
  fld.className = fld.className.replace(/\bwhite\b/g, "dark");
  var fle = document.getElementById('fl-e');
  fle.className = fle.className.replace(/\bwhite\b/g, "dark");
  var flf = document.getElementById('fl-f');
  flf.className = flf.className.replace(/\bwhite\b/g, "dark");


    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      console.log(scroll);
      var dmode = document.querySelector('.dark-mode');
      if (scroll > 300 && dmode == null) {
          console.log('scrolled not in dark');
          $("#mainNav").css("background" , "#37474F"); //after scrolling make bg to #37474F
          document.getElementById('night-toggle').style.backgroundColor='transparent';
          // $(".navbar-brand").css("color", "white");

          if (screen.width >= 992) {

              //scrolled and not in dark mode in desktop view
          $(".nav-link").css("color", "white");
          
          }
          if (screen.width < 992) {
              //scrolled and not in dark mode in mobile view;

              // console.log(screen.width);
              $(".nav-link").css("color", "black");
              // $(".navbar-toggler").css("backgroundColor", "white");
          }
      }
      if (scroll < 300 && dmode ==null){
          console.log('not scroll in dark');
          $("#mainNav").css("background" , "transparent");//before scrolling make bg transparent

          if(screen.width >= 992) {
              //didn't scroll and not in darkmode in desktop view

              document.getElementById('night-toggle').style.backgroundColor='transparent';
              // $("#main-logo").attr("src", "assets/img/New logo.png");
              // $(".navbar-brand").css("color", "black");  	
              $(".nav-link").css("color", "black");
          }

          if(screen.width < 768){
              //didn't' scroll and not in darkmode in mobile view
              // $(".navbar-brand").css("color", "black");  	
              $(".nav-link").css("color", "black");
          }
      }
  })

    var element = document.getElementById('contact-btn');
    element.className = element.className.replace(/\bbtn-outline-light\b/g, "btn-outline-dark");
    var element = document.getElementById('contact-btn2');
    element.className = element.className.replace(/\bbtn-outline-light\b/g, "btn-outline-dark");
    var element = document.getElementById('contact-btn3');
    element.className = element.className.replace(/\bbtn-outline-light\b/g, "btn-outline-dark");
  }
 
}

//for index page
function myFunction(x) {
  x.classList.toggle("fa-sun");
  var ele = document.body;
  ele.classList.toggle('dark-mode');
  if (x.classList[2]!=null){
    //mobile overlay background
    var overlay = document.getElementById('myNav');
    overlay.className = overlay.className.replace(/\boverlay\b/g, "dark-overlay");
    //chaging overlay content
    var overcontent = document.getElementById('navbarToggler');
    overcontent.className = overcontent.className.replace(/\boverlay-content\b/g, "dark-overlay-content")
    //sunicon bg to white
    $("#night-toggle-mob").css('background', "white");
     //changing footer link colors
    var fla = document.getElementById('fl-a');
    fla.className = fla.className.replace(/\bdark\b/g, "white");
    var flb = document.getElementById('fl-b');
    flb.className = flb.className.replace(/\bdark\b/g, "white");
    var flc = document.getElementById('fl-c');
    flc.className = flc.className.replace(/\bdark\b/g, "white");
    var fld = document.getElementById('fl-d');
    fld.className = fld.className.replace(/\bdark\b/g, "white");
    var fle = document.getElementById('fl-e');
    fle.className = fle.className.replace(/\bdark\b/g, "white");
    var flf = document.getElementById('fl-f');
    flf.className = flf.className.replace(/\bdark\b/g, "white");
    //changing mobile overlay icon background
    var mobhamicon = document.getElementById('ham-icon');
    if (mobhamicon!=null){
      mobhamicon.className = mobhamicon.className.replace(/\bbg-transparent\b/g, "bg-white");
    }
    var teleicon = document.getElementById('tele-icon');
    if (teleicon!= null) {
    teleicon.className = teleicon.className.replace(/\bbg-transparent\b/g, "bg-white");
    }

    // document.getElementById('night-toggle').style.backgroundColor='white';
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      console.log('scroll val'+scroll);
    //   document.getElementById('main-logo').src='assets/img/New logo.png';
      if (scroll < 300) {
        $("#mainNav").css("background", "transparent");
      }
    //       //make background black inside the dark mode if scrolled
    //       $("#mainNav").css("background" , "black");
    //       $(".navbar-brand").css("color", "white");
    //       if (screen.width >= 992) {
    //         //make nav-item link color to white in desktop dark mode after scrolling
    //       $(".nav-link").css("color", "white");
    //       }
    //       if (screen.width < 992) {
    //         //after scroll in mobile view in dark mode 
    //   //       var mobhamicon = document.getElementById('ham-icon');
    //   // mobhamicon.className = mobhamicon.className.replace(/\bbg-white\b/g, "bg-transparent");
    //   // var teleicon = document.getElementById('tele-icon');
    //   // teleicon.className = teleicon.className.replace(/\bbg-white\b/g, "bg-transparent");
    //         $("#mainNav").css("background" , "#37474F");
    //       $(".nav-link").css("color", "black");
    //       }
    // }
    // else{
        // if (screen.width < 768) {
          // $("#mainNav").css("background", "#37474F");
    //       var mobhamicon = document.getElementById('ham-icon');
    // mobhamicon.className = mobhamicon.className.replace(/\bbg-transparent\b/g, "bg-white");
    // var teleicon = document.getElementById('tele-icon');
    // teleicon.className = teleicon.className.replace(/\bbg-transparent\b/g, "bg-white");
        // }
    //     // $("#main-logo").attr("src", "assets/img/New logo.png");
    //     $("#mainNav").css("background" , "transparent");	
    //     // $(".nav-link").css("color", "white");
        
    // }
    })

    console.log(x.classList);
    // document.getElementById('main-logo').src='assets/img/New logo.png';
    document.getElementById('full-head').style.animation='none';
    document.getElementById('react').src="assets/img/w-react.png";
    document.getElementById('angular').src="assets/img/w-angular.png";
    document.getElementById('html5').src="assets/img/w-html5.png";
    document.getElementById('css').src="assets/img/w-css.png";
    document.getElementById('js').src="assets/img/w-js.png";
    document.getElementById('php').src="assets/img/w-php.png";
    document.getElementById('python').src="assets/img/w-python.png";
    document.getElementById('java').src="assets/img/w-java.png";
    document.getElementById('node').src="assets/img/w-node.png";
    document.getElementById('rails').src="assets/img/w-rails.png";
    document.getElementById('ios').src="assets/img/w-ios.png";
    document.getElementById('android').src="assets/img/w-android.png";
    document.getElementById('react1').src="assets/img/w-react1.png";
    document.getElementById('flutter').src="assets/img/w-flutter.png";
    document.getElementById('wordpress').src="assets/img/w-wordpress.png";
    document.getElementById('magento').src="assets/img/w-magento.png";
    document.getElementById('shopify').src="assets/img/w-shopify.png";
    document.getElementById('mysql').src="assets/img/w-sql.png";
    document.getElementById('mongodb').src="assets/img/w-mongodb.png";
    document.getElementById('oracle').src="assets/img/w-oracle.png";
    document.getElementById('firebase').src="assets/img/w-firebase.png";
    var element1 = document.getElementById('contact-btn');
    console.log(element1);
    element1.className = element1.className.replace(/\bbtn-outline-dark\b/g, "btn-outline-light");
    console.log(element1);
    var element2 = document.getElementById('contact-btn2');
    element2.className = element2.className.replace(/\bbtn-outline-dark\b/g, "btn-outline-light");
    var element3 = document.getElementById('contact-btn3');
    element3.className = element3.className.replace(/\bbtn-outline-dark\b/g, "btn-outline-light");
    // to make text black in nightmode
    var hometab = document.getElementById('home-tab');
    hometab.className = hometab.className.replace(/\bnav-link text-center text-dark\b/g, "nav-link text-center text-white");
    var profiletab = document.getElementById('profile-tab');
    profiletab.className = profiletab.className.replace(/\bnav-link text-center text-dark\b/g, "nav-link text-center text-white"); 
    var contacttab = document.getElementById('contact-tab');
    contacttab.className = contacttab.className.replace(/\bnav-link text-center text-dark\b/g, "nav-link text-center text-white");
    var cmstab = document.getElementById('cms-tab');
    cmstab.className = cmstab.className.replace(/\bnav-link text-center text-dark\b/g, "nav-link text-center text-white");
    var dbtab = document.getElementById('db-tab');
    dbtab.className = dbtab.className.replace(/\bnav-link text-center text-dark\b/g, "nav-link text-center text-white");
  }
else if (x.classList[2] == null){
  // changin footer link colors
  var fla = document.getElementById('fl-a');
  fla.className = fla.className.replace(/\bwhite\b/g, "dark");
  var flb = document.getElementById('fl-b');
  flb.className = flb.className.replace(/\bwhite\b/g, "dark");
  var flc = document.getElementById('fl-c');
  flc.className = flc.className.replace(/\bwhite\b/g, "dark");
  var fld = document.getElementById('fl-d');
  fld.className = fld.className.replace(/\bwhite\b/g, "dark");
  var fle = document.getElementById('fl-e');
  fle.className = fle.className.replace(/\bwhite\b/g, "dark");
  var flf = document.getElementById('fl-f');
  flf.className = flf.className.replace(/\bwhite\b/g, "dark");

  //mobile menu darkmode change
  var overlay = document.getElementById('myNav');
  overlay.className = overlay.className.replace(/\bdark-overlay\b/g, "overlay");

  //mobile menu background change
  var overcontent = document.getElementById('navbarToggler');
  overcontent.className = overcontent.className.replace(/\bdark-overlay-content\b/g, "overlay-content")

  $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                console.log(scroll);
                var dmode = document.querySelector('.dark-mode');
                if (scroll > 300 && dmode == null) {
                    console.log('scrolled not in dark');
                    $("#mainNav").css("background" , "#37474F"); //after scrolling make bg to #37474F
                    document.getElementById('night-toggle').style.backgroundColor='transparent';
                    // $(".navbar-brand").css("color", "white");

                    if (screen.width >= 992) {

                        //scrolled and not in dark mode in desktop view
                    $(".nav-link").css("color", "white");
                    
                    }
                    if (screen.width < 992) {
                        //scrolled and not in dark mode in mobile view;

                        // console.log(screen.width);
                        $(".nav-link").css("color", "black");
                        // $(".navbar-toggler").css("backgroundColor", "white");
                    }
                }
                if (scroll < 300 && dmode ==null){
                    console.log('not scroll in dark');
                    $("#mainNav").css("background" , "transparent");//before scrolling make bg transparent

                    if(screen.width >= 992) {
                        //didn't scroll and not in darkmode in desktop view

                        document.getElementById('night-toggle').style.backgroundColor='transparent';
                        // $("#main-logo").attr("src", "assets/img/New logo.png");
                        // $(".navbar-brand").css("color", "black");  	
                        $(".nav-link").css("color", "black");
                    }

                    if(screen.width < 768){
                        //didn't' scroll and not in darkmode in mobile view
                        // $(".navbar-brand").css("color", "black");  	
                        $(".nav-link").css("color", "black");
                    }
                }
            })


    var mobhamicon = document.getElementById('ham-icon');
    if (mobhamicon!=null)
    mobhamicon.className = mobhamicon.className.replace(/\bbg-white\b/g, "bg-transparent");
    var teleicon = document.getElementById('tele-icon');
    if (teleicon!=null)
    teleicon.className = mobhamicon.className.replace(/\bbg-white\b/g, "bg-transparent");
    if (screen.width < 992){
    var temp = document.getElementById('myNav');
    temp.className = temp.className.replace(/\bdark-overlay\b/g,"overlay");
    }
    document.getElementById('night-toggle').style.backgroundColor='white';
    console.log(x.classList);
    document.getElementById('full-head').style.animation='animate 12s ease-in-out infinite';
    document.getElementById('react').src="assets/img/react.png";
    document.getElementById('angular').src="assets/img/angular.png";
    document.getElementById('html5').src="assets/img/html5.png";
    document.getElementById('css').src="assets/img/css.png";
    document.getElementById('js').src="assets/img/js.png";
    document.getElementById('php').src="assets/img/php.png";
    document.getElementById('python').src="assets/img/python.png";
    document.getElementById('java').src="assets/img/java.png";
    document.getElementById('node').src="assets/img/node.png";
    document.getElementById('rails').src="assets/img/rails.png";
    document.getElementById('ios').src="assets/img/ios.png";
    document.getElementById('android').src="assets/img/android.png";
    document.getElementById('react1').src="assets/img/react.png";
    document.getElementById('flutter').src="assets/img/flutter.png";
    document.getElementById('wordpress').src="assets/img/wordpress.png";
    document.getElementById('magento').src="assets/img/magento.png";
    document.getElementById('shopify').src="assets/img/shopify.png";
    document.getElementById('mysql').src="assets/img/mysql.png";
    document.getElementById('mongodb').src="assets/img/mongodb.png";
    document.getElementById('oracle').src="assets/img/oracle.png";
    document.getElementById('firebase').src="assets/img/firebase.png";
    var element1 = document.getElementById('contact-btn');
    element1.className = element1.className.replace(/\bbtn-outline-light\b/g, "btn-outline-dark");
    var element2 = document.getElementById('contact-btn2');
    element2.className = element2.className.replace(/\bbtn-outline-light\b/g, "btn-outline-dark");
    var element3 = document.getElementById('contact-btn3');
    element3.className = element3.className.replace(/\bbtn-outline-light\b/g, "btn-outline-dark");
    // to make text dark in white mode
    var hometab = document.getElementById('home-tab');
    hometab.className = hometab.className.replace(/\bnav-link text-center text-white\b/g, "nav-link text-center text-dark");
    var profiletab = document.getElementById('profile-tab');
    profiletab.className = profiletab.className.replace(/\bnav-link text-center text-white\b/g, "nav-link text-center text-dark");
    var contacttab = document.getElementById('contact-tab');
    contacttab.className = contacttab.className.replace(/\bnav-link text-center text-white\b/g, "nav-link text-center text-dark");
    var cmstab = document.getElementById('cms-tab');
    cmstab.className = cmstab.className.replace(/\bnav-link text-center text-white\b/g, "nav-link text-center text-dark");
    var dbtab = document.getElementById('db-tab');
    dbtab.className = dbtab.className.replace(/\bnav-link text-center text-white\b/g, "nav-link text-center text-dark");
  }
}

// text typing effect
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

// NUMBER COUNT INCREMENT
//Animate my counter from 0 to set number (6)
$({counter: 0}).animate({counter: 13}, {
  //Animate over a period of 2seconds
  duration: 3000,
  //Progress animation at constant pace using linear
  easing:'linear',
  step: function() {    
    //Every step of the animation, update the number value
    //Use ceil to round up to the nearest whole int
    $('.project').text(Math.ceil(this.counter))
  },
  complete: function() {
    //Could add in some extra animations, like a bounc of colour change once the count up is complete.
  }
});
$({counter: 0}).animate({counter: 80}, {
  //Animate over a period of 2seconds
  duration: 4000,
  //Progress animation at constant pace using linear
  easing:'linear',
  step: function() {    
    //Every step of the animation, update the number value
    //Use ceil to round up to the nearest whole int
    $('.business').text(Math.ceil(this.counter))
  },
  complete: function() {
    //Could add in some extra animations, like a bounc of colour change once the count up is complete.
  }
});
$({counter: 0}).animate({counter: 8}, {
  //Animate over a period of 2seconds
  duration: 3000,
  //Progress animation at constant pace using linear
  easing:'linear',
  step: function() {    
    //Every step of the animation, update the number value
    //Use ceil to round up to the nearest whole int
    $('.states').text(Math.ceil(this.counter))
  },
  complete: function() {
    //Could add in some extra animations, like a bounc of colour change once the count up is complete.
  }
});
$({counter: 0}).animate({counter: 11}, {
  //Animate over a period of 2seconds
  duration: 3000,
  //Progress animation at constant pace using linear
  easing:'linear',
  step: function() {    
    //Every step of the animation, update the number value
    //Use ceil to round up to the nearest whole int
    $('.size').text(Math.ceil(this.counter))
  },
  complete: function() {
    //Could add in some extra animations, like a bounc of colour change once the count up is complete.
  }
});