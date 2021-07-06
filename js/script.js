
/* Toggle Navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
	hideSection();

});
function hideSection(){
	document.querySelector("selection.active").classList.toggle("fade-out");
}

/*-----------------Portfolio item Details Popup---------------------------------
document.addEventListener("click", (e) => {
	if (e.target.classList.contains("view-project-btn")){
		togglePortfolioPopup();
		portfolioItemDetails(e.target.parentElement);
	}
})
function togglePortfolioPopup(){
	document.querySelector(".portfolio-popup").classList.toggle("open");
	document.body.classList.toggle("hide-scrolling");
	document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem){
	document.querySelector(".pp-thumbnail img").src =
	portfolioItem.querySelector(".pp-thumbnail img").src;

	document.querySelector(".pp-header h3").insertAdjacentHTML() = 
	portfolioItem.querySelector(".portfolio-item-title").insertAdjacentHTML();
 
 	document.querySelector(".pp-body").insertAdjacentHTML() =
 	portfolioItem.querySelector("portfolio-item-details").insertAdjacentHTML();


}*/



