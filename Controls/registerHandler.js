import commonHandler from './commonHandler.js'
import createUser from '../Moduls/registerModul.js'
import notifyHandler from './notifyHandler.js'
import redirectionHandler from './redirectionHandler.js'

export default async function registerHandler() {

    await commonHandler.call(this, 'Views/User/registration.hbs')

    this.username = ''

    this.formRef = document.querySelector('.text-center')

    this.formRef.addEventListener('submit', (e) => {
        e.preventDefault()
        notifyHandler(null, 'loadingBox')

        createUser.call(this, this.formRef)
            .then(async (response) => {
                await notifyHandler('Successful registration!', 'successBox')
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