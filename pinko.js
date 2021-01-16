var pinko=createSprite(20,20,10,10);
pinko.shapeColour="white";
this.trajectory;
if(this.body.velocity.x>10 && this.body.position.x>200){
      
      var position=[this.body.position.x,this.body.position.y];

          this.trajectory.push(position);
    }

