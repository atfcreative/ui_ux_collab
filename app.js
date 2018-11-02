$(document).ready(function() {
    console.log('Hello Dave...')

    $('#mc-embedded-subscribe').on('click', function(e) {
        e.preventDefault();
        validateForm();
    });

    function validateForm(){

        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var nameReg = /^[A-Za-z]+$/;

        var email = $('#mce-EMAIL').val();
        var firstName = $('#mce-FNAME').val();
        var lastName = $('#mce-LNAME').val();

        var inputVal = new Array(email, firstName, lastName);

        // var inputMessage = new Array("email address", "first name", "last name");

         $('.error').hide();

            //email validation /////////////////////////////////////////////////////////////////////////

            if(email == ""){
                $('#mce-EMAIL').after('<span class="error"> Please enter your email address</span>');
            }
            else if(!emailReg.test(email)){
                $('#mce-EMAIL').after('<span class="error"> Please enter a valid email address</span>');
            }

            //first name /////////////////////////////////////////////////////////////////////////

            // else if(inputVal[1] == ""){
            else if(firstName== ""){
                $('#mce-FNAME').after('<span class="error"> Please enter your first name</span>');
            }
            else if(!nameReg.test(firstName)){
                console.log(nameReg.test(firstName))
                $('#mce-FNAME').after('<span class="error"> Letters only</span>');
            }

            //last name /////////////////////////////////////////////////////////////////////////

            else if(lastName == ""){
                $('#mce-LNAME').after('<span class="error"> Please enter your last name</span>');
            }
            else if(!nameReg.test(lastName)){
                $('#mce-LNAME').after('<span class="error"> Letters only</span>');
            }

            else {
                $('#mc-embedded-subscribe-form').submit();
            }
        }

    }); // End Document Ready


