var ready  = confirm("Oh, Hello there! Are you ready to check my briefcase? I just need your Username.");

function confirmation() {
if (ready)   {
    var username  = prompt("What it will be the name of the person that wants to see my portfolio?");
    alert("That a cool name! " + username + " Well i hope you like my portfolio");
} 
else    {
    alert("I'm sorry but in order to see my awesome page. I need to trust you!")
    confirmation();
}
}

