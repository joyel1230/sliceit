

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

            // navlinks.forEach((link)=>{
            //     link.style.color ="white";
            // })
        }
    }