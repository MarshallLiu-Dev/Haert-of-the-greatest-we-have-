/* heart in html and css written I love you you're the best 
var heart = document.createElement('div');
heart.innerHTML = '<div class="heart">&hearts;</div>';
document.body.appendChild(heart);
var style = document.createElement('style');
style.innerHTML = '.heart { font-size: 100px; color: red; }';
document.body.appendChild(style);
var text = document.createElement('div');
text.innerHTML = 'I love you you\'re the best';
document.body.appendChild(text);


heart */ 



// add a click event listener to the heart element

document.getElementById("heart").addEventListener("click", function() {
  
    // toggle the class 'heart-beat' to add or remove the animation
  this.classList.toggle("heart-beat");
});


