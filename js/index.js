let projectsList = [
    {
      "id": 1,
      "category": ["website", "dashboard"],
      "title": " I'm Here",
      "description": "A website that offers many services to suit all individuals using native HTML, Css and Javascript and control panel for managing a mobile application dedicated to a guide to stores in the city and displaying their details and offers as a SPA using Vue.js",
      "imagePath": "./images/projects/1.jpg",
      "link": "https://www.imhere-co.com/?fbclid=IwY2xjawGck0JleHRuA2FlbQIxMAABHSm3nxLzMB2wV7jq5W846vLTSTbKH7IJBBE1uTEChriHWB_nb223Sww3SA_aem_oYhWOcfns0I2ukoh3r83wA"
    },
    {
      "id": 2,
      "category": ["dashboard"],
      "title": "GetUp",
      "description": "A control panel for managing two mobile applications specialized in providing lessons to high school students and managing points of sale dedicated to selling lesson packages codes as a SPA using Vue.js.",
      "imagePath": "./images/projects/2.png",
      "link": "#"
    },
    {
      "id": 3,
      "category": ["website", "dashboard"],
      "title": "GoHexana",
      "description": "A platform where you can take an account generate unique code to your products for example and a lot of kinds of data platform containe admin panel, landing page and e-commerce app, this project build with Vue.js framework and Three.js Library as a SPA.",
      "imagePath": "./images/projects/3.jpeg",
      "link": "#"
    },
    {
      "id": 4,
      "category": ["librarie", "website"],
      "title": "A-V Datatable",
      "description": "A vue component built to make work with tables easer and faster, The main Idea of the component is to create collabsible, selection table, ability to interact with data and transform it as the programer want, the component uploaded to the NPM and github with fully documentation for the way of using it.",
      "imagePath": "./images/projects/4.jpeg",
      "link": "https://abdulaziz5h.github.io/a-v-datatable-docs/#/"
    },
    {
      "id": 5,
      "category": ["website"],
      "title": "CNC",
      "description": "A website to display designs that were printed using a CNC machine.",
      "imagePath": "./images/projects/5.jpeg",
      "link": "#"
    },
    {
      "id": 6,
      "category": ["dashboard"],
      "title": "FoxLearn Platform",
      "description": "An alternative platform for university education to study the state of automata and grammar models with their interactive tests.",
      "imagePath": "./images/projects/6.jpeg",
      "link": "#"
    },
    {
      "id": 7,
      "category": ["website", "dashboard"],
      "title": "ElType App",
      "description": "A web app where you can test your typing speed with another competitors depending on official competition app which built with Vue.js framework as a SPA, the app contain an admin panel with landing page where you can login with your unique code that you get from the organized company and you can test yourself and joining to the competitions.",
      "imagePath": "./images/projects/7.jpeg",
      "link": "#"
    },
    {
      "id": 8,
      "category": ["website", "dashboard"],
      "title": "Awija",
      "description": "A platform where you can take an account generate unique code to your products for example and a lot of kinds of data platform contain admin panel, landing page and e-commerce app, this project build with Vue.js framework and Three.js Library as a SPA.",
      "imagePath": "./images/projects/8.png",
      "link": "https://www.awijatinplate.com/"
    },
    {
      "id": 9,
      "category": ["website", "dashboard"],
      "title": "elCaptain",
      "description": "A dashboard to manage two mobile applications, the first for customers and the second for drivers, where drivers are located and tracked on a Google map and their status is known. Customers can order a taxi, the nearest taxi is suggested, and customers and drivers can be evaluated.",
      "imagePath": "./images/projects/9.png",
      "link": "#"
    },
    {
      "id": 10,
      "category": ["website", "dashboard"],
      "title": "Tarafoua",
      "description": "A control panel to manage two mobile applications specialized in serving university students, providing questions, exams courses, and points of sale that sell codes to students as a Vue.js.",
      "imagePath": "./images/projects/10.png",
      "link": "#"
    }
  ];
  const email_regex = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);

var myModal = new bootstrap.Modal($('#project-modal'), {});
document.onload = (() => {
    for(let i = 0; i < 8; i++) {
        if(projectsList[i]) appendProject(projectsList[i])  
    }
    $('#projects .projects-parent .project').show(600)
    $('.nav-item').on('click', (e) => {
          $(e.target).parent().siblings().removeClass('active')
          $(e.target).parent().addClass('active')
    })
    $('#projects .nav-item').on('click', (e) => {
        console.log()
        let _list = projectsList.filter(proj => {
            return proj.category.findIndex(cat => $(e.target).parent().data().category == cat) !== -1 || $(e.target).parent().data().category == 'all'
        })
        $('#projects .projects-parent .project').hide(300);
        setTimeout(() => {
            $('#projects .projects-parent').empty()
            for(let i = 0; i < 8; i++) {
                if(_list[i]) appendProject(_list[i])  
            }
            $('#projects .projects-parent .project').show(600)
        }, 300);
    })
    $(document).on('click', '#projects .projects-parent .project span', (e)=> {
        id = $(e.target).parent().parent().data().id;
        project = projectsList.find(proj => proj.id == id);
        myModal.show();
        $('#project-modal .modal-title').text(project.title)
        $('#project-modal .modal-body p').text(project.description)
        $('#project-modal .modal-body a').attr('href', project.link)
    })
    $("#send-message").on('click', (e) => {
        e.preventDefault();
        const form_value = {
            name: $('#contact-form input[name="name"]').val().trim(),
            email: $('#contact-form input[name="email"]').val().trim(),
            message: $('#contact-form textarea[name="message"]').val().trim(),
        }
        if(!form_value.name || !form_value.email || !email_regex.test(form_value.email)) {
            $('#danger-send-message').show(300)
            $('.required').show(200);
            $('.email_pattern').show(200);
        } else {
            $('#success-send-message').show(300)
            $('.required').hide();
            $('.email_pattern').hide()
            $('#contact-form input[name="name"]').val('')
            $('#contact-form input[name="email"]').val('')
            $('#contact-form textarea[name="message"]').val('')
        }
        setTimeout(() => {
            $('#success-send-message').hide(300)
            $('#danger-send-message').hide(300)
        }, 4000)
    })
})()

function appendProject(project) {
    $('.projects-parent').append(`
        <div 
            style="display:none"
            data-id="${project.id}"
            class="text-center col-12 col-md-6 col-lg-4 col-xl-3 mb-3 px-3 project">
            <span class="p-2 border d-inline-block">
                    <div class="overlay">
                    </div>
                    <i class="mdi mdi-eye-outline"></i>
                    <img src="${project.imagePath}" width="240" height="240" alt="" />
                </span>
        </div>`)
}