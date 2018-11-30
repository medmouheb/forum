
function test()
{
    let test0=nameTest()
    let test1=emptyTest()
    let test2=emailTest()
    let test3=passwordTest()
    if (test0 && test1 && test2 && test3)
    {
        window.location.href = "https://i.kym-cdn.com/photos/images/original/001/228/324/4a4.gif";
    }
}

function nameTest()
{
    var inputFirstName=document.getElementById("input-first-name").value
    var inputLastName=document.getElementById("input-last-name").value
    var firstNameError = document.getElementById("alert-first-name")
    var lastNameError = document.getElementById("alert-last-name")
    var firstNameChar= inputFirstName.match(/[^A-z]/g)
    var lastNameChar=inputLastName.match(/[^A-z]/g)
    if(firstNameChar!=null)
    {
        firstNameError.classList.remove("toggle-class")
        return false
    }
    else
    {
        firstNameError.classList.add("toggle-class")
        return true
    }
    if (lastNameChar!=null)
    {
        lastNameError.classList.remove("toggle-class")
        return false
    }
    else
    {
        lastNameError.classList.add("toggle-class")
        return true
    }
}

function emptyTest()
{
    var inputFirstName=document.getElementById("input-first-name")
    var inputLastName=document.getElementById("input-last-name")
    var inputAdress=document.getElementById("input-adress")
    var inputEmail=document.getElementById("input-email")
    var inputPassword=document.getElementById("input-password")
    var inputComment=document.getElementById("input-comment")
    var emptyError=document.getElementById("alert-empty")    
    if(inputFirstName.value==""||inputLastName.value==""||inputAdress.value==""||inputEmail.value==""||inputPassword.value==""||inputComment.value=="")
    {
        emptyError.classList.remove("toggle-class")
        return false
    }
    else
    {
        emptyError.classList.add("toggle-class")
        return true
    }
}

function emailTest()
{
    var inputEmail=document.getElementById("input-email").value
    var emailError=document.getElementById("alert-email")
    var atSign = inputEmail.split("@")
    var dots=inputEmail.split(".")
    var beforAt=atSign[0].match(/[^A-Z|-|_|.|a-z]/g)
    var afterAt=atSign[1]==undefined?null : atSign[1].match(/[^A-Z|.|a-z]/g)
    if(afterAt!=null || beforAt!=null || atSign.length!=2 || dots.length<2 || dots.length>3 || atSign[0].length==0 || atSign[1].length==0)
    {
        alert(afterAt!=null)
        alert(beforAt!=null)
        alert(atSign.length!=2)
        alert(dots.length<2)
        alert(dots.length>3)
        alert(atSign[0].length!=0 )
        alert(atSign[1].length!=0 )
        emailError.classList.remove("toggle-class")
        return false
    }
    else
    {
        emailError.classList.add("toggle-class")
        return true 
    }
}

function passwordTest()
{
    var passwordError=document.getElementById("alert-password")
    var inputPassword=document.getElementById("input-password").value
    var specialChar=inputPassword.match(/[^A-z|1-9]/g)
    var countNumbers=inputPassword.match(/[1-9]/g)
    var countUpperCase=inputPassword.match(/[A-Z]/g)
    if(inputPassword.length<8 || specialChar==null || countNumbers==null || countUpperCase==null)
    {
        passwordError.classList.remove("toggle-class")
        return false
    }
    else
    {
        passwordError.classList.add("toggle-class")
        return true 
    }
}