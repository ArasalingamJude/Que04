<script type="text/javascript">


         function validate()
         {
         	var email = document.frm.email.value;

         	if(email == "")
         	{
         		window.alert("Enter the Email Address");
         		email.focus();
         		return false;

         	}
         	if(!/^[a-zA-Z0-9] +@[a-zA-Z] + (?:\.[a-zA-Z]+)*$/.test(email))
         	{
         		window.alert("Invalid Email Address");
         		email.focus();
         		return false;
         	}
         	else
         	{
         		window.alert("Your Email Address is Valid")
         	}

         	return true;
         }

   	  </script>