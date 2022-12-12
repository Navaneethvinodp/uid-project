function from_val(){
	let x=document.forms["cys"]["fname"].value;
	if (x==""){
		alot("name must be filled");
		return false;
	}
}