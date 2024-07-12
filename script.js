const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var xscale=1;
var yscale=1;

var xprev=0;
var yprev=0;

var stoper;
window.addEventListener("mousemove",function (cdts) {
    clearTimeout(stoper);
    var xdiff = Math.abs(cdts.clientX - xprev);
    var ydiff = Math.abs(cdts.clientY - yprev);
    document.querySelector("#minicircle").style.transform = `translate(${cdts.clientX}px,${cdts.clientY}px) scale(${gsap.utils.clamp(.6,1.5,xdiff)},${gsap.utils.clamp(.6,1.5,ydiff)})`;
    xprev = cdts.clientX;
    yprev = cdts.clientY;
    stoper = setTimeout(function (){
        document.querySelector("#minicircle").style.transform = `translate(${cdts.clientX}px,${cdts.clientY}px) scale(1,1)`;
    },100)
});
document.querySelectorAll('.card').forEach(function(elem){
    elem.addEventListener('mouseenter',()=>{
        document.querySelector('#minicircle').style.height = '50px';
        document.querySelector('#minicircle').style.width = '50px';
        document.querySelector('#minicircle').textContent = 'view'; // Add text "view"
    })
    elem.addEventListener('mouseleave',()=>{
        document.querySelector('#minicircle').style.height = '15px';
        document.querySelector('#minicircle').style.width = '15px';
        document.querySelector('#minicircle').textContent = ''; // Remove text
    })
});
var prev=0;
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('mouseenter', function(){
        card.addEventListener('mousemove', function(dets){
            var diff=dets.clientX - prev;
            var yax =dets.clientY-card.getBoundingClientRect().top;
            // console.log(gsap.utils.clamp(-10,10,diff));
            // card.querySelector('img').style.transform = `translate(rotate(${diff*1.5}deg)`;
            // card.querySelector('img').style.opacity = 1;
            // prev=dets.clientX;
            gsap.to(card.querySelector("img"), {
                opacity: 1,
                // ease: Power3,
                top: yax,
                left: dets.clientX,
                rotate:diff
            });
        });
    });
    card.addEventListener('mouseleave',function(){
        gsap.to(card.querySelector("img"), {
            opacity: 0  
        });
    });
});