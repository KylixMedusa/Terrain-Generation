
var cols,rows;
var scl=20;
var terrain = [];
var flying = 0;

function setup() {
  createCanvas(600,600,WEBGL);
  
    var w = 800;
    var h=1800;
    cols=w/scl;
    rows=h/scl;
   for(let y=0;y<cols;y++){
       terrain[y] = []
       for(let x=0;x< rows;x++){
           terrain[y][x]=0;
       }
     }
}

function draw() {
  background(0);
  var yOff= flying;
     for(var y=0;y<rows;y++){
       var xOff=0;
       for(var x=0;x< cols;x++){
           terrain[x][y]=map(noise(xOff,yOff),0,1,-50,50);
           xOff+=0.2;
       }
       yOff+=0.2;
     }
   translate(-width/2,0);
   rotateX(PI/3);
   for(let y=0;y<rows-1;y++){
     beginShape(TRIANGLE_STRIP);
     for(let x=0;x< cols;x++){
         vertex(x*scl,y*scl,terrain[x][y]);
         vertex(x*scl,(y+1)*scl,terrain[x][y+1]);
         stroke(0);
         fill(180,25,25);
         //rect(x*scl,y*scl,scl,scl);
         
     }
     endShape();
   }
   flying-=0.05;
}