var videodisplay = document.getElementById("videodisplay")



var songs = ['"<iframe width="560" height="315" src="https://www.youtube.com/embed/LHCob76kigA?list=PLrZAPNPQEflMl0ITZURscKoOBVQaKd3-N" frameborder="0" allowfullscreen></iframe>"', '"<iframe width="560" height="315" src="https://www.youtube.com/embed/UwGypUTEP4M?list=PLrZAPNPQEflMl0ITZURscKoOBVQaKd3-N" frameborder="0" allowfullscreen></iframe>"', '"<iframe width="560" height="315" src="https://www.youtube.com/embed/HdAkYCyCZv8?list=PLrZAPNPQEflMl0ITZURscKoOBVQaKd3-N" frameborder="0" allowfullscreen></iframe>"', '"<iframe width="560" height="315" src="https://www.youtube.com/embed/MNxbSTme6PI?list=PLrZAPNPQEflMl0ITZURscKoOBVQaKd3-N" frameborder="0" allowfullscreen></iframe>"'];

var music = ['"<iframe width="560" height="315" src="https://www.youtube.com/embed/hT_nvWreIhg?list=PLgmZTiw2ez08UTLDugFpr1mHxqEpIHAVR" frameborder="0" allowfullscreen></iframe>"', '"<iframe width="560" height="315" src="https://www.youtube.com/embed/qHm9MG9xw1o?list=PLgmZTiw2ez08UTLDugFpr1mHxqEpIHAVR" frameborder="0" allowfullscreen></iframe>"', '"<iframe width="560" height="315" src="https://www.youtube.com/embed/jZhQOvvV45w?list=PLgmZTiw2ez08UTLDugFpr1mHxqEpIHAVR" frameborder="0" allowfullscreen></iframe>"', '"<iframe width="560" height="315" src="https://www.youtube.com/embed/qrOeGCJdZe4?list=PLgmZTiw2ez08UTLDugFpr1mHxqEpIHAVR" frameborder="0" allowfullscreen></iframe>"'];

var sounds = ['"<iframe width="560" height="315" src="https://www.youtube.com/embed/yRfQGXFRr30?list=PLnGQBdT-9C4Kui5j9Ohxn_5mRI_gnIhVx" frameborder="0" allowfullscreen></iframe>"', '"<iframe width="560" height="315" src="https://www.youtube.com/embed/NEGp5XRl8v0?list=PLnGQBdT-9C4Kui5j9Ohxn_5mRI_gnIhVx" frameborder="0" allowfullscreen></iframe>"', '"<iframe width="560" height="315" src="https://www.youtube.com/embed/mFT8KCqhnyw?list=PLnGQBdT-9C4Kui5j9Ohxn_5mRI_gnIhVx" frameborder="0" allowfullscreen></iframe>"', '"<iframe width="560" height="315" src="https://www.youtube.com/embed/bJJeiCC5JlI?list=PLnGQBdT-9C4Kui5j9Ohxn_5mRI_gnIhVx" frameborder="0" allowfullscreen></iframe>"'];


var luckasgraham = document.getElementById("luckasgraham");

var onerepublic = document.getElementById("onerepublic");

var joybadass = document.getElementById("joybadass");

luckasgraham.addEventListener("click", function() {
    var item = songs[Math.floor(Math.random() * songs.length)];
    videodisplay.innerHTML = item
})
onerepublic.addEventListener("click", function() {
    var item = music[Math.floor(Math.random() * music.length)];
    videodisplay.innerHTML = item
    
    joybadass.addEventListener("click", function() {
    var item = sounds[Math.floor(Math.random() * sounds.length)];
    videodisplay.innerHTML = item
})
});