const form = document.getElementById("form-part");

form.addEventListener("submit",
    function (event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name === "" || email === "") {
            alert("Empty Submission!");
            event.preventDefault();
        }
        else {
            alert("Form Submitted");
        }
    }
);