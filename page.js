window.addEventListener(
    'load',
    start)
    function changeColor(event_click){
        console.log(event_click.clientX);
        console.log(event_click.clientY);
        event_click.currentTarget.style.backgroundColor = 'yellow';
    
}
function changeColor(event_title){
    console.log(event_title.clientX);
    console.log(event_title.clientY);
    event_title.currentTarget.style.backgroundColor = 'red';

}
function changeColor(event_paragraph){
    console.log(event_paragraph.clientX);
    console.log(event_paragraph.clientY);
    event_paragraph.currentTarget.style.backgroundColor = 'blue';

}
function start(event_start){
   
    knopka.addEventListener(
    'click',
    
    );
    title.addEventListener(
        'click',
        changeColor    
    );
   paragraph.addEventListener(
    'click',
    changeColor
   );
}