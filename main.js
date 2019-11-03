followers = document.getElementsByClassName("css-18t94o4 css-1dbjc4n r-1j3t67a r-1w50u8q r-o7ynqc r-1j63xyz")


function hide() {
	for (var person of followers) {
		if (person.firstElementChild.lastElementChild.firstElementChild.childNodes[0].lastElementChild.lastElementChild.lastElementChild.lastElementChild.innerText == "Follows you" || "Seni takip ediyor")
		{
			person.parentElement.remove()
		}
	}
}


hide() //As musch as you need
