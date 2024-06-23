export function menu(){
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.querySelector(".header__nav");

    if(headerToggle){
        headerToggle.addEventListener("click", () => {
            headerNav.classList.toggle("show");

            console.log(headerToggle.getAttribute("aria-expanded") === "true" 
            ? headerToggle.getAttribute("aria-expanded", "false") 
            : headerToggle.getAttribute("aria-expanded", "true"))
      });
    }   
}