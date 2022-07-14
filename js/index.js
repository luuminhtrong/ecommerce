var menumb = document.querySelector('#mb-menu-toggle')

var offmenumb = document.querySelector('#mb-menu-close')

var btnView = document.querySelector('.btn-view-description')


menumb.addEventListener('click', () => {
    document.querySelector('.header-wrapper').classList.add('active')
})

offmenumb.addEventListener('click', () => {
    document.querySelector('.header-wrapper').classList.remove('active')
})


btnView.addEventListener('click', () => {
    let content = document.querySelector('.box-detail-description-content')
    content.classList.toggle('active')
    document.getElementById('view-all-description').innerHTML = content.classList.contains('active') ? 'view less' : 'view all'
})
