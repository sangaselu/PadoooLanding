$("#app_submit").submit(function (e) {
    e.preventDefault();

    $("#submitBtn").prop("disabled", true);
    $("#submitBtn").text('Enviando');

    var parentName = $("#parentName").val();
    var numberOfKids = $("#numberOfKids").val();
    var phoneNumber = $("#phoneNumber").val();
    var parentEmail = $("#parentEmail").val();
    var kidEmail = $("#kidEmail").val();

    var spendingRate = $('input[name=gasto]:checked').val();
    var whatsapp = $('#whatsapp').is(':checked') ? 1 : 0;
    var fbc = $('#messenger').is(':checked') ? 1 : 0;
    var phoneCall = $('#phoneCall').is(':checked') ? 1 : 0;
    var mail = $('#mail').is(':checked') ? 1 : 0;

    //  Save to database
    $.ajax({
        type: 'POST',
        url: '../ios.php',
        dataType: 'json',
        data: {
            'parentName': parentName, 'numberOfKids': numberOfKids, 'phoneNumber': phoneNumber,
            'spendingRate': spendingRate, 'whatsapp': whatsapp, 'fbc': fbc, 'phoneCall': phoneCall,
            'mail': mail, 'parentEmail' : parentEmail, 'kidEmail' : kidEmail
        },
        success: function (response) {
            $("#submitBtn").prop("disabled", false);
            $("#submitBtn").text('Enviar');
            console.log(response);

            window.location.replace("http://www.padooo.com/success");
        },
        error: function (a, b, c) {
            $("#submitBtn").prop("disabled", false);
            $("#submitBtn").text('Enviar');
            console.log(a);
            console.log(b);
            console.log(c);
        }
    });

});