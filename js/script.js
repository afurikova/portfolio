document.addEventListener('DOMContentLoaded', function(){
   console.log("document is loaded"); 

	var myWork = [
		{
			"title": "Resume",
			"description": "",
			"url": "http://adica.me.cz/resume/",
			"img": "images/resume.jpg"
		},
		{
			"title": "Portfolio",
			"description": "",
			"url": "http://adica.me.cz/portfolio/",
			"img": "images/portfolio.jpg"
		},
		{
			"title": "Canvas Game",
			"description": "",
			"url": "http://adica.me.cz/frogger/",
			"img": "images/frogger.jpg"
		},
		{
			"title": "Neighborhood app",
			"description": "",
			"url": "http://adica.me.cz/neighborhood/",
			"img": "images/neighborhood.jpg"
		}
	]

	// add screen image
	var screenImg = document.getElementById("screen");
	screenImg.src = "images/screen.jpg";

	// add name
	var name = document.getElementById("name");
	name.innerHTML = "Andrea Furikova";

	// add profession
	var profession = document.getElementById("profession");
	profession.innerHTML = "Web Developer";

	var presentation = document.getElementById("presentation");
	var modals = document.getElementById("modals");
	
	// iterate through the JSON model and add each work to the html
	// along with its relevant models
	for (i = 0; i < myWork.length; i++) {
		var htmlString = "";
		var modalHtmlString = "";

		// define relevant variables
		var workImg = myWork[i].img;
  		var workTitle = myWork[i].title;
  		var workUrl = myWork[i].url;
  		var data_target = "#" + workTitle.toLowerCase();

  		// add my work to the html
  		htmlString += "<div class='col-md-4'>";
  		htmlString += "<img src=" + workImg + " class='img-responsive' alt='Responsive image' data-toggle='modal' data-target=" + data_target + ">";
  		htmlString += "<h3>" + workTitle + "</h3>"
  		htmlString += "</div>";

  		presentation.innerHTML += htmlString;

  		// add modals
  		modalHtmlString += "<div class='modal fade' id=" + data_target.slice(1) + " tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>";
  		modalHtmlString += "<div class='modal-dialog'>";
  		modalHtmlString += "<div class='modal-content'>";
  		modalHtmlString += "<div class='modal-header'>";
  		modalHtmlString += "<h3 class='modal-title' id='myModalLabel'>" + workTitle + "</h3>"
  		modalHtmlString += "</div>"
  		modalHtmlString += "<div class='modal-body'>";
  		modalHtmlString += "<img class='img-responsive' src=" + workImg + ">";
  		modalHtmlString += "<br><a href=" + workUrl + ">" + workUrl + "</a>"
  		modalHtmlString += "</div>"
  		modalHtmlString += "<div class='modal-footer'>"
  		modalHtmlString += "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"
  		modalHtmlString += "</div></div></div></div>";

  		modals.innerHTML += modalHtmlString;
	}



});