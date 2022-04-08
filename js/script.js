// let navbar = document.getElementById("navbar");
// let menu = document.getElementById("menu");

// window.onscroll = function () {
//     if(window.pageYOffset >= menu.offsetTop){
//         navbar.classList.add("sticky");

//     }
//     else{
//         navbar.classList.remove("sticky")
//     }
    
// }

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }