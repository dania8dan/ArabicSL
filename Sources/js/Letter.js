
// Get the image and insert it inside the modal 
function full(bb)
{
     var bbb=bb.id;
    
var btn =  document.getElementById(bbb);
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var ImgSrc="images/"+btn.id+".gif";
var Aud=document.getElementById("aud");
 Aud.src="recordes/"+btn.id+".mp3"; 
 modalImg.src =ImgSrc;
  modal.style.display = "block";
  }
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the moda.
span.onclick = function() {
  modal.style.display = "none";
 
}

function playAudio(AA) { 
  var nn=AA.id;
  var x = document.getElementById(nn); 
  x.volume=0.4;
  x.play(); 
} 
function pauseAudio(AAA) {
  var nnn=AAA.id;
  var x = document.getElementById(nnn); 
  x.volume=0.8;
  x.pause(); 
} 
 


