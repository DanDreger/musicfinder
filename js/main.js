
function search () {
	var input = document.getElementById('input').value

$.ajax({url: "https://itunes.apple.com/search?term=" + "old " + input, 
	dataType: "jsonp",
		success: function(data){
			
			console.log(data)

			for(var i=0; i<data.results.length; i++){
				var div = document.createElement('div')
				div.className = "col-md-4"
				div.innerHTML = "<h2>" + data.results[i].artistName + "<h2>"
				div.innerHTML += "<img src=" + data.results[i].artworkUrl100 + "/>"
				div.innerHTML += "<h3>" + data.results[i].trackName + "<h3>"
				div.innerHTML += "<audio controls>" + "<source src=" + data.results[i].previewUrl + " type='audio/ogg'>" + "</audio><br>"
				div.innerHTML += "<button onclick='search()' class='btn btn-primary btn-md'>" + "Buy Song" + "</button>"
				// document.getElementById('songResults').className = "col-md-4"
				document.getElementById('songResults').appendChild(div)
        }
    },

       		type: 'GET'

   		// error: function(error){
   		// 	console.log(error)
   		// }


});

}

