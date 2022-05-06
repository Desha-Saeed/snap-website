//hide elements desktop
const companyDesktopContainer = document.getElementById('company-desktop-container');
const companyDesktopButton = document.getElementById('company-desktop')
const featuresDesktopContainer = document.getElementById('features-desktop-container');
const featuresDesktopButton = document.getElementById('feature-desktop');


//hide elements on desktop functionality
const hideDropdown = (button,container) =>{
    

    button.addEventListener('click',()=>{
        button.firstChild.nextSibling.nextElementSibling.classList.toggle('rotate-180')
        container.classList.toggle('hidden');
    })

}
//implementing the functions on the elements
hideDropdown(companyDesktopButton,companyDesktopContainer);
hideDropdown(featuresDesktopButton,featuresDesktopContainer);

//mobile elements

const sideNav = document.getElementById('sidenav');
const mobileMenu = document.getElementById('mobile-menu');
const mainEl = document.getElementById('main');
const closeMenu = document.getElementById('close-menu');

//dropdown elements
const companyMobileButton = document.getElementById('company-mobile');
const companyMobileContainer = document.getElementById('company-mobile-container');
const featuresMobileButton = document.getElementById('features-mobile');
const featuresMobileContainer = document.getElementById('features-mobile-container');
const careersLink = document.getElementById('careers-link');


//opening the nav functionality
const openNav = ()=>{
  sideNav.style.width = "277px";
  mainEl.style.marginRight = "277px";
  document.body.style.backgroundColor = "#000000db";
 
}

//closing the nav function
function closeNav() {
    sideNav.style.width = "0";
    mainEl.style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    
  }
 
mobileMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);


//Mobile dropdown functionality
const mobileDropdown = (button,container, styledButton,topValue)=> {
    
    button.addEventListener('click', ()=>{
        button.firstChild.nextSibling.nextElementSibling.classList.toggle('rotate-180');
        container.classList.toggle('hidden');   

        if(container.classList.contains('hidden')){
            styledButton.style.marginTop = '0';
        } else styledButton.style.marginTop = topValue;

    })


}
mobileDropdown(featuresMobileButton,featuresMobileContainer,companyMobileButton,'175px')

mobileDropdown(companyMobileButton,companyMobileContainer,careersLink,'120px')
