function validateForm(){
    let fname = document.forms["applicationFormQuestions"]["firstname"].value;
    let lname = document.forms["applicationFormQuestions"]["lastname"].value;
    let email = document.forms["applicationFormQuestions"]["email"].value;
    let tel = document.forms["applicationFormQuestions"]["telephone"].value;
    let enticed = document.forms["applicationFormQuestions"]["enticedJobQuestion"].value;
    let weak = document.forms["applicationFormQuestions"]["weaknessQuestion"].value;

    if (fname == "") {
        window.alert("Missing First Name");
        return false;
    }
    if (lname == "") {
        window.alert("Missing Last Name");
        return false;
    }
    if (email == "") {
        window.alert(""+fname+" " +lname+", you are missing your Email ");
        return false;
    }
    if (tel == "") {
        window.alert(""+fname+" " +lname+", you are missing your  Telephone number");
        return false;
    }

    if (enticed == "") {
        window.alert(""+fname+" " +lname+", you are missing an answer for an application question answer");
        return false;
    }

    if (weak == "") {
        window.alert(""+fname+" " +lname+", you are missing an answer for an application question answer");
        return false;
    }

    window.alert("Thank you "+fname+" " +lname+ ".")
    return true;

    
}

