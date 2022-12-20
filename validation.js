var nameError=document.getElementById('name-error');
var emailError=document.getElementById('mail-error');
var subError=document.getElementById('sub-error');
var MessageError=document.getElementById('message-error');
var SubmitError=document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('name').value;

    if(name.length==0){
        nameError.innerHTML="name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Full name is required";
        return false;
    }
    nameError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail(){
    var email=document.getElementById('email').value;

    if(email.length==0){
        emailError.innerHTML="email is required";
        return false;
    }
    var pat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
            if (email.match(pat)){
                emailError.innerHTML='<i class="fas fa-check-circle"></i>';
                return true;
            }else{
                emailError.innerHTML="Enter valid email";
                return false;
            }
    
        }
    
    
     

function validateSubject(){
    var subject=document.getElementById('subject').value;

    if(subject.length==0){
        subError.innerHTML="subject is required";
        return false;
    }
     
    subError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}
function validateMessage(){
    var Message=document.getElementById('message').value;

    if(Message.length==0){
        MessageError.innerHTML="Message is required";
        return false;
    }
     
    MessageError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}