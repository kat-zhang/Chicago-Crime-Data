var map;

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}

function initMap() {
    var myLat = localStorage.getItem('lat')
    var myLng = localStorage.getItem('lng')

    var options = {
        Zoom: 13,
        center: { lat: parseFloat(myLat), lng: parseFloat(myLng) },
    }

    map = new google.maps.Map(document.getElementById("map"), options);
    var marker = new google.maps.Marker({
        position: { lat: parseFloat(myLat), lng: parseFloat(myLng) },
        map: map,
    });

    $.ajax({
        type: "GET",
        url: '/crimePoints',
    }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
            var marker = new google.maps.Marker({
                position: { lat: parseFloat(data[i].Lat), lng: parseFloat(data[i].Lng) },
                map: map
            });
        }
    })

    $.ajax({
        type: "GET",
        url: '/crime',
    }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
            var h4 = $('<h4>')
            h4.text("Offense: " + toTitleCase(data[i].type.toLowerCase()))
            $('#crimeData').append(h4);
            var p = $('<p>')
            p.text("Description: " + toTitleCase(data[i].description.toLowerCase()));
            $('#crimeData').append(p);
            var p = $('<p>')
            p.text("Location: " + toTitleCase(data[i].location.toLowerCase()))
            $('#crimeData').append(p);
            var p = $('<p>')
            p.text("Arrest: " + toTitleCase(data[i].arrest.toLowerCase()))
            $('#crimeData').append(p);
            $('#crimeData').append($('<hr>'));
        }
    });
}
