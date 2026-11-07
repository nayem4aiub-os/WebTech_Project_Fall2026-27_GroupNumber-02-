console.log("Connected");

function collect_data()
{
    let validname = true;
    let validemail = true;
    let validpassword = true;
    let validdept = true;
    let validmessage = true;

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

    if(document.getElementById("DeptError") != null)
    {
        validdept = validDepartment();
    }

    if(document.getElementById("MessageError") != null)
    {
        let Msg = document.getElementById("Message").value.trim();
        let MsgError = document.getElementById("MessageError");
        if(Msg === "")
        {
            MsgError.textContent = "Enter The Message";
            validmessage = false;
        }
        else
        {
            MsgError.textContent = "";
        }
    }

    let allvalid = validname && validemail && validpassword && validdept && validmessage;

    // contact page: message page e dekhabe, page reload korbe na
    if(document.getElementById("contactResult") != null && allvalid)
    {
        let cname = document.getElementById("FullName").value.trim();
        let cmessage = document.getElementById("Message").value.trim();
        document.getElementById("contactResult").textContent = "Thank you, " + cname + ". Your message: " + cmessage;
        return false;
    }

    // progress page: BMI dekhabe, page reload korbe na
    if(document.getElementById("bmiResult") != null)
    {
        let bweight = Number(document.getElementById("weightInput").value);
        let bheight = Number(document.getElementById("heightInput").value) / 100;
        let bmi = bweight / (bheight * bheight);
        let category = "";
        if(bmi < 18.5)
        {
            category = "Below typical adult range";
        }
        else if(bmi < 25)
        {
            category = "Typical adult range";
        }
        else if(bmi < 30)
        {
            category = "Above typical adult range";
        }
        else
        {
            category = "High adult BMI range";
        }
        document.getElementById("bmiResult").textContent = bmi.toFixed(1) + " (" + category + ")";
        return false;
    }

    // tick kora row remove korbe, page reload korbe na
    if(document.getElementById("removeTable") != null && allvalid)
    {
        let checked = document.querySelectorAll('input[name="doctortype"]:checked');
        for(let i = 0; i < checked.length; i++)
        {
            checked[i].parentNode.parentNode.remove();
        }
        return false;
    }

    // admin login page: sudhu admin email ar password hole admin page e jabe
    if(document.getElementById("AdminError") != null && allvalid)
    {
        let aemail = document.getElementById("UserEmail").value.trim().toLowerCase();
        let apass = document.getElementById("Password").value;
        let AdminError = document.getElementById("AdminError");
        if(aemail !== "admin@smartfit.com" || apass !== "admin123")
        {
            AdminError.textContent = "Wrong Admin Email Or Password";
            return false;
        }
        AdminError.textContent = "";
    }

    return allvalid;
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

function validDepartment()
{
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