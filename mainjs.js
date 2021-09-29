
       function  validateform(n,e,m)
        {
            
            if(n.value==" "|| e.value==" "){
                alert("entries cannot be empty");

            }
             if(m.value.length<10){
                alert("mobile number should contain 10 digits");
            }
            if( m.value.length==10){
                alert("your account is created successfully");
                document.myform.e.focus();
                document.myform.n.focus();
                document.myform.m.focus();

            }
            else{
                alert("check your details once again");
            }

        }  