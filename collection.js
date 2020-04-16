
// var images = [
// "portraitIMG/meportrait.jpg",
// "portraitIMG/annazoom.png"
// ]


// for (var i=0; i<images.length; i++){
// 	$('#row1images').append(images[i])
// 	console.log(images[i])
// }


// var ImgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = 'portraitIMG/meportrait.jpg';


// var images = [
// "portraitIMG/meportrait.jpg",
// "portraitIMG/annazoom.png"
// ]

// for (var )

$(window).mousedown(function( event ){
	var imagesDiv = $('<div/>', {
		'class' : 'mouseDownBox'
	})
	.html(images[counter%images.length].pic)
	.css({'top' : event.pageY-50, 'left' : event.pageX-50})

	counter = counter + 1;
	$('body').append(imagesDiv)
})