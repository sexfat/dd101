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

// scrollmagic
var controller = new ScrollMagic.Controller();




//動畫1
var tl = new TimelineMax({
//    repeat: 1
//    yoyo: true,
//    onComplete: alerts
});

tl.to('.third_01', 1, {
    x: 300
}).to('.third_02', 1, {
    y: 300
}).to('.third_03', 1 , {
    x:100,
    y: 100
})

var secen_01 = new ScrollMagic.Scene({
    triggerElement:'#keypoint',
    // duration: 800,
    reverse:true,
    triggerHook: 0,
    offset: 200 
}).setTween(tl)
.addIndicators()
.addTo(controller)



//動畫2


var animation_02 = TweenMax.to('.textfont' , 1 , {
    y: 600,
    ease: Bounce.easeOut 
})


var secen_02 = new ScrollMagic.Scene({
    triggerElement:'#keypoint01',
    // duration: 800,
    // reverse:true,
    triggerHook: 0,
    // offset: 200 
}).setClassToggle('.section_02','on').setTween(animation_02)
.addIndicators()
.addTo(controller)







var tlts = new TimelineMax();

    tlts.add(TweenMax.to('.scrollbox_01', 1, {
        left: '100px',
    }));
    tlts.add(TweenMax.to('.scrollbox_02', 1, {
        x: 300,
    }));
    tlts.add(TweenMax.to('.scrollbox_03', 1, {
        x: 400,
    }));


    var scene_s = new ScrollMagic.Scene({
        triggerElement: "#trigger_05",
        duration: '300%',
        //畫面最上緣
        triggerHook: 0,
        //只出現一次
        // reverse: false,
    })
    .setPin('.section_08')
    .setTween(tlts)
    .addIndicators()
    .addTo(controller);























console.log("end ok");

