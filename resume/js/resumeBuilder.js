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

var nav = {
    links: [
        {
            name: "work experience",
            id: "work-nav",
            href: "#workExperience"
        },
        {
            name: "education",
            id: "education-nav",
            href: "#education"
        },
        {
            name: "projects",
            id: "projects-nav",
            href: "#projects"
        },
        {
            name: "map",
            id: "map-nav",
            href: "#mapDiv"
        },
        {
            name: "contacts",
            id: "contacts-nav",
            href: "#letsConnect"
        }
    ]
};

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
            images: ["images/portfolio.jpg"],
            website:"https://momojunzi.github.io/portfolio/"
        },
        {
            title: "Animal Trading Card",
            dates: "May 2016",
            description: "A project in CSS.",
            images: ["images/animalcard.jpg"],
            website: "https://momojunzi.github.io/animalcard/"
        },
        {
            title: "Responsive Blog",
            dates: "May 2016",
            description: "A responsive site",
            images:["images/responsiveblog.jpg"],
            website: "https://momojunzi.github.io/responsiveblog/"
        },
        {
            title: "Piano",
            dates: "May 2016",
            description: "A playable Piano",
            images:["images/piano.jpg"],
            website: "https://momojunzi.github.io/wavepad/"
        },
        {
            title: "John Henry",
            dates: "May 2016",
            description: "John Henry's favorite site",
            images:["images/fry5.jpg"],
            website: "#"
        }
    ]
};

var bio = {
    name: "Mark Holthaus",
    role: "Frontend Web Developer",
    welcome_message: "Eventually we all have go out on a limb and take a ride on the rhino.",
    contacts: {
        mobile: "415-290-4860",
        email: "mark.holthaus@gmail.com",
        github: "momojunzi",
        location: "Berkeley, CA"
    },
    image: "images/luke.png",
    skills: ["Javascript", "HTML", "CSS"]
};

var education = {
    schools: [
        {
            name: "American College of Traditional Chinese Medicine",
            location: "San Francisco, CA",
            degree: "M.S. Traditional Chinese Medicine",
            major: "Traditional Chinese Medicine",
            dates: "2003 - 2007",
            website: "http://www.actcm.edu/"
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
        website: "https://www.udacity.com/"
    },
    {
        title: "Frontend Web Developer Nanodegree: CSS syntax",
        school: "Udacity",
        dates: "May 2016",
        website: "https://www.udacity.com/"
    },
    {
        title: "Frontend Web Developer Nanodegree: Intro to HTML and CSS",
        school: "Udacity",
        dates: "May 2016",
        website: "https://www.udacity.com/"
    },
    {
        title: "Frontend Web Developer Nanodegree: Responsive Web Design Fundamentals",
        school: "Udacity",
        dates: "May 2016",
        website: "https://www.udacity.com/"
    },
    {
        title: "Frontend Web Developer Nanodegree: Responsive Images",
        school: "Udacity",
        dates: "May 2016",
        website: "https://www.udacity.com/"
    }
]};

var contacts = {
    email: "mark.holthaus@gmail.com",
    mobile: "415-290-4860",
    github: "momojunzi",
    location: "Berkeley, CA"
};

bio.displayBio = function() {
    var formatted_image = HTMLbioPic.replace("%data%", bio.image);
    var formatted_name = HTMLheaderName.replace("%data%", bio.name);
    var formatted_role = HTMLheaderRole.replace("%data%", bio.role);
    var formatted_message = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
    var formatted_skills;

    $("#header-img-div").append(formatted_image);
    $("#name-role").append(formatted_name).append(formatted_role);
    $(".welcome-message").append(formatted_message);
    if(bio.skills.length > 0) {
        $("#skills-div").append(HTMLskillsStart);
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

nav.displayNav = function(){
    for(link in nav.links){
        var formatted_nav = HTMLheaderNav.replace("%data%", nav.links[link].name).replace("%id%", nav.links[link].id).replace("#", nav.links[link].href);
        $("#header-nav-bar").append(formatted_nav);
    }
};

nav.displayNav();

work.displayWork = function(){
    for(job in work.jobs) {
        $("#work-div").append(HTMLworkStart);
        var formatted_employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer );
        var formatted_title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formatted_location = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formatted_work_dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formatted_work_description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formatted_employer + formatted_title + formatted_location + formatted_work_dates + formatted_work_description);
    }
   /* var tab = document.createElement('div');
    $("#workExperience").append(tab);
    $(tab).css("height", "20px").css("background-color", "red").addClass("nav-tab").attr("id", "work-tab");*/
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
   /* var displayArray = projects.project.slice(0,3);*/
    var displayArray;
    var small = window.matchMedia("screen and (max-width: 599px)");
    small.addListener(smallMedia);
    smallMedia(small);
    var medium = window.matchMedia("screen and (min-width: 600px) and (max-width: 899px)");
    medium.addListener(mediumMedia);
    mediumMedia(medium);
    var large = window.matchMedia("screen and (min-width: 900px");
    large.addListener(largeMedia);
    largeMedia(large);
    function smallMedia(small) {
        if (small.matches) {
            displayArray = projects.project.slice(0, 1);
            $("#project-div").children().remove();
            renderArray();
        }
    }
    function mediumMedia(medium){
        if (medium.matches){
            displayArray = projects.project.slice(0,2);
            $("#project-div").children().remove();
            renderArray();
        }
    }
    function largeMedia(large) {
        if (large.matches){
            displayArray = projects.project.slice(0,3);
            $("#project-div").children().remove();
            renderArray();
        }
    }
    function renderArray(){
        for(proj in displayArray) {
            $("#project-div").append(HTMLprojectStart);
            var formatted_title = HTMLprojectTitle.replace("%data%", displayArray[proj].title).replace("#", displayArray[proj].website);
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
    }
    /*for(proj in displayArray) {
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
    }*/
};
projects.display();

projects.carousel = function() {
    $("#left-button").click(function(){
        /**/
        setTimeout(function(){
            $('.project-entry:first-child').animate({opacity: '0'}, 250);
            $('.project-entry').animate({right: '372px'}, 250);
            var firstArrayElement = projects.project.shift();
            projects.project.push(firstArrayElement);
            setTimeout(function(){
                $("#project-div").children().remove();
                projects.display();
                $('.project-entry:last-child').css("opacity", "0.0");
                $(".project-entry:last-child").animate({opacity: 1},250);
            },250);
        }, 250);


        /*var firstArrayElement = projects.project.shift();
        projects.project.push(firstArrayElement);
        /*console.log(carouselImages.image);*/
        /*$("#project-div").children().remove();
        projects.display();*/
    });
    $("#right-button").click(function(){

        setTimeout(function(){
            $('.project-entry:last-child').animate({opacity: '0'}, 250);
            $('.project-entry').animate({left: '372px'}, 250);
            var firstArrayElement = projects.project.pop();
            projects.project.unshift(firstArrayElement);
            setTimeout(function(){
                $("#project-div").children().remove();
                projects.display();
                $('.project-entry:first-child').css("opacity", "0.0");
                $(".project-entry:first-child").animate({opacity: 1},250);
            },250);
        }, 250);



        /*var firstArrayElement = projects.project.pop();
        projects.project.unshift(firstArrayElement);
        $("#project-div").children().remove();
        projects.display();*/
    });
};
projects.carousel();

education.displayEducation = function(){
    for (school in education.schools) {
        $("#education-div").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#",  education.schools[school].website);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolName + formattedMajor + formattedDegree + formattedLocation + formattedDate);

        //$(".schoolname").attr("href", education.schools[school].website);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        var formattedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].website);
        var formattedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedonlinedate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].website).replace("#", education.onlineCourses[course].website);
        $(".education-entry:last").append(formattedtitle + formattedschool + formattedonlinedate);
    }
};

education.displayEducation();


contacts.displayContacts = function(){
    var formattedemail = HTMLemail.replace("%data%", contacts.email).replace("#", "mailto:mark.holthaus@gmail.com");
    var formattedmobile = HTMLmobile.replace("%data%", contacts.mobile);
    var formattedgithub = HTMLgithub.replace("%data%", contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", contacts.location);
    $("#footerContacts").append(formattedemail + formattedmobile + formattedgithub + formattedlocation);
};

contacts.displayContacts();

/*$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    name[1]= name[1].toUpperCase();
    name[0]= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}*/


$("#mapDiv").append(googleMap);

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

/*nav.openSection = function(){
    $("#work-nav").click(function(){
        $("#workExperience").css("display", "block").css("opacity", 100);

        $("#work-tab").css("display", "block");
    });
    $("#work-tab").click(function(){
        $("#workExperience").css("display", "none");
        $("#work-tab").css("display", "none");
    });

    $("#projects-nav").click(function(){
        $("#projects").css("display", "block");
        $("#projects-tab").css("display", "block");
    });
    $("#projects-tab").click(function() {
        $("#projects").css("display", "none");
        $("#projects-tab").css("display", "none");
    });

    $("#education-nav").click(function(){
        $("#education").css("display", "block");
        $("#education-tab").css("display", "block");
    });
    $("#education-tab").click(function() {
        $("#education").css("display", "none");
        $("#education-tab").css("display", "none");
    });

    $("#map-nav").click(function(){
        $("#mapDiv").css("display", "block");
        $("#map-tab").css("display", "block");
    });
    $("#map-tab").click(function() {
        $("#mapDiv").css("display", "none");
        $("#map-tab").css("display", "none");
    });

    $("#contacts-nav").click(function(){
        $("#letsConnect").css("display", "block");
        $("#contacts-tab").css("display", "block");
    });
    $("#contacts-tab").click(function() {
        $("#letsConnect").css("display", "none");
        $("#contacts-tab").css("display", "none");
    });
};

nav.openSection();*/