$("#header").load("_header.html");


$(document).ready(function () {

    console.log("Jquery Loaded");

    $("#loginForm").submit(loginPage);

});


function loginPage() {
    event.preventDefault();
    const email = $("#email").val();
    console.log(email);
    const password1 = $("#password").val();
    console.log(password1);
    const role = "user";

    console.log(role);

    console.log(email + ":" + password1 + ":" + role);

    let formvalues = {
        "email": email,
        "password": password1,
        "role": role
    };
    console.log(formvalues);
    try {
        // 1. Check Email is filled or not
        Validator.isValidString(email, ErrorMessage.EMAIL_MANDATORY);

        // 2. Check Password is filled or not
        Validator.isValidString(password1, ErrorMessage.PASSWORD_MANDATORY);

        // 3. Call API to check login details
        UserService.login(email, password1, role).then(res => {
            let data = res.data.docs;
            console.log(data);
            if (data.length == 0) {
                toastr.error(ErrorMessage.INVALID_LOGIN);

            } else {

                const user = data[0];
                localStorage.setItem("Logged_in_users", JSON.stringify(user));
                console.log("Role:", role);

                if (role == "user") {
                    toastr.success("login succesful");
                    setTimeout(function () {
                        window.location.href = "dashboard.html"
                    }, 3000);

                }
            }


        }).catch(err => {
            console.log(err.response.data);
            // toastr.error(ErrorMessage.LOGIN_FAILED);
            throw new Error(ErrorMessage.LOGIN_FAILED);

        });
    } catch (err) {
        console.error(err.message);
        toastr.error("Error: " + err.message);

    }
}