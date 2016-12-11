var bio = {
    "name": "BELPHY",
    "role": "Web Developer",
    "contacts": {
        "mobile": "- 9008007001",
        "email": "- belphy16@gmail.com",
        "github": "-belphy16",
        "location": "-kerala"
    },
    "welcomeMessage": "Miles to go before I sleep",
    "skills": ["learner", "Team player", "adaptability", "programming", "leadership"],
    "biopic": "images/download.jpg"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#header').append(formattedBioPic);
    $('#topContacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#footerContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#footerContacts').append(formattedGithub);
    $('#header').append(formattedWelcomeMsg);
    $('#footerContacts').append(formattedLocation);
    $('#topContacts').append(formattedLocation);

    //if (bio.skills.length > 0) {
    //var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skills) {
        //console.log(skills);
        var formattedSkill = HTMLskills.replace("%data%", skills);
        $("#skills").append(formattedSkill);
    });
};

bio.display();

var education = {
    "schools": [{
        "name": "Sahrdaya College Of Engineering",
        "degree": "Bachelor of Technology",
        "dates": "2016",
        "location": "kodakara,kerala",
        "majors": "Electronics And Communication",
        "link": "http://sahrdaya.in/",
    }, {
        "name": "Emmanuel's H.S.S",
        "degree": "Higher Secondary",
        "dates": "2011",
        "location": "kothanalloor,kerala",
        "majors": "Biology-Maths",
        "link": "http://.nic.in/",
    }],
    "courses": [{
        "title": "Front-End Web Developer, Naanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://udacity.com",
    }]
};

education.display = function() {
    for (school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].link) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));

        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
    }
    $("#education").append(HTMLonlineClasses);
    for (course = 0; course < education.courses.length; course++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.courses[course].title).replace("#", education.courses[course].URL) + HTMLonlineSchool.replace("%data%", education.courses[course].school));

        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.courses[course].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.courses[course].url));
    }

};
education.display();

//$("#main").prepend(education);

var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "Systems Engineer",
        "dates": "January 2017 - Future",
        "description": "As a Systems Engineer",
        "location": "Mysore"
    }, {
        "employer": "Air-force",
        "title": "Technical Engineer",
        "dates": "2017-future",
        "description": "As a Technical Engineer",
        "location": "Delhi"
    }]
};
//$("#main").prepend(work);
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedworkDates + formattedworkLocation + formattedworkDescription;
        $(".work-entry:last").append(formattedEmployerTitle);

    });
};
work.display();


var projects = {
    "projects": [{
        "title": "Gesture controlled robot",
        "dates": "2014",
        "description": "arduino based programming",
        "images": ["images/3.jpg"]


    }, {
        "title": "Self stabilising platform",
        "dates": " 2015",
        "description": "Embedded system",
        "images": ["images/2.jpg"]
    }, {
        "title": "Automatic accident rescue system",
        "dates": "2016",
        "description": "Embedded platform with many technologies incorporated",
        "images": ["images/4.jpg"]


    }]
};
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedprojectDescription);
        project.images.forEach(function(image){
           var formattedprojectImage = HTMLprojectImage.replace("%data%", image);
           $(".project-entry:last").append(formattedprojectImage);
       });
   });
};
projects.display();
$("#mapDiv").append(googleMap);
