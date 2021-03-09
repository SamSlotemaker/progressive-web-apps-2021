//handle form submit on radiobutton change
const genreButtons = document.querySelectorAll("main section>form>input")
genreButtons.forEach(button => {
    button.addEventListener('change', function () {
        this.form.submit()
    })
})