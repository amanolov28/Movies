export default async function loginUser(formValue) {
    
    return firebase.auth().signInWithEmailAndPassword(formValue.email, formValue.password)
        .then(response => {
           
            localStorage.setItem('username', response.user.email);
            localStorage.setItem('token', response.user._lat);
        })
   
}