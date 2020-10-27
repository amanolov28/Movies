import commonHandler from './commonHandler.js'
import homeModul from '../Moduls/homeModul.js'

export default async function homeHandler() {

    this.username = localStorage.getItem('username')
    this.token = localStorage.getItem('token')

    if (this.username && this.token) {

        // get all movies
        this.movies = await homeModul(this.token);
        this.movies = Object.keys(this.movies).map(obj => {
            this.movies[obj].id = obj
            return this.movies[obj]
        })

    }

    await commonHandler.call(this, '../Views/Movies/home.hbs')

    if (this.username && this.token) {    
        let form = document.getElementsByTagName('form')[0]

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let input = document.querySelector('form input')
            let regexp = new RegExp(input.value, 'i')
            this.movies = this.movies.filter(obj => regexp.test(obj.title))
            commonHandler.call(this, '../Views/Movies/home.hbs')
        })
    }

}