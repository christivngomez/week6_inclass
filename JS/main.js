//when ready, do this
$(document).ready(function() {
	//when button is clicked, hide img
	$('.btn1').click(function() {
		//hide img at a rate of 500 milliseconds
		$('.uzumaki img').hide(500)
	})

	//when button is clicked, show img
	$('.btn2').click(function() {
		//show img at a rate of 500 millieseconds
		$('.uzumaki img').show(500)
	})

	//when btn3 is clicked, do this
	$('.btn3').click(function() {
		//when btn3 is clicked, enlarge font-size
		$('h1').animate({fontSize: '42px', letterSpacing: '+=2px'})
	})
	//when btn4 is clicked, do this
	$('.btn4').click(function() {
		//when btn4 is clicked, animate back to original
		$('h1').animate({fontSize: '24px', letterSpacing: '-=2px'})
	})

	//when mouseenter on '.sasuke', do this
	$('.sasuke').click(function() {
		//when mouseenter '.sasuke', enlarge img
		$('.sasuke').animate({
			height: '+=100px',
			width: '+=100px'
		})
	})

	$('.btn5').click(function() {
		$('.sasuke').animate({
			height: '375px',
			width: '300px'
		})
	})
	//when button is clicked, release the other two 'hidden' points
	$('.btn6').click(function() {
		$('#list').append('<li>Naruto,Sasuke v. Ten Tails</li>','<li>Madara v. Shinobi Forces</li>')
	})

	$('.box').mouseenter(function() {
		$('.box').css('background-color','red')
	})

	$('.box').mouseleave(function() {
		$('.box').css('background-color','blue')
	})

	$('.Bebop').mouseleave(function() {
		$('.Bebop').slideUp('slow')
	})

	$('.btn7').click(function() {
		$('.Bebop').slideDown('slow')
	})

	$('.ghost').hover(function() {
		$('.ghost').fadeOut('slow')
	})

	$('.btn8').click(function() {
		$('.ghost').fadeIn('slow')
	})







})


