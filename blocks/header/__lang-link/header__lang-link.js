document.addEventListener('DOMContentLoaded', function(){
    const langLinks = document.querySelectorAll('.header__lang-link')

    langLinks.forEach(langLink => {
        langLink.addEventListener('click', function() {
            langLinks.forEach(l => {
                l.style.textDecoration = 'none'
            })

            this.style.textDecoration = 'underline'
        })
    })
})