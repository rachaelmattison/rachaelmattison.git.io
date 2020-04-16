// var portraits = [
// {
// 	"color" : "magenta",
// 	"pic" : "url('https://d2w9rnfcy7mm78.cloudfront.net/6853207/large_7b5d2059d17ddd332932e822291c1209.jpg?1586877320?bc=0')"
// },
// {
// 	"color" : "cyan",
// 	"pic" : "url('https://d2w9rnfcy7mm78.cloudfront.net/6853198/large_c047563a9dc7605db0a604a242f6d794.png?1586877293?bc=0')"
// },
// {
// 	"color" : "white",
// 	"pic" : "url('https://d2w9rnfcy7mm78.cloudfront.net/6881744/large_a2676129a89a9c729f388be9789fcc40.jpg?1587047085?bc=0')"
// },
// {
// 	"color" : "white",
// 	"pic" : "url('https://d2w9rnfcy7mm78.cloudfront.net/6881745/large_3433517a25ac5369f9bb38974a97cd65.jpg?1587047085?bc=0')"
// }
// ]

// for (var i=0; i<portraits.length; i++){
// $('.portraits').append("<div class='portraits'>" + portraits[i].pic + portraits[i].color)
// }


var images = [
// "url('https://d2w9rnfcy7mm78.cloudfront.net/6853207/large_7b5d2059d17ddd332932e822291c1209.jpg?1586877320?bc=0')",
// "url('https://d2w9rnfcy7mm78.cloudfront.net/6853198/large_c047563a9dc7605db0a604a242f6d794.png?1586877293?bc=0')",
// "url('https://d2w9rnfcy7mm78.cloudfront.net/6881744/large_a2676129a89a9c729f388be9789fcc40.jpg?1587047085?bc=0')",
// "url('https://d2w9rnfcy7mm78.cloudfront.net/6881745/large_3433517a25ac5369f9bb38974a97cd65.jpg?1587047085?bc=0')",
"url('https://d2w9rnfcy7mm78.cloudfront.net/6882936/large_4825bc10c74279d6b9686996c713b5ea.jpg?1587052716?bc=0')",
"url('https://d2w9rnfcy7mm78.cloudfront.net/6881754/large_edd18c2ab016588886f7b7372c559579.jpg?1587047113?bc=0')"
]

for (var i=0; i=images.length; i++) {
	$('#portraits').append(images[i])
}
// images.forEach(function(portrait) {
// 	$('#portraits').append("<div class=box>" + images + "</div>")
// })


