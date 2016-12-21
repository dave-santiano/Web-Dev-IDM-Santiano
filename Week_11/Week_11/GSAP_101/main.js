// This is where we will write our animation js

// grab the soccer ball image/element for animation
var sb = document.getElementById("sb");
// var bball = document.getElementById("bball");
// tweenmax object TO method to animate over 3 seconds and change its position
// TweenMax.to(sb, 3, {x:800, y:-500, rotation: 720, scale:0.5, ease: Elastic.easeOut}, 0.5);

TweenMax.staggerTo(".bball", 1, {y:500, rotation: 360, delay: 0, ease: Bounce.easeOut},0.5);