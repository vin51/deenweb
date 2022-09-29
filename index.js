function validate(){
    var tel=document.getElementById('phone').value;
    var mail=document.getElementById('email').value;
    var client=document.getElementById('name').value;
    var mailRGEX= /^[\w\.%\-]+@[\w.\-]+\.[a-zA-Z]{2,4}$/;
    var telRGEX=/^(?:254|\+254|0)?(7(?:(?:[12][0-9])|(?:0[0-8])|(9[0-2]))[0-9]{6})$/;
    var clientRGEX=/(^[a-zA-Z][a-zA-Z\s]{3,2}[a-zA-Z]s$)/;
    var mailResults=mailRGEX.test(mail);
    var telResults=telRGEX.test(tel);
    var clientResults=clientRGEX.test(client);
    if(mailResults==false){
        alert('Enter a valid e-mail ');
        return false;
    }
    if(telResults==false){
        alert('Enter a valid, digit only phone number');
        return false;
    }
    if(clientResults==false){
        alert('Enter atleast two names using alphabets only')
        return false;
    }
    return true;

}