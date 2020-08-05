int cols,rows;
int scl=20;
float [][] terrain;
float flying = 0;
void setup(){
  
    size(600,600,P3D);
    int w = 800;
    int h=1800;
    cols=w/scl;
    rows=h/scl;
    terrain = new float[cols][rows];
    
}

void draw(){
   float yOff= flying;
     for(int y=0;y<rows;y++){
       float xOff=0;
       for(int x=0;x< cols;x++){
           terrain[x][y]=map(noise(xOff,yOff),0,1,-50,50);
           xOff+=0.2;
       }
       yOff+=0.2;
     }
   background(#ADF7FF);
   translate(0,height/5);
   rotateX(PI/3);
   for(int y=0;y<rows-1;y++){
     beginShape(TRIANGLE_STRIP);
     for(int x=0;x< cols;x++){
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
