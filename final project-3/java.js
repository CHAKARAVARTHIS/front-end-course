var myData = document.getElementById('contactform');
myData.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.getElementById("fname").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    let Confirm = document.getElementById("Confirm").value;

    if (!password || !Confirm) {
        alert("pls fill the complete details ");
        return;
    }

    console.log("User  Name " + name);
    console.log("User Email " + email);
    console.log("User password" + password);
    console.log("User Feed back " + Confirm);

    myData.reset();
});
