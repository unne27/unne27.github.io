function initialize() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 0, lng: 0},
        zoom: 2,
        disableDefaultUI: true,
        
      });
    document.getElementById("map").style = ""
/*    for (let i = 0; i < positions.length; i++) {
      console.log(i)
        var marker = new google.maps.Marker({
            position: positions[i],
            map,
            title: positions[i]["lat"].toString() + ", " + positions[i]["lng"].toString(),
          })
    } */

    map.addListener("click", (mapsMouseEvent) => {
     //   navigator.permissions.query({name: "clipboard-write"}).then((result) => {
       //     if (result.state === "granted" || result.state === "prompt") {
              var newstr = "{lat: " + mapsMouseEvent.latLng.lat + ", lng: " + mapsMouseEvent.latLng.lng + "}"
              updateClipboard(newstr)
              var marker = new google.maps.Marker({
                position: mapsMouseEvent.latLng,
                map
              })
         //   }
         // });
      });
    
    document.getElementById("map").style = ""
}

function onload() {
  document.getElementById("map").style = ""
}


function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(() => {
      /* clipboard successfully set */
    }, () => {
      /* clipboard write failed */
    });
  }
  

window.initialize = initialize
window.onload = onload