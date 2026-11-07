// FAQ toggle and feedback validation (Member 4)

function toggle_answer(id)
{
    let answer = document.getElementById(id);
    if(answer.style.display === "none")
    {
        answer.style.display = "block";
    }
    else
    {
        answer.style.display = "none";
    }
}

function submit_feedback()
{
    let name = document.getElementById("FbName").value.trim();
    let email = document.getElementById("FbEmail").value.trim();
    let message = document.getElementById("FbMessage").value.trim();
    let ratingBox = document.querySelector('input[name="rating"]:checked');

    let nameError = document.getElementById("FbNameError");
    let emailError = document.getElementById("FbEmailError");
    let ratingError = document.getElementById("FbRatingError");
    let messageError = document.getElementById("FbMessageError");

    let valid = true;

    // name
    if(name.length < 3)
    {
        nameError.textContent = "Name Must Be atleast 3 Char";
        valid = false;
    }
    else
    {
        nameError.textContent = "";
    }

    // email
    let expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!expression.test(email))
    {
        emailError.textContent = "Please Enter A Valid Email";
        valid = false;
    }
    else
    {
        emailError.textContent = "";
    }

    // rating
    if(ratingBox === null)
    {
        ratingError.textContent = "Select a rating";
        valid = false;
    }
    else
    {
        ratingError.textContent = "";
    }

    // comment
    if(message.length < 10)
    {
        messageError.textContent = "Comment Must Be atleast 10 Char";
        valid = false;
    }
    else
    {
        messageError.textContent = "";
    }

    if(valid)
    {
        document.getElementById("feedbackResult").textContent =
            "Thank you, " + name + ". Rating: " + ratingBox.value + "/5. Comment: " + message;
    }

    // stay on the same page
    return false;
}