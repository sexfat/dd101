

console.log('start');

TweenMax.to('.box_01', 1, {
    delay: 0,
    repeat: -1,
    //   rotation: 360,
    ease: Power0.easeNone,
    //   repeatDelay: 1,
    //   yoyo: true,
    transformOrigin: '50% 50%'

});

TweenMax.from('.box_02', 1, {
    x: 300
});



    TweenMax.fromTo('.box_03', 1, {
        y: 400
    }, {
        x: 300,
        ease: Power0.easeNone,
    });




    
TweenMax.staggerFromTo(['.same01' , '.same02'], 1, {
    x: 100
}, {
    x: 300,
},1);

function alerts() {
    alert();
}


var tl = new TimelineMax({
   repeat: 2,
   yoyo: true,
   onComplete: alerts
});

tl.to('.third_01', 1, {
    x: 300
}).to('.third_02', 1, {
    y: 300
}).to('.third_03', 1 , {
    x:100,
    y: 100
})














