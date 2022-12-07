

var count = 1;
    function bgcl() {
        var property = document.getElementById("bgc");
        if (count == 0) {
            property.style.backgroundColor = "#FFFFFF"
            document.getElementById("bgc").style.transition = "0.5s";
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#890cbd"
            count = 0;
            var navlinks = document.getElementsByClassName("afs");
            console.log(navlinks);
            for(i=0;i<navlinks.length;i++){
                navlinks[i].style.color="white"
            }
            var btn=document.getElementsByClassName("navbar-toggler")[0];
            btn.style.color="white"
        }
    }

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 500) {
          $('.first-div-1 > div').fadeIn(150);
        } else {
          $('.first-div-1 > div').fadeOut(150);
        }
        if (y > 1100) {
            $('.first-div-2 > div').fadeIn(100);
          } else {
            $('.first-div-2 > div').fadeOut(100);
          }
          if (y > 1600) {
            $('.first-div-3 > div').fadeIn(100);
          } else {
            $('.first-div-3 > div').fadeOut(100);
          }
      });