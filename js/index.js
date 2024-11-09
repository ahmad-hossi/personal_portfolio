let projectsList = [];
document.onload = (() => {
    $('.nav-item').on('click', (e) => {
        if(!$(e.target).parent().hasClass('contact')) {
            $(e.target).parent().siblings().removeClass('active')
            $(e.target).parent().addClass('active')
        }
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
    $(document).on('click', '#projects .projects-parent .project', (e)=> {
        id = $(e.target).parent().parent().data().id;
        project = projectsList.find(proj => proj.id == id);
        document.getElementById('project-modal').show()
        // 
        // data-bs-toggle="modal"
        // data-bs-target=""
    })

    
    $.ajax({
        url: "./../data/projects.json",
    }).done(function(data) {
        projectsList = data;
        for(let i = 0; i < 8; i++) {
            if(data[i]) appendProject(data[i])  
        }
        $('#projects .projects-parent .project').show(600)
    });
})()

const appendProject = (project) => {
    $('.projects-parent').append(`
        <div 
            style="display:none"
            data-id="${project.id}"
            class="text-center col-12 col-md-6 col-lg-4 col-xl-3 mb-3 px-3 project">
                <span class="p-2 border d-inline-block">
                    <img src="${project.imagePath}" width="240" height="240" alt="" />
                </span>
        </div>`)
}