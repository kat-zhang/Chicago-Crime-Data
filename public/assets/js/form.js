$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        console.log("click", $('#inputCity').val());

        var myAddress = $('#inputAddress').val() + $('#inputCity').val() + $('#inputState').val() + $('#inputZip').val();
        $.ajax({
            type: "POST",
            url: '/test',
            data: { address: myAddress },
            success: function (res) {
                console.log('we got the res from ajax!!!!', res)
                var lat = res.lat;
                var lng = res.lng;

                myLat = res.lat
                myLng = res.lng

                localStorage.setItem('lat', res.lat)
                localStorage.setItem('lng', res.lng)
                console.log('my lat and my lng right before switch page', myLat, myLng)

                window.location.pathname = '/map'

                console.log(lat);
                console.log(lng);
            }
        })
    })

})