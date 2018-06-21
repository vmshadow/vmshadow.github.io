var emailme_clicked = false;

function toggle_submit_form()
{
    if (emailme_clicked)
        document.getElementById("submit-form-holder").style.display = "block"
    else
        document.getElementById("submit-form-holder").style.display = "none"
}

document.getElementById("email-me").onclick = function() {
    emailme_clicked = !emailme_clicked
    toggle_submit_form()
}

document.getElementById("submit").onclick = function() {
    emailme_clicked = false
    toggle_submit_form()
}
