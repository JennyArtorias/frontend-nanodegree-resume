/*
 * A series of JSON setups that contain the data. Their display functions make 
 * use of helper.js to put them on the page.
 */

var bio = {
	"name": "Artorias Abysswalker",
	"role": "Gate Guardian",
	"contacts": {
		"mobile": "000 000 000",
		"email": "Abysswalker@gmail.com",
		"github": "Abyss",
		"twitter": "@DarkSoulsIII",
		"location": "New Zealand"
	},
	"welcomeMessage": "Prepare to Die",
	"skills": ["Grinding", "Rinse and Repeat", "Rage quit"],
	"biopic": "images/artoriasIcon2.jpg",
	"display": function () {
		var header = $('#header');
		prependItem(header, HTMLheaderRole, this.role);
		prependItem(header, HTMLheaderName, this.name);
		
		// Add contact to top
		var topContacts = $('#topContacts');
		appendItem(topContacts, HTMLmobile, this.contacts.mobile);
		appendItem(topContacts, HTMLemail, this.contacts.email);
		appendItem(topContacts, HTMLgithub, this.contacts.github);
		appendItem(topContacts, HTMLtwitter, this.contacts.twitter);
		appendItem(topContacts, HTMLlocation, this.contacts.location);
		
		// Add contact to bottom
		var footerContacts = $('#footerContacts');
		appendItem(footerContacts, HTMLmobile, this.contacts.mobile);
		appendItem(footerContacts, HTMLemail, this.contacts.email);
		appendItem(footerContacts, HTMLgithub, this.contacts.github);
		appendItem(footerContacts, HTMLtwitter, this.contacts.twitter);
		appendItem(footerContacts, HTMLlocation, this.contacts.location);
		
		appendItem(header, HTMLbioPic, this.biopic);
		appendItem(header, HTMLwelcomeMsg, this.welcomeMessage);
		
		appendItem(header, HTMLskillsStart, '');
		var skillsArea = $('#skills');
		appendArray(skillsArea, HTMLskills, this.skills);
	}
};

var education = {
	"schools": [
		{
			"name": "Camelot",
			"location": "StoryBrooke",
			"degree": "Knighted",
			"majors": ["Greatsword Mastery"],
			"dates": 2016,
			"url": "www.google.com"
		}
	],
	"onlineCourses": [
		{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": 2016,
		"url": "http://udacity.com"
		}
	],
	"display": function() {
		var educationArea = $('#education');
		
		for (var i = 0; i < this.schools.length; i++) {
			var school = this.schools[i];
			appendItem(educationArea, HTMLschoolStart, '');
			
			var educationEntry = $('.education-entry:last');

			appendItem(educationEntry, HTMLschoolName, school.name);
			appendItem(educationEntry, HTMLschoolDegree, school.degree);
			appendItem(educationEntry, HTMLschoolDates, school.dates);
			appendItem(educationEntry, HTMLschoolLocation, school.location);
			appendArray(educationEntry, HTMLschoolMajor, school.majors);
		}
		
		appendItem(educationArea, HTMLonlineClasses, '');
				
		for (var i = 0; i < this.onlineCourses.length; i++) {
			var course = this.onlineCourses[i];
			appendItem(educationArea, HTMLschoolStart, '');
			
			var educationEntry = $('.education-entry:last');
			
			appendItem(educationEntry, HTMLonlineTitle, course.title);
			appendItem(educationEntry, HTMLonlineSchool, course.school);
			appendItem(educationEntry, HTMLonlineDates, course.date);
			appendItem(educationEntry, HTMLonlineURL, course.url);
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "Self Employed",
			"title": "Abysswalker",
			"location": "New Zealand, Auckland",
			"dates": "1991-present",
			"description": "Remaining a statue till someone passes by"
		}
	],
	"display": function () {
		var workArea = $('#workExperience');
		
		for (var i = 0; i < this.jobs.length; i++ ) {
			var job = this.jobs[i];
			appendItem(workArea, HTMLworkStart, '');
			
			var jobEntry = $('.work-entry:last');
			appendTwoItems(jobEntry, HTMLworkEmployer, job.employer,
				HTMLworkTitle, job.title);
			appendItem(jobEntry, HTMLworkDates, job.dates);
			appendItem(jobEntry, HTMLworkLocation, job.location);
			appendItem(jobEntry, HTMLworkDescription, job.description);
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Statue",
			"dates": "1990-present",
			"description": "Standing still",
			"images": [
				"images/artoriasIcon.png"
			]
		}
	],
	"display": function () {
		var projectArea = $('#projects');
				
		for (var i = 0; i < this.projects.length; i++ ) {
			var project = this.projects[i];
			appendItem(projectArea, HTMLprojectStart, '');

			var projectEntry = $('.project-entry:last');
			appendItem(projectEntry, HTMLprojectTitle, project.title);
			appendItem(projectEntry, HTMLprojectDates, project.dates);
			appendItem(projectEntry, HTMLprojectDescription, project.description);
			appendArray(projectEntry, HTMLprojectImage, project.images);
		}
	}
}

/*
 * These functions are meant to simplify the append and prepend process, or at 
 * least make the code a heck of a lot cleaner.
 */

var appendItem = function (element, helper, item) {
	var formattedItem = helper.replace("%data%", item);
	element.append(formattedItem);
}

var appendTwoItems = function (element, helper1, item1, helper2, item2) {
	var formattedItem1 = helper1.replace("%data%", item1);
	var formattedItem2 = helper2.replace("%data%", item2);
	element.append(formattedItem1 + formattedItem2);
}

var appendArray = function (element, helper, items) {
	for (var i = 0; i < items.length; i++) {
		appendItem(element, helper, items[i]);
	}
}

var prependItem = function (element, helper, item) {
	var formattedItem = helper.replace("%data%", item);
	element.prepend(formattedItem);
}

/*
 * Result of clicking on internationalize button.
 */
function inName() {
	var nameParts = bio.name.split(" ");
	nameParts[0] = nameParts[0].slice(0,1).toUpperCase() + nameParts[0].slice(1).toLowerCase();
	nameParts[1] = nameParts[1].toUpperCase();
	var internationalName = nameParts.join(" ");
	
	return internationalName;
}


/*
 * With each object having its own display function, call them all to get the 
 * data up on the screen.
 */

function displayAll() {
	bio.display();
	work.display();
	education.display();
	projects.display();
	
	// Display Internationalize Button
	$('#main').append(internationalizeButton);
	// Display Google Map
	$("#mapDiv").append(googleMap);
}

displayAll();
