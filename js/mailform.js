$('.subs-form').submit(function (e) {
    e.preventDefault();

    $("#send_email").prop("disabled", true);
    $("#send_email").html('Enviando');

    var fullname = $("#fullname").val();
    var emaildata = $("#email").val();
    var kids = $("#kids").val();
    var phone = $("#phone").val();
    
    $.ajax({
        type: 'POST',
        url: '../send.php',
        dataType: 'json',
        data: {'fullname':fullname, 'email':emaildata, 'kids':kids, 'phone':phone},
        success: function (response) {
            $("#send_email").prop("disabled", false);
            $("#send_email").html('Enviar');
            
            $('.error-message').hide();
            $('.success-message').hide();
            $("#email_form").hide();
            $('.success-message').html(response);
            $('.success-message').fadeIn('fast', function(){
                $('.top-content').backstretch("resize");
            });
            console.log(response);            
        },
        error: function (a, b, c) {
            $("#send_email").prop("disabled", false);
            $("#send_email").html('Enviar');

            $("#getErrorModal").modal('show');
            console.log(a);
            console.log(b);
            console.log(c);
        }
    });  
});