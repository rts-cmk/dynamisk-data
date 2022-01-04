const menuContainer = document.getElementsByClassName("menu")[0]

data.forEach(createItem)

function createItem(element) {
	var rating = ""

	for(let i = 0; i < element.rating; i++) {
		rating = rating + "⭐"
	}

	const newItem = `
			<h1>${element.name}</h1>
			<img src="${element.image}" alt="" class="menuItem__image">
			<p>${element.description}</p>
			<p>DKK ${element.price}</p>
			<p>${rating}</p>
	`

	const article = document.createElement("article")
	article.classList.add("menuItem")
	article.innerHTML = newItem
	menuContainer.appendChild(article)
}