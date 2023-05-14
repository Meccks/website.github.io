function validateForm(){
    let fname = document.forms["applicationFormQuestions"]["firstname"].value;
    let lname = document.forms["applicationFormQuestions"]["lastname"].value;
    let email = document.forms["applicationFormQuestions"]["email"].value;
    let tel = document.forms["applicationFormQuestions"]["telephone"].value;
    let enticed = document.forms["applicationFormQuestions"]["enticedJobQuestion"].value;
    let weak = document.forms["applicationFormQuestions"]["weaknessQuestion"].value;

    if (fname == "") {
        window.alert("Missing First Name");
        let f = document.forms["applicationFormQuestions"]["firstname"];
        f.setAttribute("style", "background-color: red");
        return false;
    }
    if (lname == "") {
        window.alert("Missing Last Name");
        let f = document.forms["applicationFormQuestions"]["lastname"];
        f.setAttribute("style", "background-color: red");
        return false;
    }
    if (email == "") {
        window.alert("Missing Email ");
        let f = document.forms["applicationFormQuestions"]["email"];
        f.setAttribute("style", "background-color: red");
        return false;
    }
    if (tel == "") {
        window.alert("Missing Telephone number");
        let f = document.forms["applicationFormQuestions"]["enticedJobQuestion"];
        f.setAttribute("style", "background-color: red");
        return false;
    }

    if (enticed == "") {
        window.alert("Missing an application question answer");
        let f = document.forms["applicationFormQuestions"]["telephone"];
        f.setAttribute("style", "background-color: red");
        return false;
    }

    if (weak == "") {
        window.alert("Missing an application question answer");
        let f = document.forms["applicationFormQuestions"]["weaknessQuestion"];
        f.setAttribute("style", "background-color: red");
        return false;
    }

    window.alert("Thank you "+fname+" " +lname+ ".")
    return true;

    
}

