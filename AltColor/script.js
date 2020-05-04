var wrapper = document.getElementById("list-wrapper")

wrapper.addEventListener('mousemove', function(event){
    var x = event.offsetX;
    var y = event.offsetY;
    wrapper.style.backgroundColor = `rgb(${x},${y},40)`;

}); 
