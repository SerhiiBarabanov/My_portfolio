'use strict';

window.addEventListener('DOMContentLoaded', initMap);

function initMap() {
            var options = {
                center: { lat: 29.629505, lng: -96.059929 },
                zoom: 15,
                disableDefaultUI: true
            }
            var map = new google.maps.Map(document.getElementById('map'), options);
            function m(coordinates) {
                var marker = new google.maps.Marker({
                    position: { lat: coordinates.position.lat, lng: coordinates.position.lng },
                    map: coordinates.map
                })
            }  
        }