

function verifyPassowrd(){
    const password1 = document.getElementById('password');
    const password2 = document.getElementById('confirm-password');
    if(password1.value != password2.value){
        password2.setCustomValidity("Passwords Don't Match");
    }else{
        password2.setCustomValidity('');
    }
}
