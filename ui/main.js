console.log('Loaded!');


// Change the text of the main-text div

//var element = document.getElementById('main-text');
//element.innerHTML = 'New value';


//Move the image
/*
var img = document.getElementById('madi');
var marginLeft =0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
    
};

*/


var button = document.getElementById('counter');
button.onclick = function(){
    var counter;
    counter=counter+1;
    var span =document.getElementById('count');
    count.innerHTML=counter;
} 