document.onload = (() => {
    $('.nav-item').on('click', (e) => {
        if(!$(e.target).parent().hasClass('contact')) {
            $(e.target).parent().siblings().removeClass('active')
            $(e.target).parent().addClass('active')
        }
    })
})()