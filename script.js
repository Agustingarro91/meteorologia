/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu"),
    $span = d.querySelectorAll(".menu .li"),
    $subMenu = d.querySelectorAll(".sub-menu") ;

    

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
    $subMenu.forEach((submenu)=> {     
      submenu.classList.remove("is-active")
    })   
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });


  $span.forEach((span, iS) => {      
    span.addEventListener("click",() => { 
      $subMenu.forEach((submenu, iSu)=> {
        if(iS !== iSu)
        submenu.classList.remove("is-active")
      })      
      span.lastElementChild.classList.toggle("is-active")
    
  })}
  )

})(document);


