function removeAlert() {
    document.querySelector(".alert").style.display = "none";
}

function displayAlert() {
    // Enable alert
    document.querySelector(".alert").style.display = "block";

    // Remove the alert with time scale
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);
}

removeAlert();