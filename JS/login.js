//On submit, checks the email and password inputs for the correct values
const onSubmit = () => {
    if (document.getElementById("email").value !== "ta@ou.edu") {
        alert("Please enter a valid email address")
        return
    } else if (document.getElementById("password").value != "ta2022") {
        alert("Please enter a valid email password")
        return
    } else {
        window.location.href = "tickets.html"
    }
}
