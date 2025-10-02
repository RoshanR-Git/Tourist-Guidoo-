document.getElementById("contactform").addEventListener("submit",function(e)
{
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === "")
    {
        alert("⚠️ Please fill in all fields before submitting.");
        return;
    }
     
    let emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailpattern))
    {
        alert("❌ Please enter a valid email address.");
        return; 
    }

    alert("✅ Thank you, " + name + "! Your message has been submitted.");
    document.getElementById("contactform").reset();
});