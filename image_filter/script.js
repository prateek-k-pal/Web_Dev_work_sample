function dark(){
  (document.getElementById("body")).className = "dark";
}

function light(){
  (document.getElementById("body")).className = "light";
}

function roseanna(){
  (document.getElementById("body")).className = "roseanna";
}

function sexyblue(){
  (document.getElementById("body")).className = "sexyblue";
}

function purplelove(){
  (document.getElementById("body")).className = "purplelove";
}

function shadesofgrey(){
  (document.getElementById("body")).className = "shadesofgrey";
}

function lostmemory(){
  (document.getElementById("body")).className = "lostmemory";
}

function lush(){
  (document.getElementById("body")).className = "lush";
}

function greenbeach(){
  (document.getElementById("body")).className = "greenbeach";
}

function frost(){
  (document.getElementById("body")).className = "frost";
}
var image;
function upload(){
  var x = document.getElementById("f1");
  var can1 = document.getElementById("can1");
  image = new SimpleImage(x);
  image.drawTo(can1);
}

function grayscale(){
  for(var pixel of image.values()){
    var x = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(x);
    pixel.setGreen(x);
    pixel.setBlue(x);
  }
  var can2 = document.getElementById("can2");
  image.drawTo(can2);
}

function rainbow1(){
  var w = image.getWidth();
  var h = image.getHeight();
  var x = h/7;
  for(var pixel of image.values()){
    var y = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/1.3;
    if (pixel.getY() <= x){
      pixel.setRed(0.58*y);
      pixel.setGreen(0);
      pixel.setBlue(0.827*y);
    }
    else if (pixel.getY() <= 2*x){
      pixel.setRed(0.294*y);
      pixel.setGreen(0);
      pixel.setBlue(0.51*y);
    }
    else if (pixel.getY() <= 3*x){
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(y);
    }
    else if (pixel.getY() <= 4*x){
      pixel.setRed(0);
      pixel.setGreen(y);
      pixel.setBlue(0);
    }
    else if (pixel.getY() <= 5*x){
      pixel.setRed(y);
      pixel.setGreen(y);
      pixel.setBlue(0);
    }
    else if (pixel.getY() <= 6*x){
      pixel.setRed(y);
      pixel.setGreen(0.5*y);
      pixel.setBlue(0);
    }
    else if (pixel.getY() <= 7*x){
      pixel.setRed(y);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
  }
  var can2 = document.getElementById("can2");
  image.drawTo(can2);
}

function rainbow2(){
  var canvas = document.getElementById("can2");
  var can = canvas.getContext("2d");
  image.drawTo(canvas);
  var c = can.createLinearGradient(0,0,image.getWidth(),image.getHeight());
  c.addColorStop(0,"#9C4F96");
  c.addColorStop(0.3,"#FF6355");
  c.addColorStop(0.5,"#FBA949");
  c.addColorStop(0.7,"#FAE442");
  c.addColorStop(0.9,"#8BD448");
  c.addColorStop(1,"#2AA8F2");
  can.fillStyle = c;
  can.globalAlpha = 0.8;
  can.fillRect(0,0,image.getWidth(),image.getHeight());
}

function coolblue1(){
  for(var pixel of image.values()){
    var x = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/1.5;
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(x);
   }
   image.drawTo(document.getElementById("can2"));
}

function hotred(){
  for(var pixel of image.values()){
    var x = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/1.5;
    pixel.setRed(x);
    pixel.setGreen(0);
    pixel.setBlue(0);
   }
   image.drawTo(document.getElementById("can2"));
}

function sunnyyellow(){
  for(var pixel of image.values()){
    var x = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/1.5;
    pixel.setRed(x);
    pixel.setGreen(x);
    pixel.setBlue(0);
   }
   image.drawTo(document.getElementById("can2"));
}

function blurimage(){
  image.drawTo(document.getElementById("can2"));
  document.getElementById("can2").className = "can1";
}

function window1(){
  for (var pixel of image.values()){
    if ((pixel.getX() <= (image.getWidth()/15) || pixel.getX() > (image.getWidth() - (image.getWidth()/15)) || pixel.getX() >= ((image.getWidth()/2) - (image.getWidth()/25)) && pixel.getX() < ((image.getWidth()/2) + (image.getWidth()/25))) || (pixel.getY() <= (image.getHeight()/10) || pixel.getY() > (image.getHeight() - (image.getHeight()/10)) || pixel.getY() >= ((image.getHeight()/2) - (image.getHeight()/20)) && pixel.getY() < ((image.getHeight()/2) + (image.getHeight()/20)))){
      
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
      
    }
  }
  image.drawTo(document.getElementById("can2"));
}

function rainbowwindow1(){
  var canvas = document.getElementById("can2");
  var can = canvas.getContext("2d");
  image.drawTo(canvas);
  var c = can.createLinearGradient(0,0,image.getWidth(),image.getHeight());
  c.addColorStop(0,"#9C4F96");
  c.addColorStop(0.3,"#FF6355");
  c.addColorStop(0.5,"#FBA949");
  c.addColorStop(0.7,"#FAE442");
  c.addColorStop(0.85,"#8BD448");
  c.addColorStop(1,"#2AA8F2");
  can.fillStyle = c;
  can.fillRect(0,0,image.getWidth(),(image.getHeight()/15));
  can.fillRect(0,0,(image.getWidth()/25),image.getHeight());
  can.fillRect((image.getWidth() - (image.getWidth()/25)), 0,(image.getWidth()/25),image.getHeight());
  can.fillRect((image.getWidth()/2 - (image.getWidth()/50)), 0,(image.getWidth()/25),image.getHeight());
  can.fillRect(0, (image.getHeight() - (image.getHeight()/15)), image.getWidth(), (image.getHeight()/15));
  can.fillRect(0, (image.getHeight()/2 - (image.getHeight()/30)), image.getWidth(), (image.getHeight()/15));
}

function clearCanvas(){
  document.getElementById("can1").getContext("2d").clearRect(0,0,image.getWidth(),image.getHeight());
document.getElementById("can2").getContext("2d").clearRect(0,0,image.getWidth(),image.getHeight());
  image = null;
}

function clearCanvas1(){
  document.getElementById("can1").getContext("2d").clearRect(0,0,image.getWidth(),image.getHeight());
  image = null;
}

function clearCanvas2(){ document.getElementById("can2").getContext("2d").clearRect(0,0,image.getWidth(),image.getHeight());
}

//image.getPixel(image.getWidth() - 1,0).getX()
