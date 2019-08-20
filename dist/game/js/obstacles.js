var Obstacles = function(){
    this.type = [];
    this.x = [];
    this.y = [];
    this.alive = [];
    this.image = new Image()
    this.timer = 0;
    this.num = 20;
    this.count = 0 
    this.width = canvasHeight/3-50
    this.interval =  200 
    this.score = 0;
}
Obstacles.prototype.init = function(){
    for (var i = 0;i<this.num;i++){
        this.alive[i] = false;
        this.x[i] = canvasWidth;
        this.y[i] = 0;
        this.type = Math.random()
        this.image.src =  "./src/ob.jpg"
    }
}
Obstacles.prototype.draw = function(){
    if (man.alive == true ){
        this.timer += deltaTime;
        if (this.timer > this.interval){
            
            for(var i = 0 ;i<this.num;i++){
                if (this.alive[i] == true){
                    this.x[i] -= 50
                }
            }
            this.count = this.count + 1
            this.score = this.score + 1
            if (this.count==10){
                if (Math.random()<0.5){
                    this.born(1)
                }else{
                    this.born(2)
                }
                this.count = 0
            }
            this.timer = 0
        }
        
        if (this.score%100 == 1){
            if (this.interval >50){
            this.interval = this.interval - 10
            }
        }
        for(var i = 0 ;i<this.num;i++){
            if (this.alive[i] == true){
                ctx2.save();
                ctx2.translate(this.x[i],this.y[i]);
                ctx2.drawImage(this.image,-this.width/2,-this.width/2,this.width,this.width);
                ctx2.restore()
                
                if (this.x[i] < - 100 ){
                    this.alive[i] = false
                }
            }
        }
    }
    
}
Obstacles.prototype.born = function(i){

    for (var num = 0;num<i;num++ ){

        for (var index = 0; index<this.num;index++){
            if (this.alive[index] == false){
                this.alive[index] = true;
                var id = Math.random();
                if (id < 0.33){
                    this.y[index] = canvasHeight/6
                }else if (id<0.66){
                    this.y[index] = canvasHeight/2
                }else{
                    this.y[index] = canvasHeight/6*5
                }
                this.x[index] = canvasWidth;
                break;
            }
        }
    }
    
}
