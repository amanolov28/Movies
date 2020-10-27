import logoutModul from '../Moduls/logoutModul.js'
import redirectionHandler from './redirectionHandler.js'
import notifyHandler from './notifyHandler.js'

export default async function logoutHandler() {
    
    notifyHandler(null, 'loadingBox')

    await logoutModul().then(() => notifyHandler('Succesfull logout!', 'successBox'))

    localStorage.clear();
    redirectionHandler.call(this, '#/login')
}