import { fireBaseRequestFactory } from '../Scripts/firebase-requests.js'
import { createFormEntity } from '../Scripts/form-helpers.js'

export default async function editModul(formRef, movieId, token){

    const firebase = fireBaseRequestFactory('https://movies-84c8c.firebaseio.com/', 'movies', token)

    let form = createFormEntity(formRef, ['title', 'description', 'imageUrl'])
    
    let movieData = form.getValue()
    
    return firebase.patchEntity(movieData, movieId)

}