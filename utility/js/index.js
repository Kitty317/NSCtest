var map;
var infowindow;

$(document).ready(function () {
    initMap();
});

function initMap() {

    var location = new google.maps.LatLng(39.5, -98.35);

    var mapCanvas = $('#map');
    var mapOptions = {
        center: location,
        panControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 3
    };
    map = new google.maps.Map(mapCanvas[0], mapOptions);

    infowindow = new google.maps.InfoWindow({
        maxWidth: 200
    });


    var res = [
        {
           name: "Milestone Foundation",
           location: {lat:43.661471, lng: -70.2553259},
           city: "Portland Maine",
           content: '<div id="content">'+
                    '<div id="header">'+
                    '<p class="markerHeading" id="centerName">Milestone Foundation</p>'+
                    '<p class="markerHeading" id="centerCity">Portland Maine</p>'+
                    '<div id="markerContent">'+
                    '<p><a href="http://www.milestonefoundation.org/what-we-do/emergency-shelter/">'+
                    'Go to the website </a></p>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
        },
        {
            name: "Yukon Kuskokwim Health Corporation Sobering Center",
            location: {lat:60.7922222, lng: -161.7558333},
            city: "Bethel Alaska",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">Yukon Kuskokwim Health Corporation Sobering Center</p>'+
            '<p class="markerHeading" id="centerCity">Bethel Alaska</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://www.ykhc.org/sobering-center-now-operates-247/">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "Volunteers of America Sobering Center/Serial Inebriate Program",
            location: {lat:32.715738, lng:-117.1610838},
            city: "San Diego California",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">Volunteers of America giSobering Center/Serial Inebriate Program</p>'+
            '<p class="markerHeading" id="centerCity">San Diego California</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://www.sandiego.gov/sip/index.html">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "San Francisco Sobering Center",
            location: {lat:37.774929, lng:-122.419416},
            city: "San Francisco California",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">San Francisco Sobering Center</p>'+
            '<p class="markerHeading" id="centerCity">San Francisco California</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://www.sfsoberingcenter.com/">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "Santa Barbara Community Sobering Center",
            location: {lat: 34.4208305, lng:-119.6981901},
            city: "Santa Barbara California",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">Santa Barbara Community Sobering Center</p>'+
            '<p class="markerHeading" id="centerCity">Santa Barbara California</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://horizonservices.org/cherry-hill-detoxification-program-services/">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "El Paso County Community Detoxification Facility",
            location: {lat: 38.833882, lng: -104.821363},
            city: "Colorado Springs Colorado",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">El Paso County Community Detoxification Facility</p>'+
            '<p class="markerHeading" id="centerCity">Colorado Springs Colorado</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://dhs.elpasoco.com/detox/Pages/default.aspx">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "CASPAR Inc. Emergency Services Center",
            location: {lat: 42.373616, lng: -71.109734},
            city: "Cambridge Massachusetts",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">ECASPAR Inc. Emergency Services Center</p>'+
            '<p class="markerHeading" id="centerCity">Cambridge Massachusetts</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://www.casparinc.org/">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "SMOC Triage/Assessment Center",
            location: {lat: 42.262593, lng: -71.802293},
            city: "Worcester Massachusetts",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">SMOC Triage/Assessment Center</p>'+
            '<p class="markerHeading" id="centerCity">Worcester Massachusetts</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://www.cominghomeworcester.org/worcester-triage-and-assessment-center-smoc/">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "CARE Connection Sobering Center",
            location: {lat: 35.365370, lng: -105.969988},
            city: "Santa Fe County New Mexico",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">CARE Connection Sobering Center</p>'+
            '<p class="markerHeading" id="centerCity">Santa Fe County New Mexico</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://www.santafecountynm.gov/community_services/hhsd/care_connection">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "Metropolitan Assessment and Treatment Services (MATS)",
            location: {lat: 35.085334, lng: -106.605553},
            city: "Albuquerque New Mexico",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">Metropolitan Assessment and Treatment Services (MATS)</p>'+
            '<p class="markerHeading" id="centerCity">Albuquerque New Mexico</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://www.bernco.gov/substance-abuse-programs/public-inebriate-intervention-program.aspx">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "Willamette Family Sobering Station/Buckley Center",
            location: {lat: 44.052069, lng: -123.086754},
            city: "Eugene Oregon",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">Willamette Family Sobering Station/Buckley Center</p>'+
            '<p class="markerHeading" id="centerCity">Eugene Oregon</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://arnelalarcon.com/wf_2010/sobering_station.html">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "Central City Concern Sobering Station",
            location: {lat: 45.523062, lng: -122.676482},
            city: "Portland Oregon",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">entral City Concern Sobering Station</p>'+
            '<p class="markerHeading" id="centerCity">Portland Oregon</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://www.centralcityconcern.org/services/health-recovery/sobering-station-chiers/index.html">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "Room in the Inn",
            location: {lat: 36.162664, lng: -86.781602},
            city: "Nashville Tennessee",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">Room in the Inn</p>'+
            '<p class="markerHeading" id="centerCity">Nashville Tennessee</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://www.roomintheinn.org/need-help">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "Dallas Serial Inebriate Program",
            location: {lat: 32.776664, lng: -96.796988},
            city: "Dallas Texas",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">Dallas Serial Inebriate Program</p>'+
            '<p class="markerHeading" id="centerCity">Dallas Texas</p>'+
            '<div id="markerContent">'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "Star of Hope/Houston Recovery Center",
            location: {lat: 29.760427, lng: -95.369803},
            city: "Houston Texas",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">Star of Hope/Houston Recovery Center</p>'+
            '<p class="markerHeading" id="centerCity">Houston Texas</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://houstonrecoverycenter.org/">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "Dutch Shisler Sobering Support Center",
            location: {lat: 47.606209, lng: -122.332071},
            city: "Seattle Washington",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">Dutch Shisler Sobering Support Center</p>'+
            '<p class="markerHeading" id="centerCity">Seattle Washington</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://www.kingcounty.gov/healthservices/SubstanceAbuse/Services/Intervention/DutchShisler.aspx">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        {
            name: "Sobering Center of Tacoma (MDC)",
            location: {lat: 47.252877, lng: -122.444291},
            city: "Tacoma (Pierce County) Washington",
            content: '<div id="content">'+
            '<div id="header">'+
            '<p class="markerHeading" id="centerName">SSobering Center of Tacoma (MDC)</p>'+
            '<p class="markerHeading" id="centerCity">Tacoma (Pierce County) Washington</p>'+
            '<div id="markerContent">'+
            '<p><a href="http://www.jacksonhealthcare.com/awards/community/program-database/sobering-center-of-tacoma/">'+
            'Go to the website </a></p>'+
            '</div>'+
            '</div>'+
            '</div>'
        }
        ];
    for (var i = 0; i < res.length; i++) {
        //console.log(res[i]);
        createMarker(res[i]);
    }

}
function createMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.location,
    });

    marker.addListener("click", function() {
        infowindow.setContent(place.content);
        infowindow.open(map, this);
    })
}
$.get('/news/add', function (response) {
    //console.log(response);
    var recent_news = $('#recent-news');

    var news1 = response[response.length - 1];
    var news2 = response[response.length - 2];
    var news3 = response[response.length - 3];

    var row = $("<div></div>").attr({"class": "row", "style": "margin-left:50px;margin-right:50px;"});

    var header = $("<div></div>").attr({"style": "margin: auto; boarder-right: solid 10px; color: white;", "class": "lead"}).html("Recent News");

    var title1 = $("<div></div>").attr({"class":"row", "style": "font-size:30px;font-weight:500;color:#4e4b4b;height:120px;"}).html(news1.title);
    var title2 = $("<div></div>").attr({"class":"row", "style": "font-size:30px;font-weight:500;color:#4e4b4b;height:120px;"}).html(news2.title);
    var title3 = $("<div></div>").attr({"class":"row", "style": "font-size:30px;font-weight:500;color:#4e4b4b;height:120px;"}).html(news3.title);
    var date1 = new Date(news1.date);
    var date2 = new Date(news2.date);
    var date3 = new Date(news3.date);

    var dateContent1 = $("<div></div>").attr({"class": "row", "style": "height:50px; font-size:20px;"}).html(date1.getMonth() + "/" + date1.getDay() + "/" + date1.getFullYear());
    var dateContent2 = $("<div></div>").attr({"class": "row", "style": "height:50px; font-size:20px;"}).html(date2.getMonth() + "/" + date2.getDay() + "/" + date2.getFullYear());
    var dateContent3 = $("<div></div>").attr({"class": "row", "style": "height:50px; font-size:20px;"}).html(date3.getMonth() + "/" + date3.getDay() + "/" + date3.getFullYear());

    var col1 = $("<div></div>").attr({"class": "col-md-3 header", "style": "height:300px;"});
    var col2 = $("<div></div>").attr({"class": "col-md-3 col2", "style": "height:300px;"});
    var col3 = $("<div></div>").attr({"class": "col-md-3 col3", "style": "height:300px;"});
    var col4 = $("<div></div>").attr({"class": "col-md-3 col4", "style": "height:300px;"});
    col1.append(header);
    col2.append(title1).append(dateContent1);
    col3.append(title2).append(dateContent2);
    col4.append(title3).append(dateContent3);
    row.append(col1).append(col2).append(col3).append(col4);
    recent_news.append(row);
});

