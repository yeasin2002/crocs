    
    
    $(document).ready(function () {

     $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 10) {
    $(".header-middle").removeClass("scroll-header");
   }else{
    $(".header-middle").addClass("scroll-header");
   }
  });
  
        
  //    click-action
        $(".header__bar").on("click", function() {
            $(".offcanva, .overlay").addClass("active");
            return false;
        });

        $(".cross").on("click", function() {
            $(".offcanva, .overlay").removeClass("active");
        });

        $(".overlay").on("click", function() {
            $(".offcanva, .overlay").removeClass("active");
        });


    }); //---document-ready-----
