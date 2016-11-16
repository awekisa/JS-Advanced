// function validate(){
//     let usernameBool = false;
//     let passwordBool = false;
//     let confirmPassBool = false;
//     let emailBool = false;
//     let companyInfoBool = false;
//     let companyNumberBool = false;
//
//     // isCheck checkbox
//     $('#company').on('change', function(){
//         $('#valid').css('display', 'none');
//         if ($('#company').prop('checked') === true){
//             companyInfoBool = true;
//         }
//         else{
//             companyInfoBool = false;
//         }
//
//         if (companyInfoBool){
//             $('#companyInfo').css('display', 'inline');
//         }
//         else{
//             $('#companyInfo').css('display', 'none');
//         }
//     });
//
//
//     $('#submit').on('click', function(ev){
//         $('#valid').css('display', 'none');
//
//         let usernameRegex = /([A-Za-z0-9]{3,21})/;
//         let passwordRegex = /^([A-Za-z0-9_]{5,16})$/;
//         let emailRegex = /^(.)*@(.)*\.(.)*$/;
//
//         // CHECK USERNAME
//         if (usernameRegex.test($('#username').val())){
//             usernameBool = true;
//         }
//         else{
//             usernameBool = false;
//         }
//         // CHECK PASSWORD
//         if (passwordRegex.test($('#password').val())){
//             passwordBool = true;
//         }
//         else{
//             passwordBool = false;
//         }
//
//         // check confirm password
//         if ($('#confirm-password').val() === $('#password').val() && $('#confirm-password').val().length > 0){
//             confirmPassBool = true;
//         }
//         else{
//             confirmPassBool = false;
//         }
//         // check email
//         if (emailRegex.test($('#email').val())){
//             emailBool = true;
//         }
//         else {
//             emailBool = false;
//         }
//
//         let n = Number($('#companyNumber').val());
//         if (n >= 1000 && n <= 9999){
//             companyNumberBool = true;
//         }
//         else{
//             companyNumberBool = false;
//         }
//
//         if (usernameBool){
//             $('#username').css('border', 'none');
//         }
//         else{
//             $('#username').css('border-color', 'red');
//         }
//         if (passwordBool){
//             $('#password').css('border', 'none');
//         }
//         else{
//             $('#password').css('border-color', 'red');
//         }
//         if (confirmPassBool){
//             $('#confirm-password').css('border', 'none');
//         }
//         else{
//             $('#confirm-password').css('border-color', 'red');
//         }
//         if (confirmPassBool){
//             $('#confirm-password').css('border', 'none');
//         }
//         else{
//             $('#confirm-password').css('border-color', 'red');
//         }
//         if (emailBool){
//             $('#email').css('border', 'none');
//         }
//         else{
//             $('#email').css('border-color', 'red');
//         }
//
//         if (companyInfoBool){
//             if (companyNumberBool){
//                 $('#companyNumber').css('border', 'none');
//             }
//             else{
//                 $('#companyNumber').css('border-color', 'red');
//             }
//         }
//
//
//
//
//         // VALIDATION
//         if (usernameBool && passwordBool && confirmPassBool && emailBool){
//             if (companyInfoBool){
//                 if (companyNumberBool){
//                     $('#valid').css('display', 'inherit');
//                 }
//                 else{
//                     $('#companyNumber').css('border-color', 'red');
//                 }
//             }
//             else{
//                 $('#valid').css('display', 'inherit');
//             }
//         }
//         ev.preventDefault();
//     });
//
//
//
//
//
// }

function validate() {
    let usernameBool = false;
    let passwordBool = false;
    let passwordConfirmBool = false;
    let emailBool = false;
    let companyCheckBool = false;
    let companyNumberBool = false;

    //check box
    $('#company').on('change', function () {
        if ($('#company').prop('checked') == true) {
            $('#companyInfo').css('display', 'inline');
            companyCheckBool = true;
        }
        else {
            $('#companyInfo').css('display', 'none')
        }
    });


    $('#submit').on("click", function (ev) {
        let userNames = $('#username').val();
        let emails = $('#email').val();
        let passWord = $('#password').val();
        let passWordConfirm = $('#confirm-password').val();

        //username validation
        let regex = /^[a-zA-Z0-9]+$/gm;
        if (regex.test(userNames) == true && userNames.length >= 3 && userNames.length <= 20) {
            usernameBool = true;
        }

        //email validation
        let emailRegEx = /(.)*@(.)*\.(.)*/g;
        if (emailRegEx.test(emails) == true) {
            emailBool = true;
        }

        //password validation
        let passRegEx = /^[a-zA-Z0-9_]+$/gm;
        if (passWord.length >= 5 && passWord.length <= 15 && passRegEx.test(passWord) == true && passWord === passWordConfirm) {
            passwordBool = true;
            passwordConfirmBool = true;
        }

        //company number validation
        if (companyCheckBool == true) {
            let compNum = $('#companyNumber').val();

            if (compNum >= 1000 && compNum <= 9999) {
                companyNumberBool = true;
            }
        }
        if (usernameBool == true && emailBool == true && passwordBool == true && passwordConfirmBool == true) {
            if (companyCheckBool == true) {
                if (companyNumberBool == true) {
                    $('#valid').css('display', 'inherit');
                }
                else {
                    $('#companyNumber').css('border-color', 'red')
                }
            }
            else {
                $('#valid').css('display', 'inherit');
            }
        }
        else {
            $('#valid').css('display', 'none');
        }

        if (usernameBool == false) {
            $('#username').css('border-color', 'red')
        }
        if (emailBool == false) {
            $('#email').css('border-color', 'red')
        }
        if (passwordBool == false) {
            $('#password').css('border-color', 'red')
        }
        if (passwordConfirmBool == false) {
            $('#confirm-password').css('border-color', 'red')
        }
        if (companyCheckBool == true) {
            if (companyNumberBool == false) {
                $('#companyNumber').css('border-color', 'red')
            }
        }

        ev.preventDefault();

    });
}