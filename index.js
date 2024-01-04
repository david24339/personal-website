document.addEventListener('DOMContentLoaded', function() {
    console.log('Yeaahhh'); 
    const el = document.getElementById('hover');
    const el1 = document.getElementById('hover1');
    const el2 = document.getElementById('hover2');
    const el3 = document.getElementById('hover3');

    //const bar1=document.getElementById('bar1');
    const bar2=document.getElementById('bar2');
    const bar3=document.getElementById('bar3');

    const proj = document.getElementById('projects');
    const skill = document.getElementById('skills');



    document.getElementById('header').style.height = `${window.innerHeight}px`;

    if(window.innerWidth >=576 && window.innerWidth <= 767){

        el.addEventListener('mouseover', () => {
            moveup(el);
        });
        el1.addEventListener('mouseover', () => {
            moveup(el1);
        });
        el2.addEventListener('mouseover', () => {
            moveup(el2);
        });
        el3.addEventListener('mouseover', () => {
            moveup(el3);
        });

        proj.addEventListener('mouseover', () => {
            movebar(bar2);
        });

        skill.addEventListener('mouseover', () => {
            movebar(bar3);
        });

    }

    else if(window.innerWidth <576){
        el.addEventListener('touchstart', () => {
            moveup(el);
        });
        el1.addEventListener('touchstart', () => {
            moveup(el1);
        });
        el2.addEventListener('touchstart', () => {
            moveup(el2);
        });
        el3.addEventListener('touchstart', () => {
            moveup(el3);
        });

        proj.addEventListener('touchstart', () => {
            movebar(bar2);
        });

        skill.addEventListener('touchstart', () => {
            movebar(bar3);
        });
    }

    else{
        proj.addEventListener('mouseover', () => {
            moveup(el);
            moveup(el1);
            moveup(el2);
            moveup(el3);
            movebar(bar2);
        });

        skill.addEventListener('mouseover', () => {
            movebar(bar3);
        });

    }
 
});


function moveup(x){
    x.style.animationPlayState= 'running'; 
}

function movebar(y){
    y.style.animationPlayState= 'running';
}