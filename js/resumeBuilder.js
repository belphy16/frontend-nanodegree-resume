var bio = {
    "name" : "BELPHY",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "9008007001",
        "email" : "belphy16@gmail.com",
        "github" : "belphy16",
        "location" : "kerala"
    },
    "welcomeMessage" : "Miles to go before I sleep",
    "skills" : ["learner", "Team player", "adaptability", "programming","leadership"],
    "bioPic" : "images/download.jpg"
};

bio.display = function() {

var formattedName = HTMLheaderName.replace("%data%" , bio.name);
var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%" , bio.bioPic);
var formattedMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%" , bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%" , bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%" , bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%" , bio.welcomeMessage);


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
        "schoolName": "Sahrdaya College Of Engineering",
        "schoolDegree": "Bachelor of Technology",
        "schoolDates": "2016",
        "location": "kodakara,kerala",
        "schoolMajor": "Electronics And Communication",
        "link": "http://sahrdaya.in/",
    }, {
        "schoolName": "Emmanuel's H.S.S",
        "schoolDegree": "Higher Secondary",
        "schoolDates": "2011",
        "location": "kothanalloor,kerala",
        "schoolMajor": "Biology-Maths",
        "link": "http://.nic.in/",
    }],
    "courses": [{
        "onlineTitle": "Front-End Web Developer, Naanodegree",
        "onlineSchool": "Udacity",
        "onlineDates": "2016",
        "onlineURL": "http://udacity.com",
    }]
};

education.display = function() {
    for (school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].schoolName).replace("#", education.schools[school].link) + HTMLschoolDegree.replace("%data%", education.schools[school].schoolDegree));

        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].schoolDates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].schoolMajor));
    }
    $("#education").append(HTMLonlineClasses);
    for (course = 0; course < education.courses.length; course++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.courses[course].onlineTitle).replace("#", education.courses[course].onlineURL) + HTMLonlineSchool.replace("%data%", education.courses[course].onlineSchool));

        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.courses[course].onlineDates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.courses[course].onlineURL));
    }

};
education.display();

//$("#main").prepend(education);

var work = {
    "jobs" : [
        {
            "employer" : "Infosys",
            "title" : "Systems Engineer",
            "dates" : "January 2017 - Future",
            "description" : "As a Systems Engineer",
            "location" : "Mysore"
        },
        {
            "employer" : "Air-force",
            "title" : "Technical Engineer",
            "dates" : "2017-future",
            "description" : "As a Technical Engineer",
            "location" : "Delhi"
        }
    ]
}
//$("#main").prepend(work);
for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

//var formattedWorkStart = HTMLworkStart.replace("%data%" , work.jobs);
//$("#main").append(formattedWorkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
//$("#main").append(formattedWorkEmployer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
//$("#main").append(formattedWorkTitle);
var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
$(".work-entry:last").append(formattedWorkEmployerTitle);

var formattedWorkDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
$(".work-entry:last").append(formattedWorkDates);
var formattedWorkDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
$(".work-entry:last").append(formattedWorkDescription);
var formattedWorkLocation = HTMLworkLocation.replace("%data%" , work.jobs[job].location);
$(".location-text:last").append(formattedWorkLocation);
}

var projects = {
  "projects": [
    {
      "title" : "Gesture controlled robot",
      "dates" : "2014",
      "description" : "arduino based programming",
      "images" : [
      "http://placehold.it/350x150", "http://placehold.it/350x150"
      ]
    },
    {
      "title" : "Self stabilising platform",
      "dates" : " 2015",
      "description" : "Embedded system",
      "images" : [ "http://placehold.it/350x150", "http://placehold.it/350x150"
      ]
    },
    {
      "title" : "Automatic accident rescue system",
      "dates" : "2016",
      "description" : "Embedded platform with many technologies incorporated",
      "images" : [
      "http://placehold.it/350x150", "http://placehold.it/350x150"
      ]
    }
  ]
};
projects.display = function(){
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length >0 ) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    };
  }
};
projects.display()
