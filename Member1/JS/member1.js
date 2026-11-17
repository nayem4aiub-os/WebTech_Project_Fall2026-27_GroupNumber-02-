// Member 1 : Login, Sign Up, Profile, Forgot Password
console.log("Connected");

function collect_data()
{
    let validname = true;
    let validemail = true;
    let validpassword = true;
    let validgender = true;
    let validdept = true;

    // sudhu jei page e field ache shei gula check hobe
    if(document.getElementById("FullName") != null)
    {
        validname = collect_name();
    }

    if(document.getElementById("UserEmail") != null)
    {
        validemail = validateEmail();
    }

    if(document.getElementById("Password") != null)
    {
        let Pass = document.getElementById("Password").value;
        let PassError = document.getElementById("PasswordError");
        if(Pass.length < 6)
        {
            PassError.textContent = "Password Must Be atleast 6 Char";
            validpassword = false;
        }
        else
        {
            PassError.textContent = "";
        }
    }

    if(document.getElementById("ConfirmPassword") != null)
    {
        let Confirm = document.getElementById("ConfirmPassword").value;
        let ConfirmError = document.getElementById("ConfirmError");
        if(Confirm === "" || Confirm !== document.getElementById("Password").value)
        {
            ConfirmError.textContent = "Password Does Not Match";
            validpassword = false;
        }
        else
        {
            ConfirmError.textContent = "";
        }
    }

    if(document.getElementById("GenderError") != null)
    {
        validgender = ValidGender();
    }

    if(document.getElementById("DeptError") != null)
    {
        validdept = validDepartment();
    }

    return validname && validemail && validpassword && validgender && validdept;
}

function collect_name()
{
    let PName = document.getElementById("FullName").value.trim();
    let PError= document.getElementById("ErrorText");
    if(PName === "")
    {
        PError.textContent = "Enter The Name";
        return false;
    }

    if(PName.length<3)
    {
        PError.textContent = "Name Must Be atleast 3 Char";
        return false;
    }
    else{
        PError.textContent = "";
        console.log(PName);
    }
    return true;
}

function validateEmail()
{
    let Email = document.getElementById("UserEmail").value.trim();
    let emailError = document.getElementById("EmailError");
    let Expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(Email ==="")
    {
        emailError.textContent = "Please Enter The Email";
        return false;
    }
    else if(!Expression.test(Email))
    {
        emailError.textContent = "Please Enter The Email Again";
        return false;
    }
    else{
        emailError.textContent = "";
        return true;
    }
}

function ValidGender()
{
    //radio
    let selected = document.querySelector('input[name="gender"]:checked');
    let GError = document.getElementById("GenderError");
    if(selected === null)
    {
        GError.textContent = "Please Select Gender";
        return false;
    }
    GError.textContent = "";
    return true;
}

function validDepartment()
{
    //Checkbox
    let count = document.querySelectorAll('input[name="doctortype"]:checked').length;
    let DError = document.getElementById("DeptError");
    if(count === 0)
    {
        DError.textContent = "Select atleast one option";
        return false;
    }
    DError.textContent = "";
    return true;
}
