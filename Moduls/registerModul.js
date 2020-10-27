import { createFormEntity } from '../Scripts/form-helpers.js'

export default async function createUser(formRef) {
    let form = createFormEntity(formRef, ['email', 'password', 'repeatPassword'])
    let credentials = form.getValue()

    if (credentials.password.length < 6) {
        form.clear()
        throw 'The password should be at least 6 characters long'
    }

    if (credentials.repeatPassword !== credentials.password) {
        form.clear()
        throw 'The repeat password should be equal to the password'
    }
    
    return firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(response => {
    
            localStorage.setItem('username', response.user.email);
            localStorage.setItem('token', response.user._lat);
            form.clear()
        })

}