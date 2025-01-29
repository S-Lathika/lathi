function handlelogin(){
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const errormsg=document.getElementById('error');

    const logindata=[
        {username:"lathi",password:"lathi1234"},
        {username:"cr7",password:"pass123"},
    ]

    const isvalid= logindata.some((user)=>user.username==username && user.password==password);

    if(isvalid){
        window.location.href="flexbox.html"
        errormsg.innerText="Login Successful"
    }
    else{
        errormsg.innerText="Invalid Credentials"

    }
}