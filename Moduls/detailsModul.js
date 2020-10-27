import { fireBaseRequestFactory } from '../Scripts/firebase-requests.js'

export default async function detailsModul(id, token){

    const firebase = fireBaseRequestFactory('https://movies-84c8c.firebaseio.com/', 'movies', token)

    return await firebase.getById(id)

    
}