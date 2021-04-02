
function valid()
{
    var x=document.getElementById("fname").value;
    var t=/^[A-Za-z\s]+$/;
   
    if(x=="")
    {
        alert("Enter Name");
        x.focus();
        return false;
    }
  //  alert(x.match(t));
    else if(!x.match(t))
    {
        alert("GOD! Dwight, enter your proper name idiot - Michael Scott");
        x.focus();
        return false;
    }

    var em = document.getElementById("email").value;
    if(em=="")
    {
        alert("Enter Email ID");
        em.focus();
        return false;
    }
    var re = /\S+@\S+\.\S+/;
    if(!em.match(re))
    {
        alert("Enter Valid e-mail ID.");
        em.focus();
        return false;
    }

    var con=document.getElementById("contact").value;
    if(con=="")
    {
        alert("Enter Contact Number - Michael Scarn");
        con.focus();
        return false;
    }
    var c=con.length;
    if(c<6 || c>10)
    {
        alert("Enter a  valid number - Creed Branton");
        con.focus();
    } 

    var l = document.getElementById("like-list").value;
    if(l=="")
    {
        alert("Choose a character bro.");
        l.focus();
        return false;
    }

    var x = document.getElementById("fname").value;
    var y = x + ", You have Successfully registered..!!";
    alert(y);

    document.getElementById("d").style.display = "block";

}
     var i = 01;
    function myFunction(){
    //alert("chal raha hai");
    var x = document.getElementById("fname").value;
    
    document.getElementById("result").innerHTML = x + " Your ID is " + i + "<br/> Welcome To our humble abode.";
    i +=1;
}
