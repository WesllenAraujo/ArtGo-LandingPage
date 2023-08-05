//This code will show a error message if the email input value is incorrect or will show a sucess message if is correct
function emailValidate() {
    let result = emailRegexResult();

    let messageError = document.getElementById('mensagem-erro');
    let messageSucess = document.getElementById('mensagem-sucesso');

    if(result == true) {
        messageSucess.style.display = "block";
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        messageSucess.style.display = "none";
    }
}

function emailRegexResult() {
    let email = document.getElementById('email').value;
    let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let result = regex.test(email);
    return result;
}
