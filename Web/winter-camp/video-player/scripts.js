// Get the elements
const container = document.querySelector('.player')
const player = document.querySelector('.player__video')
const button = container.querySelector('.toggle')
let pause=true;

// Build the functions
function toggle(){
    let status = pause ? 'play' : 'pause' ;
    player[status]();
    button.innerText =pause ? '❚❚' : '►';
    pause=!pause;
}
function keyToggle(e)
{
    console.log(e);
    if(e.keyCode===32)
    toggle();
}
// Hook up the event listeners
button.addEventListener('click',toggle);  
document.addEventListener('keypress',keyToggle);

