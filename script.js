let alertMessage = document.querySelector(".alert-primary");
let buttonPrimary = document.querySelector(".btn-primary");

window.onload(
buttonPrimary.addEventListener("click", launchAlertMessage)
)
let launchAlertMessage = (event) => {
    alert("hello")
}
