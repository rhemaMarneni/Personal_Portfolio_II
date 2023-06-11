const h2 = document.querySelector("h2")
const text = `Hi! I'm Rhema. I'm a CS enthusiast on a Web Development journey! For ideas, opportunities or a casual hello, contact me :)`
typingEffect(h2, text, 80)

function typingEffect(element, text, time) {
	const textArray = Array.from(text)
	let i = 0
	const interval = setInterval(() => {
		if (i == textArray.length - 1) {
			clearInterval(interval)
		}
		element.textContent += textArray[i]
		i++
	}, time)
}
