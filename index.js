const practice = document.querySelector('.page-title');
practice.addEventListener('mouseenter',function() {
	practice.innerText = "Brittany"
})
practice.addEventListener('mouseleave',function() {
	practice.innerText = "The life of"
})


const navbar = document.querySelector('.nav');
practice.addEventListener('click',function() {

	if(practice.style.color ===""){
		practice.style.color ="blue"

	}
	else {practice.style.color= 'red'}
}

	)