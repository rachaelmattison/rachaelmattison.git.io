
// $('.flower').scroll(function(){
// 	$("span").text(x += 4);
// });


var flowers = [
{
	"name": "1.rose",
	"color":"1.red", 
	"size": "1.medium",
	"location": "1.Asia", 
	"image": "rose.jpg"
},
{
	"name" : "2.daisy",
	"color": "2.white",
	"size": "2.size",
	"location" : "2.Europe",
	"url" : ""

},
	
{
	"name" : "3.sunflower",
	"color": "3.yellow",
	"location": "3.North America",
	"size": "3.large"
},
	
{
	"name": "4.Tulip",
	"color": "4.pink",
	"location": "4.Europe",
	"size": "4.medium"
},

{
	"name": "5.lily",
	"color": "5.white",
	"location": "5.Europe",
	"size": "5.large"
},

{
	"name": "6.daffodil",
	"color": "6.yellow",
	"location": "6.Europe",
	"size": "6.small"
},

{
	"name": "7.Orchid",
	"color": "7.white",
	"location": "7.South America",
	"size": "7.medium"
},

{
	"name": "8.poppy",
	"color": "8.red",
	"size": "8.medium",
	"location": "8.Asia"
},

{
	"name": "9.pansie",
	"color": "9.purple",
	"location": "9.Europe",
	"size": "9.small"
},

{
	"name": "10.hibiscius",
	"color": "10.red",
	"size": "10.large",
	"location": "10.Asia",
},

{
	"name": "11.carnation",
	"color": "11.pink",
	"size": "11.medium",
	"location": "11.Europe",
},

{
	"name": "12.lavander",
	"color": "12.purple",
	"size": "12.large",
	"location": "12.Africa"
},

{
	"name": "13.lilac",
	"color": "13.purple",
	"size": "13.large",
	"location": "13.Europe"
},

 
{	
	"name": "14.violet",
	"color": "14.purple",
	"size": "14.small",
	"location": "14.North America"
},

{
	"name": "15.jasmine",
	"color": "15.white",
	"size": "15.small",
	"location": "15.Europe"
},

{
	"name": "16.peonie",
	"color": "16.pink",
	"size": "16.large",
	"location": "16.North America"
}
]






for (var i=0; i<flowers.length; i++){
	var flowersDiv = $('<div/>', {
		'class' : 'clickBox'
	})
	.html(
		'<span class="name">' + flowers[i].name + 
		</span> )
		
}





// var flowers = 0;
// $(document).ready(function(){
// 	$(".flower").scroll(function(){
// 		$("span").text( x+= 1);
// 	});
// };
