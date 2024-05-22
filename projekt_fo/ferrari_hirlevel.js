document.getElementById("subcribe").addEventListener("submit", sub);
    function sub(event) {
        event.preventDefault();
        document.getElementById("hirlevel").style.display = "none";
        if (aszf_chbox.checked) {
            localStorage.setItem("email", email_name.value);
            localStorage.setItem("ászf", "igen");
            localStorage.setItem("név", user_name.value)
            if (ertesitesek.checked) {
                localStorage.setItem("értesítés", "igen");
            }
            else {
                localStorage.setItem("értesítés", "nem");
            }
        }
    }