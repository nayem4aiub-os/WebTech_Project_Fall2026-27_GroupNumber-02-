// Member 2 : Workout, Fitness Goals, Schedule, Workout History
console.log("Connected");

function collect_data()
{
    let validdept = validDepartment();

    // tick kora row remove korbe, page reload korbe na
    if(document.getElementById("removeTable") != null && validdept)
    {
        let checked = document.querySelectorAll('input[name="doctortype"]:checked');
        for(let i = 0; i < checked.length; i++)
        {
            checked[i].parentNode.parentNode.remove();
        }
        return false;
    }

    return validdept;
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
