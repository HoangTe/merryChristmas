function toggleMenu(){
    var nav = document.getElementById('nav');
    nav.style.visibility = 'visible';
    nav.style.background = 'var(--red)';
    
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for(var i=0; i < menuItems.length; i++){
        var menuItem = menuItems[i];

       menuItem.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();
        }else{
            nav.style.visibility = null;
        }
       }
    }
}