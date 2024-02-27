// NAME: VRUNDKUMAR PATEL, JAIVIK CHAHUHAN, RAJ PATEL
// STUDENT ID: 100863346, 100872237, 100855206
// DATE: 27 JANUARY, 2024

"use strict";


if (window.location !== "index.html") {
    document.body.style.backgroundImage = 'url(bgContent/bgImage.jpg)'
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
}


// Function to generate the footer content
function generateFooter() {
    // Get the footer container by id
    const footerContainer = document.getElementById('footerContainer');

    // Create a footer navigation structure
    const footerNav = document.createElement('nav');
    footerNav.classList.add('navbar', 'navbar-expand-lg');

    // Create a collapse div
    const collapseDiv = document.createElement('div');
    collapseDiv.classList.add('collapse', 'navbar-collapse');
    collapseDiv.id = 'footerNavbar';

    // Create an unordered list for the navigation links
    const navList = document.createElement('ul');
    navList.classList.add('navbar-nav');

    // Create individual list items and links
    const privacyPolicyLink = createFooterLink('Privacy Policy', 'privacyPolicy.html');
    const termsOfServiceLink = createFooterLink('Terms of Service', 'termsofServices.html');
    const contactLink = createFooterLink('Contact', 'contact.html');

    // Append the links to the list
    navList.appendChild(privacyPolicyLink);
    navList.appendChild(termsOfServiceLink);
    navList.appendChild(contactLink);

    // Append the list to the collapse div
    collapseDiv.appendChild(navList);

    // Append the collapse div to the footer navigation
    footerNav.appendChild(collapseDiv);

    // Append the footer navigation to the footer container
    footerContainer.appendChild(footerNav);
}

// Function to create individual footer links
function createFooterLink(text, link) {
    const navItem = document.createElement('li');
    navItem.classList.add('nav-item');

    const navLink = document.createElement('a');
    navLink.classList.add('nav-link');
    navLink.href = link;
    navLink.textContent = text;


    navItem.appendChild(navLink);

    return navItem;
}

// Call the function to generate the footer when the page loads
window.onload = function() {
    generateFooter();
};

function pageRedirection() {
    let timeLeft = 5;

    // Close the modal
    $('#contactModal').modal('hide');

    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

    let messageBox = document.createElement('div');
    messageBox.id = 'messageBox';
    document.body.appendChild(messageBox);

    let countdownParagraph = document.createElement('p');
    messageBox.appendChild(countdownParagraph);

    let downloadTimer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            window.location.href = "index.html";
        } else {
            countdownParagraph.textContent = `Thank you for contacting us.\n${timeLeft} seconds remaining`;

            // Show overlay and messageBox
            overlay.style.display = 'block';
            messageBox.style.display = 'block';
        }
        timeLeft -= 1;
    }, 1000);
}



//IIFE - Immediately Invoked Functional Expression
(function (){

    function CheckLogin(){

        console.log("login checked")
        if(sessionStorage.getItem("user")){
            $("#login").html(`<a id="logout" class="nav-link" href="#"> Logout</a>`)

        }
        $("#logout").on("click", function (){
            sessionStorage.clear();
            location.href = "login.html";
        });
    }

    function LoadHeader(html_data){

        console.log("load header");
        $("header").html(html_data);
        $(`li>a:contains(${document.title})`).addClass("active").attr("aria-current", "page");
        $(``)
        CheckLogin();
    }
    function AjaxRequest(method, url, callback){

        //Step1: instantiate new XHR object
        let xhr = new XMLHttpRequest();

        //Step2: open XHR request
        xhr.open(method, url);

        //Step4: Add event listener for the readystatechange event
        // the readystatechange event is triggered when the state of a document being fetched changes
        xhr.addEventListener("readystatechange", () => {

            if(xhr.readyState === 4 && xhr.status === 200){

                if(typeof callback == "function"){
                    callback(xhr.responseText);
                }else{
                    console.error("ERROR: callback not a function");
                }
            }
        });

        //Step3: send XHR Request
        xhr.send();
    }



    function DisplayHomePage(){
        console.log("Called DisplayHomePage")



    }
    function DisplayPortfolioPage(){
        console.log("Called DisplayPortfolioPage");

        // Creating dummy projects
        const projects = [
            {
                title: "Project 1: Event Calendar",
                description: "Displays upcoming classes, workshops, and community events hosted by Harmony Hub.",
                image: './bgContent/project1.jpg'
            },
            {
                title: "Project 2: Online Learning Platform",
                description: " Build an e-learning platform that offers online courses and resources related to technology, community service, and personal development.",
                image: "./bgContent/project2.jpg"
            },
            // Add more projects as needed
        ];

        // Function to generate more projects
        function generateProject(index) {
            return {
                title: `Project ${index + 1}`,
                description: `Description for Project ${index + 1}.`,
                image: `./bgContent/project${index + 1}.jpg`
            };
        }

        // Generate additional unique projects dynamically
        for (let i = projects.length; i < 10; i++) {
            projects.push(generateProject(i));
        }

        const projectContainer = document.getElementById('projects-container');
        const loadMoreBtn = document.getElementById('load-more-btn');
        let projectPerLoad = 1;
        let currentProject = projects.slice(0, projectPerLoad);

        function createProjectCard(project) {
            const card = document.createElement('div');
            card.classList.add('project-card');

            const title = document.createElement('h3');
            title.textContent = project.title;

            const description = document.createElement('p');
            description.textContent = project.description;

            const image = document.createElement('img');
            image.src = project.image;
            image.alt = project.title;
            image.style.width = '100%';

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(image);

            return card;
        }

        function displayProjects(projects) {
            projectContainer.innerHTML = '';
            projects.forEach(project => {
                const card = createProjectCard(project);
                projectContainer.appendChild(card);
            });
        }

        function loadMoreProjects() {
            projectPerLoad += 1;
            currentProject = projects.slice(0, projectPerLoad);
            displayProjects(currentProject);

            // Hide 'Load More' button if all projects are displayed
            if (projectPerLoad >= projects.length) {
                loadMoreBtn.style.display = 'none';
            }
        }

        // Initial display
        displayProjects(currentProject);

        // Event listener for 'Load More' button
        loadMoreBtn.addEventListener('click', loadMoreProjects);

    }
    function DisplayServicesPage(){
        console.log("Called DisplayServicesPage");


    }
    function DisplayTeamPage(){
        console.log("Called DisplayTeamPage");

    }
    function DisplayBlogPage(){
        console.log("Called DisplayBlogPage");
    }
    function DisplayContactPage(){
        console.log("Called DisplayContactPage");

        let sendButton = document.getElementById("sendButton")
        sendButton.addEventListener("click", function () {


            const fullName = document.getElementById('fullName').value;
            const emailAddress = document.getElementById('emailAddress').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Validate form inputs
            if (fullName !== "" || emailAddress !== "" || subject !== "" || message !== "") {

                const modalTable =
                    `<div>
                        <table>
                            <tbody>
                            <tr>
                                <th scope="row">Name</th>
                                <td>${fullName}</td>
                            </tr>
                            <tr>
                                <th scope="row">Email Address</th>
                                <td>${emailAddress}</td>
                            </tr>
                            <tr>
                                <th scope="row">Subject</th>
                                <td>${subject}</td>
                            </tr>
                            <tr>
                                <th scope="row">Message</th>
                                <td>${message}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>`;

                document.getElementById('modalContent').innerHTML = modalTable;


                $('#contactModal').modal('show');
            }
        });

    }

    function DisplayLoginPage(){
        console.log("Called DisplayLoginPage");

        let messageArea = $("#messageArea");
        messageArea.hide();

        $("#loginButton").on("click", function (){

            let success = false;
            let newUser = new core.User();

            $.get("./data/users.json", function (data){

                for(const user of data.users) {
                    //request succeeded
                    console.log(data.user);
                    if (username.value === user.Username && password.value === user.Password) {
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }


                if(success) {
                    sessionStorage.setItem("user", newUser.serialize());
                    messageArea.removeAttr("class").hide();
                    location.href = "feedback.html";
                }else{
                    $("#username").trigger("focus").trigger("select");
                    messageArea
                        .addClass("alert alert-danger")
                        .text("Error: Invalid Credentials")
                        .show();
                }

                $("#cancelButton").on("click", function (){
                    document.forms[0].reset();
                    location.href = "index.html"

                })

            })


        });


    }

    function DisplayCareersPage(){
        console.log("Called DisplayCareersPage");
    }

    function DisplayEventsPage() {
        console.log("Called DisplayEventsPage");

            // Create a new instance
            let xhr = new XMLHttpRequest();
            // GET-request for the 'events.json' file
            xhr.open('GET', './data/events.json', true);

            // function that is called when the request is completed
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // Success! Parse the JSON and display the events
                    let response = JSON.parse(xhr.responseText);
                    displayEvents(response.events);
                } else {
                    // We reached our target server, but it returned an error
                    console.error('Request failed with status:', xhr.status);
                }
            };

            xhr.onerror = function() {
                // There was a connection error of some sort
                console.error('Request failed due to a network error.');
            };

            xhr.send(); // Send the request to the server


        function displayEvents(events) {
            let eventsContainer = document.getElementById('events-container');

            // Loop through each event and add it to the HTML
            events.forEach(function(event) {
                let eventElement = document.createElement('div');
                eventElement.innerHTML = `
            <h2>${event.name}</h2>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>`;
                eventsContainer.appendChild(eventElement);
            });
        }

    }
    function DisplayGalleryPage() {
        console.log("Called DisplayGalleryPage")

        let slideIndexEvents = 1;
        showSlidesEvents(slideIndexEvents);

        window.openModalEvents = function() {
            document.getElementById("myModalEvents").style.display = "block";
        }

        window.closeModalEvents = function() {
            document.getElementById("myModalEvents").style.display = "none";
        }

        window.plusSlidesEvents = function(n) {
            showSlidesEvents(slideIndexEvents += n);
        }

        window.currentSlideEvents = function(n) {
            showSlidesEvents(slideIndexEvents = n);
        }

        function showSlidesEvents(n) {
            let i;
            let slidesEvents = document.getElementsByClassName("mySlidesEvents");
            let dotsEvents = document.getElementsByClassName("demoEvents");
            let captionTextEvents = document.getElementById("captionEvents");
            if (n > slidesEvents.length) {slideIndexEvents = 1}
            if (n < 1) {slideIndexEvents = slidesEvents.length}
            for (i = 0; i < slidesEvents.length; i++) {
                slidesEvents[i].style.display = "none";
            }
            for (i = 0; i < dotsEvents.length; i++) {
                dotsEvents[i].className = dotsEvents[i].className.replace(" active", "");
            }
            slidesEvents[slideIndexEvents-1].style.display = "block";
            dotsEvents[slideIndexEvents-1].className += " active";
            captionTextEvents.innerHTML = dotsEvents[slideIndexEvents-1].alt;
        }

        // This is to ensure the first slide is shown when the gallery page is displayed
        showSlidesEvents(slideIndexEvents);
    }

    function DisplayFeedbackPage(){

        let messageArea = $("#messageArea");

        let success = true;
        let newUser = new core.User();

        $.get("./data/users.json", function (data){

            for(const user of data.user) {
                //request succeeded
                console.log(data.user);

                if(success) {
                    sessionStorage.setItem("user", newUser.serialize());
                    let sessionUser = sessionStorage.getItem(user)
                    messageArea
                        .addClass("alert alert-danger")
                        .text(`Welcome, ${sessionUser}`)
                        .show()
                }
            }});
        let sendButton = document.getElementById("sendButton")
        sendButton.addEventListener("click", function () {
            pageRedirection();
        })

    }
    
    window.DisplayAPIApplicationPage = function () {
        // set endpoint and your API key
        let endpoint = 'convert';
        let access_key = 'c7dd946a95a3c05f6dc54cc1e23750e5';

        // define from currency, to currency, and amount
        let from = $("#currency1");
        let to = $("#currency2");
        let amount = $("#amount");
        let url = `https://api.exchangeratesapi.io/v1/${endpoint}?access_key=${access_key}&from=${from}&to=${to}&amount=${amount}`

        // execute the conversion using the "convert" endpoint:
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onload = function () {
            if(xhr.status >= 200 && xhr.status < 300){

                let response = JSON.parse(xhr.responseText);
                if(response.success === 200){
                    displayConversion(response);
                }else{
                    $("apiApplication").html(`<p>Failed: ${response.error.info}</p> `)
                }

            }else{
                console.error("The request failed!!");
                $("#apiApplication").html(`<p>Failed to retrieve the conversion you requested. Please try again.</p>`)

            }
        }
        xhr.send();
        function displayConversion(data){
            let displayCurrency = $("#apiApplication");
            displayCurrency.innerHTML=`<p>Conversion from ${data.query.from} to ${data.query.to} for amount ${data.query.to} is ${data.result} </p>`
        }
        // $.ajax({
        //
        //     dataType: `jsonp`,
        //     success: function(json) {
        //
        //         // access the conversion result in json.result
        //         alert(json.result);
        //
        //     }
        // });
    }



    function Start(){
        console.log("App Started");

        AjaxRequest("GET", "header.html", LoadHeader);


        switch (document.title){
            case "Harmony Hub":
                DisplayHomePage()
                break;
            case "Portfolio":
                DisplayPortfolioPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "Team":
                DisplayTeamPage();
                break;
            case "Blog":
                DisplayBlogPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
            case "Careers":
                DisplayCareersPage();
                break;
            case "Events":
                DisplayEventsPage();
                break;
            case "Gallery":
                DisplayGalleryPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
            case "Feedback":
                DisplayFeedbackPage();
                break;
            case "API Application":
                DisplayAPIApplicationPage();
                break;

        }
    }
    window.addEventListener("load", Start);



})();
