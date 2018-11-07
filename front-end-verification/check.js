
function onClickAddImagesLogin(){
    $('#email,#password').keyup(function() {

        var emailImage = $("#email").val().length<1;
            if (emailImage){
                $(".icn_mail").removeClass("icn_mail_active");
            }
            else{
                $(".icn_mail").addClass("icn_mail_active");
        }
        var passwordImage = $("#password").val().length<1;
            if (passwordImage){
                $(".icn_password").removeClass("icn_password_active");
            }
            else{
                $(".icn_password").addClass("icn_password_active");
        }

    })
}


/* -------CHECK LOGIN------- */

function onCLickCheckLogin(){

    var emailValue = document.getElementById("email").value;
    var emailReg = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$";
    var emailCond = emailValue.match(emailReg);
    var password1CheckLogin = $("#password").val();
    var loginPassCond =  password1CheckLogin.length>=6;

    //ON KEY CHECK
    $('#email,#password').keyup(function() {
        var emailValue = document.getElementById("email").value;
        var emailReg = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$";
        var emailCond = emailValue.match(emailReg);

            if (emailCond){
                $("#email").removeClass("inputWrongBorderRed");
                $("#divCheckEmailLogin").slideUp("fast");
            }
            else{
                $("#email").addClass("inputWrongBorderRed");
                $("#divCheckEmailLogin").slideDown("fast");
            }


        var password1CheckLogin = $("#password").val();
        var loginPassCond =  password1CheckLogin.length>=6;

            if (loginPassCond){
                $("#password").removeClass("inputWrongBorderRed");
                $("#divCheckPasswordLogin").slideUp("fast");
            }
            else{
                $("#password").addClass("inputWrongBorderRed");
                $("#divCheckPasswordLogin").slideDown("fast");
        }
    });

    //ON CLICK CHECK
    if (loginPassCond && emailCond){
        document.getElementById("checkLogin").submit();
    }
    else{
        if (loginPassCond){
            $("#divCheckPasswordLogin").slideUp("fast");
            $("#password").removeClass("inputWrongBorderRed");
        }
        else {
            $("#divCheckPasswordLogin").slideDown("fast");
            $("#password").addClass("inputWrongBorderRed");

        }
        if (emailCond){
            $("#divCheckEmailLogin").slideUp("fast");
            $("#email").removeClass("inputWrongBorderRed");
        }
        else {
            $("#divCheckEmailLogin").slideDown("fast");
            $("#email").addClass("inputWrongBorderRed");
        }
    }


}
