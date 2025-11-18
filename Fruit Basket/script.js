const form = document.getElementById("contact-form");

form.addEventListener("submit",
    function (event) {
        const name = document.getElementById("exampleInputName").value.trim();
        const email = document.getElementById("exampleInputEmail1").value;

        if (name === "" || email === "") {
            alert("You need to fill the form!!!");
            event.preventDefault();
        }
        else {
            alert("Form submited.")
        }

    }
);
