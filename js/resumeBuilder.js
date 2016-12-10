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
    "bioPic": "images/download.jpg"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
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
    "jobs": [{
        "employer": "Infosys",
        "title": "Systems Engineer",
        "datesWorked": "January 2017 - Future",
        "description": "As a Systems Engineer",
        "location": "Mysore"
    }, {
        "employer": "Air-force",
        "title": "Technical Engineer",
        "datesWorked": "2017-future",
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
        "images": "images/3.jpg"


    }, {
        "title": "Self stabilising platform",
        "dates": " 2015",
        "description": "Embedded system",
        "images": "images/2.jpg"
    }, {
        "title": "Automatic accident rescue system",
        "dates": "2016",
        "description": "Embedded platform with many technologies incorporated",
        "images": "images/4.jpg"


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
        if (project.images.length > 0) {
            var formattedprojectimage = HTMLprojectImage.replace("%data%", project.images);
            $(".project-entry:last").append(formattedprojectimage);
        }
    });
};
projects.display();
