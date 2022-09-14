function getCurrentURL () {
    return window.location.href
  }

document.getElementById("play").onclick = function() {
    const hrefurl = getCurrentURL() + "/game"
    window.location.href = hrefurl;

    
    window.location.replace(hrefurl);
}

window.onload = function() {
    document.getElementById('pb').innerText = window.localStorage.getItem('pb')

}