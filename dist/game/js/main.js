document.body.onload = game;
var can1;
var can2;
var ctx1;
var ctx2;
var lastTime;
var deltaTime;
var backgroundPic = new Image()
var canvasWidth ;
var canvasHeight;
var man;
var fruit;
var y = 3;
function game(){
    init()
    gameLoop()
}
function init(){
    //获得canvas
    can1 = document.getElementById("canvas1");
    ctx1 = can1.getContext("2d");
    // can1.addEventListener("onkeydown",onkeydown,false)
    can2 = document.getElementById("canvas2");
    ctx2 = can2.getContext("2d");
    canvasWidth = can1.width;
    canvasHeight = can1.height;
    backgroundPic.src = "./src/background.jpg";
    lastTime =  Date.now();
    man = new manObj()
    man.init()
    fruit = new Obstacles();
    fruit.init();
 
}
function gameLoop(){
    window.requestAnimationFrame(gameLoop);
    var now = Date.now();
    ctx1.clearRect(0,0,canvasWidth,canvasHeight)
    deltaTime = now - lastTime;
    lastTime = now;
    background()
    man.draw();
    fruit.draw();
    isalive()
    // document.onkeydown=function(event){
    //     3             var e = event || window.event || arguments.callee.caller.arguments[0];
    //     4             if(e && e.keyCode==27){ // 按 Esc 
    //     5                 //要做的事情
    //     6               }
    //     7             if(e && e.keyCode==113){ // 按 F2 
    //     8                  //要做的事情
    //     9                }            
    //    10              if(e && e.keyCode==13){ // enter 键
    //    11                  //要做的事情
    //    12             }
    //    13         }; 
    
}
document.onkeydown = function(event) {

    if (event.keyCode == 40){
        if (y<5){
            y = y+2 
        }
        
    }else if (event.keyCode == 38){
        if (y>1){
            y = y-2 
        }
    }
}
// function onkeydown(e){

//     if (e.keyCode == 40){
//         if (y<5){
//             y = y+2 
//         }
        
//     }else if (e.keyCode == 38){
//         if (y>1){
//             y = y-2 
//         }
//     }
// }