
       function  validateform(n,e,m)
        {
            
            if(n.value==""){
                alert("user name cannot be empty");

            }
            if(e.value==""){
                alert("enter correct email id");
            }
             if(m.value.length<10){
                alert("mobile number should contain 10 digits");
            }
            if( m.value.length==10 && n.value !="" && e.value !=""){
                alert("thanks for contacting");
                document.myform.e.focus();
                document.myform.n.focus();
                document.myform.m.focus();

            }
            else{
                alert("check your details once again");
            }

        }  