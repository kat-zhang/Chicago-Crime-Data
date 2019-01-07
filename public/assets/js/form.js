$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();

        var myAddress = $('#inputAddress').val() + $('#inputCity').val() + $('#inputState').val() + $('#inputZip').val();
        $.ajax({
            type: "POST",
            url: '/test',
            data: { address: myAddress },
            success: function (res) {
                var lat = res.lat;
                var lng = res.lng;

                myLat = res.lat
                myLng = res.lng

                localStorage.setItem('lat', res.lat)
                localStorage.setItem('lng', res.lng)

                window.location.pathname = '/map'
            }
        })
    })
})