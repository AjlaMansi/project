function validate(event){

    event.preventDefault();

    const username = $("#userName").val();
    const email = $("#email").val();
    const password = $("#Password").val();
    var validated = true;
    console.log('isValidated [initial] = ', validated);

    class Account{

        constructor(id, name, email, password){

            if(arguments.length != 4)
            {
                throw new Error("Please, provide 4 properties")
            }
    
            this.id = id;
            this.username = username;
            this.email = email;
            this.password = password;
        }
    }

    let AccountsMap = new Map();

    AccountsMap.set('Kleaaa', '54321');
    AccountsMap.set('admin', 'admin');

    $("#userNameSpn").html("");
    $("#emailSpn").html("");
    $("#PasswordSpn").html("");

    if(username.length < 3){
        $("#userNameSpn").html("Invalid username, minimum 3 characters");
        validated = false;
    }
    if(AccountsMap.has(username)){
        $("#userNameSpn").html("Username already exists");
        validated = false;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }
    
    if(validateEmail(email)){
    }else {
        $("#emailSpn").html("Email not valid");
        validated = false;
    }

    if(password.length < 5){
        $("#PasswordSpn").html("Invalid password, minimum 5 characters");
        validated = false;
    }

    if(validated == false)
    {
        return
    }

    handleSubmit(username, email, password);
    //window.location.href = 'Main.html';

}

function handleSubmit(Name, Email, Password){
    // Create Object
    var newAccount = {
        username: Name,
        email: Email,
        password: Password
    }
    console.log('newAccount Object = ', newAccount);
    var existingAccounts = JSON.parse(localStorage.getItem('Accounts')) || [];
    existingAccounts.push(newAccount);
    localStorage.setItem('Accounts', JSON.stringify(existingAccounts));

    alert('Account added to localstorage');
}
 

$(document).ready(function(){
    $("#RegisterBtn").click(validate);

})
