import { fireBaseRequestFactory } from '../Scripts/firebase-requests.js'

export default async function homeModul(token){

    const fireBase = fireBaseRequestFactory('https://movies-84c8c.firebaseio.com/', 'movies', token)

    return fireBase.getAll()

} 