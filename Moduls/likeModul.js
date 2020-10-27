import { fireBaseRequestFactory } from '../Scripts/firebase-requests.js'

export default async function likeModul(movieId, likesArr, token){

    const firebase = fireBaseRequestFactory('https://movies-84c8c.firebaseio.com/', 'movies', token)
 
    return firebase.patchEntity({likes: likesArr}, movieId)

}