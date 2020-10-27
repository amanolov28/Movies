import { fireBaseRequestFactory } from '../Scripts/firebase-requests.js'

export default async function deleteModul(movieId, token) {

    const firebase = fireBaseRequestFactory('https://movies-84c8c.firebaseio.com/', 'movies', token)

    return firebase.deleteEntity(movieId)

}