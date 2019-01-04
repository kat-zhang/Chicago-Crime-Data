var map
console.log('JUST DECLARED THE HIs AT TOP OF FILE~!!!')

function initMap() {
    var options = {

        Zoom: 13,
        center: { lat: 41.881832, lng: -87.623177 },

    }
    console.log('we are in init map!!!!', localStorage)
    var myLat = localStorage.getItem('lat')
    var myLng = localStorage.getItem('lng')

    map = new google.maps.Map(document.getElementById("map"), options);
    var marker = new google.maps.Marker({
        position: { lat: parseFloat(myLat), lng: parseFloat(myLng) },
        map: map,
        draggable: true
    });

    google.maps.event.addListener(marker, "dragend", function () {

        var lat = marker.getPosition().lat();
        var lng = marker.getPosition().lng();
        console.log('inside event listener lat', lat);
        console.log('inside even listern lng', lng);

        $("#lat").val(lat);
        $("#lng").val(lng);

    });

}