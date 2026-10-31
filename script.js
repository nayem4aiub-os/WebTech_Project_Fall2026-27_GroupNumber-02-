console.log("Connected");
let x=10;
var y=20;
console.log("Sum: ", x+y);

function collect_data()
{
    let validname = true;
    let validemail = true;
    let validpassword = true;
    let validgender = true;
    let validdept = true;

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

    if(document.getElementById("GenderError") != null)
    {
        validgender = ValidGender();
    }

    if(document.getElementById("DeptError") != null)
    {
        validdept = validDepartment();
    }

    let allvalid = validname && validemail && validpassword && validgender && validdept;

    if(document.getElementById("calorieResult") != null && allvalid)
    {
        let age = Number(document.getElementById("calAge").value);
        let weight = Number(document.getElementById("calWeight").value);
        let height = Number(document.getElementById("calHeight").value);
        let activity = Number(document.getElementById("activity").value);
        let sex = document.querySelector('input[name="gender"]:checked').value;
        let bmr = 10 * weight + 6.25 * height - 5 * age;
        if(sex === "Male")
        {
            bmr = bmr + 5;
        }
        else
        {
            bmr = bmr - 161;
        }
        let estimate = Math.round(bmr * activity);
        document.getElementById("calorieResult").textContent = "Estimated maintenance calories: about " + estimate + " kcal/day. Individual needs can vary.";
        return false;
    }

    if(document.getElementById("bmiResult") != null && allvalid)
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
        DError.textContent = "Select atleast one Option";
        return false;
    }
    DError.textContent = "";
    return true;
}