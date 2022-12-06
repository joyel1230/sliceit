

var count = 1;
    function bgcl() {
        var property = document.getElementById("bgc");
        if (count == 0) {
            property.style.backgroundColor = "#FFFFFF"
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#890cbd"
            count = 0;
        }
    }