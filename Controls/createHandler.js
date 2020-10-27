import commonHandler from './commonHandler.js'
import createModul from '../Moduls/createModul.js'
import notifyHandler from './notifyHandler.js'
import redirectionHandler from './redirectionHandler.js'

export default async function createTrek() {
    this.username = localStorage.getItem('username')
    this.token = localStorage.getItem('token')
    await commonHandler.call(this, 'Views/Movies/add.hbs')
    let form = document.getElementsByTagName('form')[0]

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        notifyHandler(null, 'loadingBox')

        createModul.call(this, form, this.username, this.token)
            .then((response) => {
                notifyHandler('Created successfully!', 'successBox')
                redirectionHandler.call(this, '#/')

            }).catch((error) => {
                if (error.message) {
                    notifyHandler(error.message, 'errorBox')
                } else {
                    notifyHandler(error, 'errorBox')
                }
            })
    })
}