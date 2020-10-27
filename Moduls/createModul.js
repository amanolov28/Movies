import { createFormEntity } from '../Scripts/form-helpers.js'
import { fireBaseRequestFactory } from '../Scripts/firebase-requests.js'

export default async function createModul(formRef, creator, token) {

    let form = createFormEntity(formRef, ['title', 'description', 'imageUrl'])
    
    let movieData = form.getValue()

    movieData.creator = creator
    movieData.likes = [0]

    const firebase = fireBaseRequestFactory('https://movies-84c8c.firebaseio.com/', 'movies', token)

    return await firebase.createEntity(movieData)
   
}
