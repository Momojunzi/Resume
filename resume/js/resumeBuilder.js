/*var resolved_header_name = HTMLheaderName.replace("%data%", "Mark Holthaus");
$("#header").append(resolved_header_name);

var resolved_header_role = HTMLheaderRole.replace("%data%", "Front-end Web Developer");
$("#header").append(resolved_header_role);*/


/*var bio ={
    name: "Mark Holthaus",
    role: "Front-end Web Developer",
    contact: {
        email: "mark.holthaus@gmail.com",
        mobile: "415-290-4860"
    },
    picture: "images/fry.jpg",
    welcome: "Welcome to my resume",
    skills: ["Javascript", " HTML", " CSS"]
};

var work = {};
work.position = "Consumer Development Manager";
work.employer = "Penke TRuck Leasing";
work.years = 7;
work.city = "San Leandro, CA";

var education = {};
education["name"] = "American College of Traditional Chinese Medicine";
education["years"] = "2003-2007";
education["city"] = "San Francisco, CA";

var formatted_picture = HTMLbioPic.replace("%data%", bio.picture);
var formatted_role = HTMLheaderRole.replace("%data%", bio.role);
var formatted_name = HTMLheaderName.replace("%data%", bio.name);
var formatted_welcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formatted_skills1 = HTMLskills.replace("%data%", bio.skills[0]);
var formatted_skills2 = HTMLskills.replace("%data%", bio.skills[1]);
var formatted_skills3 = HTMLskills.replace("%data%", bio.skills[2]);
$("#header").append(formatted_picture, formatted_name, formatted_role, formatted_welcome, HTMLskillsStart, formatted_skills1, formatted_skills2,
formatted_skills3);

var formatted_phone = HTMLmobile.replace("%data%", bio.contact.mobile);
var formatted_email = HTMLemail.replace("%data%", bio.contact.email);
$("#topContacts").append(formatted_email, formatted_phone);

var formatted_position = HTMLworkTitle.replace("%data%", work.position);
var formatted_school = HTMLschoolName.replace("%data%", education.name);
$("#workExperience").append(formatted_position);
$("#education").append(formatted_school);*/


var work = {
     jobs: [
        {
            employer: "Penske Truck Leasing",
            title: "Consumer Development Manager",
            location: "San Leandro, CA",
            dates: "December 2015 - present",
            description: "In the role of Consumer Development Manager for Penske Truck Leasing I managed the general operations " +
            "of Penske agents in the Golden Gate district, closed under performing agents, and recruited new agents."
        },
        {
            employer: "Penske Truck Leasing",
            title: "Consumer Operations Manager",
            location: "San Leandro, CA",
            dates: "May 2012 - December 2015",
            description: "In the role of Consumer Operations Manager I managed the consumer fleet and inventory for the " +
            "Golden Gate district, oversaw the daily operations of Penske agents, and managed a small army of drivers " +
            "to move vehicles from location to location throughout the Bay Area."
        },
        {
            employer: "Penske Truck Leasing",
            title: "Rental Representative",
            location: "San Leandro, CA",
            dates: "January 2008 - May 2012",
            description: "As a Rental Rpresentative I conducted day to day operations at the rental counter for the San" +
            " Leandro and South San Francisco branches of Penske Truck Leasing."
        },
        {
            employer: "Self Employed",
            title: "Licensed Acupuncturist",
            location: "Berkeley, CA",
            dates: "January 2007 - January 2011",
            description: "As a Licensed Acupuncturist I Provided health care for patients with the paradigm of Traditional" +
            " Chinese Medicine using acupuncture, moxibustion, herbal medicine, and tui na massage."
        }
    ]
};

var projects = {
    project: [
        {
            title: "Portfolio Site",
            dates: "May 2016",
            description: "My Portfolio Site",
            images: ["images/fry1.jpg"]
        },
        {
            title: "Animal Trading Card",
            dates: "May 2016",
            description: "A project to display the use of CSS.",
            images: ["images/fry2.jpg"]
        },
        {
            title: "Responsive Blog",
            dates: "May 2016",
            description: "An example of a responsive site",
            images:["images/fry3.jpg"]
        },
        {
            title: "Piano",
            dates: "May 2016",
            description: "A playable Piano",
            images:["images/fry4.jpg"]
        },
        {
            title: "John Henry",
            dates: "May 2016",
            description: "John Henry's favorite site",
            images:["images/fry5.jpg"]
        }
    ]
};

var bio = {
    name: "Mark Holthaus",
    role: "Frontend Web Developer",
    welcome_message: "Thanks for Visiting my resume.",
    contacts: {
        mobile: "415-290-4860",
        email: "mark.holthaus@gmail.com",
        github: "momojunzi",
        location: "Berkeley, CA"
    },
    image: "images/fry.jpg",
    skills: ["Herbal Medicine", "Acupuncture", "Javascript", "HTML", "CSS"]
};

var education = {
    schools: [
        {
            name: "American College of Traditional Chinese Medicine",
            location: "San Francisco, CA",
            degree: "M.S. Traditional Chinese Medicine",
            major: "Traditional Chinese Medicine",
            dates: "2003 - 2007",
            website: "https://www.actcm.edu/"
        },
        {
            name: "University of Cincinnati",
            location: "Cincinnati, OH",
            degree: "B.A. Anthropology",
            major: "Anthropology",
            dates: "1995 - 2000",
            website: "http://www.uc.edu/"
        }
    ],
    onlineCourses: [
    {
        title: "Frontend Web Developer Nanodegree: HTML syntax",
        school: "Udacity",
        dates: "May 2016",
        website: ""
    },
    {
        title: "Frontend Web Developer Nanodegree: CSS syntax",
        school: "Udacity",
        dates: "May 2016",
        website: ""
    },
    {
        title: "Frontend Web Developer Nanodegree: Intro to HTML and CSS",
        school: "Udacity",
        dates: "May 2016",
        website: ""
    },
    {
        title: "Frontend Web Developer Nanodegree: Responsive Web Design Fundamentals",
        school: "Udacity",
        dates: "May 2016",
        website: ""
    },
    {
        title: "Frontend Web Developer Nanodegree: Responsive Images",
        school: "Udacity",
        dates: "May 2016",
        website: ""
    }
]};

bio.displayBio = function() {
    var formatted_image = HTMLbioPic.replace("%data%", bio.image);
    var formatted_name = HTMLheaderName.replace("%data%", bio.name);
    var formatted_role = HTMLheaderRole.replace("%data%", bio.role);
    var formatted_skills;
    $("#header").append(formatted_name).append(formatted_role).append(formatted_image);

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i=0; i<bio.skills.length; i++) {
            formatted_skills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formatted_skills);
        }
        /*formatted_skills = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formatted_skills);
        formatted_skills = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formatted_skills);
        formatted_skills = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formatted_skills);
        formatted_skills = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formatted_skills);
        formatted_skills = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formatted_skills);*/
    }
};
bio.displayBio();

work.displayWork = function(){
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formatted_employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer );
        var formatted_title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formatted_location = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formatted_work_dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formatted_work_description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formatted_employer + formatted_title + formatted_location + formatted_work_dates + formatted_work_description);
    }
};
work.displayWork();

/*projects.display = function() {
    for(proj in projects.project) {
        $("#project-div").append(HTMLprojectStart);
        var formatted_title = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
        var formatted_date = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
        var formatted_description = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
        if (projects.project[proj].images.length > 0) {
            for (image in projects.project[proj].images) {
                var formatted_images = HTMLprojectImage.replace("%data%", projects.project[proj].images[image]);
                $(".project-entry:last").append(formatted_images);
            }
        }
        $(".project-entry:last").append(formatted_title + formatted_date + formatted_description);
    }
};*/

projects.display = function() {
    var displayArray = projects.project.slice(0,3);
    for(proj in displayArray) {
        $("#project-div").append(HTMLprojectStart);
        var formatted_title = HTMLprojectTitle.replace("%data%", displayArray[proj].title);
        var formatted_date = HTMLprojectDates.replace("%data%", displayArray[proj].dates);
        var formatted_description = HTMLprojectDescription.replace("%data%", displayArray[proj].description);
        if (displayArray[proj].images.length > 0) {
            for (image in displayArray[proj].images) {
                var formatted_images = HTMLprojectImage.replace("%data%", displayArray[proj].images[image]);
                $(".project-entry:last").append(formatted_images);
            }
        }
        $(".project-entry:last").append(formatted_title + formatted_date + formatted_description);
    }
};
projects.display();

projects.carousel = function() {
    $("#left-button").click(function(){
        var firstArrayElement = projects.project.shift();
        projects.project.push(firstArrayElement);
        /*console.log(carouselImages.image);*/
        $("#project-div").children().remove();
        projects.display();
    });
    $("#right-button").click(function(){
        var firstArrayElement = projects.project.pop();
        projects.project.unshift(firstArrayElement);
        /*console.log(carouselImages.image);*/
        $("#project-div").children().remove();
        projects.display();
    });
};
projects.carousel();

$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    name[1]= name[1].toUpperCase();
    name[0]= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}

$("#mapDiv").append(googleMap);