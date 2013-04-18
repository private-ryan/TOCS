// JavaScript Document

function load() {
      if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map"));
        map.setCenter (new GLatLng(51.228549,-2.325175), 16);

var marker = new GMarker(new GLatLng(51.228549,-2.325175));
map.addOverlay(marker);
var html="<img src='/logo.jpg'" +
         "width='181' height='30'/> <br/>" +
         "The Old Church School<br/>" +
         "Butts Hill, Frome, BA11 1HR";
marker.openInfoWindowHtml(html);
map.addControl(new GSmallMapControl());

      }
    }