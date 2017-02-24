
// Innitiate Search (prompted by clicking button on index page)
function search () {
// clear any previous data in the id 'songresults'
	document.getElementById('songResults').innerHTML = " "
 // Get the input provided by the user at the id 'songResults'
	var input = document.getElementById('input').value

// using ajax, use the link plus the user input to create  a search term to access the api
$.ajax({url: "https://itunes.apple.com/search?term= " + input, 
	dataType: "jsonp",
// if the call is successful, run the function with the perameter 'data'		
		success: function(data){
			console.log(data)
// scroll through all the results. for the length of the results:
			for(var i=0; i<data.results.length; i++){
// 1) create a div. and name it div
				var div = document.createElement('div')
// for the newly created div. add a class named col-md-4
				div.className = "col-md-4"
// inside our div (named div) write the following using innerHTML
				div.innerHTML = "<h2>" + data.results[i].artistName + "<h2>"
// inside our div (named div) write the following using innerHTML
				div.innerHTML += "<img src=" + data.results[i].artworkUrl100 + "/>"
// inside our div (named div) write the following using innerHTML
				div.innerHTML += "<h3>" + data.results[i].trackName + "<h3>"
// inside our div (named div) write the following using innerHTML
				div.innerHTML += "<audio controls>" + "<source src=" + data.results[i].previewUrl + " type='audio/ogg'>" + "</audio><br>"
// inside our div (named div) write the following using innerHTML
				div.innerHTML += "<button onclick='search()' class='btn btn-primary btn-md'>" + "Buy Song" + "</button>"
// get the id 'songresults'. add the div named 'div'
				document.getElementById('songResults').appendChild(div)
        }
    },
// make a get call
       		type: 'GET'


});
// reset the input form so its blank
document.getElementById("form").reset();

}

