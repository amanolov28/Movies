import commonHandler from './commonHandler.js'
import editModul from '../Moduls/editModul.js'
import notifyHandler from './notifyHandler.js'
import detailsModul from '../Moduls/detailsModul.js'
import redirectionHandler from './redirectionHandler.js'

export default async function editHandler() {

    this.username = sessionStorage.getItem('username')
    this.movieId = sessionStorage.getItem('movieId')
    this.token = sessionStorage.getItem('token')

    this.movie = await detailsModul(this.movieId, this.token)
    await commonHandler.call(this, '../Views/Movies/edit.hbs')

    const form = document.getElementsByTagName('form')[0]

    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        notifyHandler(null, 'loadingBox')
        
        editModul(form, this.movieId, this.token)
            .then(() => notifyHandler('Eddited successfully', 'successBox'))
        redirectionHandler.call(this, '#/')

    })
}