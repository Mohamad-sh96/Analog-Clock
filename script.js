document.querySelectorAll(".text-input")forEach((element) => {
	element.addEventListener("blur",(event) => {
		if(event.target.value != ""){


			event.target.nextElementSibling.classList.add("filled")
			;
			} else{
				event.target.netElementSibling.classList.remove("filled"); 
			} 
		});
});