import loginUser from '../Moduls/loginModul.js'
import commonHandler from './commonHandler.js'
import notifyHandler from './notifyHandler.js'
import { createFormEntity } from '../Scripts/form-helpers.js'
import redirectionHandler from './redirectionHandler.js'

export default async function loginHandler() {
    await commonHandler.call(this, 'Views/User/login.hbs')
    let formRef = document.getElementsByTagName('form')[0]
    let form = createFormEntity(formRef, ['email', 'password'])

    formRef.addEventListener('submit', (e) => {
        e.preventDefault()
        let formValue = form.getValue();

        notifyHandler(null, 'loadingBox')

        loginUser.call(this, formValue)
            .then(async (response) => {
                await notifyHandler('Logged in successfully', 'successBox')
                redirectionHandler.call(this, '#/')

            }).catch((error) => {
                if (error.message) {
                    notifyHandler(error.message, 'errorBox')
                } else {
                    notifyHandler(error, 'errorBox')
                }
                form.clear()
            })
    })
}