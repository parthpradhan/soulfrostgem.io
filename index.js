// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

//change bg
function ChangeBG(x) {
  if(x==1)
  {
    document.getElementById("head").style.backgroundImage = "url('https://wallpapershome.com/images/pages/pic_h/22711.jpg')";
  }
  if(x==2){
    document.getElementById("head").style.backgroundImage = "url('https://wallpapershome.com/images/pages/pic_h/18547.jpg')";
  }
  if(x==3){
    document.getElementById("head").style.backgroundImage = "url('https://wallpapershome.com/images/pages/pic_h/20331.jpg')";
  }
}
function NormalBG(){
  document.getElementById("head").style.backgroundImage = "url('https://wallpapershome.com/images/pages/pic_h/3942.jpg')";
}

