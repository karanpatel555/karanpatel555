	
function toggleMenu(svg) {
	svg.classList.toggle("HamburgerActive")
	let mobileMenu = document.getElementById("MobileMenu");
	mobileMenu.classList.toggle("MobileActive");

	
  
  if (svg.classList.contains("HamburgerActive")) {
	let wishHeight = mobileMenu.scrollHeight + 39;
		console.log(wishHeight)
    let openCont = mobileMenu.animate([
      {
        height: '0px'
      },
      {
        height: wishHeight + 'px'
      }
    ], {
      duration: 200
    });
    openCont.onfinish = function () {
      mobileMenu.style.height = 'auto';
    }
  } else {
    let aktHeight = mobileMenu.clientHeight;
	  console.log(aktHeight)
    let closeCont = mobileMenu.animate([
      {
        height: aktHeight + 'px'
      },
      {
        height: '0px'
      }
    ], {
      duration: 200
    });
    closeCont.onfinish = function () {
      mobileMenu.style.height = "0px";
    }
  }
}
	