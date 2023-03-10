const routes = [{
    path: 'index.html'
},
{
    path: 'product.html'
},
{
    path: 'login.html'
},
{
    path: 'profile_user.html',
    role: ["admin", "user"]
},
{
    path: 'register.html'
},
{
    path: 'dashboard.html'
},
{
    path: 'booking.html',
    role: ["user"]
},
{
    path: 'booking_list.html',
    role: ["user"]
},
{
    path: 'ordernow.html',
    role: ["user"]
}
];
// =====

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
// ======
function checkAccess(pageName, role) {
    let allowed = false;
    for (let route of routes) {

        if (route.path == pageName) {


            if (!route.role) {
                allowed = true;
                break;
            } else if (route.role.includes(role)) {
                allowed = true
                break;
            }
        }
    }
    return allowed;
}

(function () {
    console.log("Routes initializing")
    let user = JSON.parse(localStorage.getItem("Logged_in_users"));
    let role = user != null ? user.role : null;
    let pathName = window.location.pathname.substr(1);
    let allowedAccess = checkAccess(pathName, role);



    if (!allowedAccess) {

        toastr.error("You are not authorized to access this page. Redirecting to login page");

        setTimeout(function () {
            window.location.href = "login.html"
        }, 2000);

    }
})();