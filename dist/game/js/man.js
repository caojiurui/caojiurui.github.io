var manObj = function(){
    this.x =  canvasHeight/3 - 100
    this.y = canvasHeight/2 
    this.headx = canvasWidth/2
    this.heady = canvasHeight/2 
    this.width = canvasHeight/3 - 50
    this.alive = true
    this.image = [];
    this.head = new Image()
    this.timer = 0
    this.imageIndex = 0;
}
manObj.prototype.init = function(){
    for(var i = 0 ;i < 4 ;i++){
    this.image[i] = new Image();

    this.image[i].src = "./src/frame-"+(i+1)+".jpg";
    }
    this.head.src = "./src/head.png"
}
manObj.prototype.draw = function(){
    if (this.alive == true ){
        this.y = canvasHeight/6*y;
    this.timer += deltaTime
    if (this.timer > 50){
        this.imageIndex = (this.imageIndex + 1)%4
        this.timer = this.timer%50
    }
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.drawImage(this.image[this.imageIndex],-this.width/2,-this.width/2,this.width,this.width);
    ctx1.drawImage(this.head,-this.width/2+(Math.random() * 3),-(this.width/8*3)+(Math.random() * 3),this.width,this.width/2);
    ctx1.restore()
    }
    
}
function  isalive(){
    for (var i = 0;i<fruit.num;i++){
        if (fruit.alive[i] == true){
            if (distance(fruit.x[i],fruit.y[i],man.x,man.y,canvasHeight/3-40) == true){
                man.alive = false
                ctx1.fillStyle = "white";
                ctx1.font = "80px Verdana";
                ctx1.textAlign = "center";
                ctx1.fillText("Game Over" ,can1.width/2,can1.height/2)
                ctx1.fillText("得分:"+fruit.score ,can1.width/2,can1.height/2+80)
                 
                break;
            }
        }
    }
}
function distance(x1, y1, x2, y2, l) {
	var x = Math.abs(x1 - x2);
	var y = Math.abs(y1 - y2);
	if (x < l && y < l) {
        return true;
        
	}
	return false;
}