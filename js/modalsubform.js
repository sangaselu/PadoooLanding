$("#sub-mod-form").submit(function (e) {
    e.preventDefault();

    $("#send_email_form").prop("disabled", true);
    $("#send_email_form").html('Enviando');

    var fullname = $("#fullname-mod").val();
    var emaildata = $("#email-mod").val();
    var kids = $("#kids-mod").val();
    var phone = $("#phone-mod").val();
    
    $.ajax({
        type: 'POST',
        url: '../send.php',
        dataType: 'json',
        data: {'fullname':fullname, 'email':emaildata, 'kids':kids, 'phone':phone},
        success: function (response) {
            $("#resultModal").modal('hide');

            $("#send_email_form").prop("disabled", false);
            $("#send_email_form").html('Enviar');

            console.log(response);            
        },
        error: function (a, b, c) {
            $("#resultModal").modal('hide');

            $("#send_email_form").prop("disabled", false);
            $("#send_email_form").html('Enviar');

            console.log(a);
            console.log(b);
            console.log(c);
        }
    });  
});