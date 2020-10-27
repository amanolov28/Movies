import commonHandler from './commonHandler.js'
import detailsModul from '../Moduls/detailsModul.js'
import likeModul from '../Moduls/likeModul.js'
import deleteModul from '../Moduls/deleteModul.js'
import notifyHandler from './notifyHandler.js'
import redirectionHandler from './redirectionHandler.js'

export default async function detailsHandler() {
    this.username = localStorage.getItem('username')
    this.token = localStorage.getItem('token')
    this.hash = window.location.hash
    this.movieId = this.hash.substr(this.hash.indexOf('-'))

    this.movie = await detailsModul(this.movieId, this.token)
    console.log(this.movie);
    if (typeof this.movie.likes !== 'object') {
        this.movie.likes = []
    }
    
    this.isCreator = this.username === this.movie.creator
    this.likedMovie = this.movie.likes.includes(this.username)
    this.numberOfLikes = this.movie.likes.length - 1
    await commonHandler.call(this, '../Views/Movies/details.hbs')

    if (!this.isCreator) {
        const like = document.getElementsByTagName('a')[3]

        like.addEventListener('click', async (e) => {
            e.preventDefault()
            notifyHandler(null, 'loadingBox')

            this.movie.likes.push(this.username)
            await likeModul(this.movieId, this.movie.likes, this.token, this.username)
                .then(async () => {
                    this.likedMovie = true
                    this.numberOfLikes++
                    await commonHandler.call(this, '../Views/Movies/details.hbs')
                    notifyHandler('Liked successfully', 'successBox')
                })
        })
    } else {
        let deleteBut = document.querySelector('.btn')

        deleteBut.addEventListener('click', async (e) => {
            e.preventDefault()
            notifyHandler(null, 'loadingBox')
            await deleteModul(this.movieId, this.token)
                .then(() => notifyHandler('Deleted successfully', 'successBox'))
            redirectionHandler.call(this, '#/')

        })
    }
}