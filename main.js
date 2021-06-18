var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
blockimagewidth=30;
blockimageheight=30;
var player_object="";
var blockimageobject="";
function playerupdate() {
    fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
});
}
function newImage(getImage) {
    fabric.Image.fromURL(getImage,function(Img){
   blockimageobject=Img;
    blockimageobject.scaleToWidth(blockimagewidth);
    blockimageobject.scaleToHeight(blockimageheight);
    blockimageobject.set({
        top:player_y,
        left:player_x
    }); 
    canvas.add(blockimageobject);
});
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e) {
    keypressed=e.keyCode;
    if (e.shiftKey==true&&keypressed=='80') {
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
        document.getElementById("currentWidth").innerHTML=blockimagewidth;
        document.getElementById("currentHeight").innerHTML=blockimageheight;

    }
    if (e.shiftKey&&keypressed=='77') {
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
        document.getElementById("currentWidth").innerHTML=blockimagewidth;
        document.getElementById("currentHeight").innerHTML=blockimageheight;
    }
    if(keypressed=='38' ) {
        up();
    }
    if(keypressed=='39' ) {
        right();
    }
    if(keypressed=='37' ) {
        left();
    }
    if(keypressed=='40' ) {
    down();
    }
    if(keypressed=='87' ) {
        newImage("wall.jpg");
    }
    if(keypressed=='71' ) {
        newImage("ground.png");
    }
    if(keypressed=='76' ) {
        newImage("light_green.png");
    }
    if(keypressed=='84' ) {
        newImage("trunk.jpg");
    }
    if(keypressed=='82' ) {
        newImage("roof.jpg");
    }
    if(keypressed=='89' ) {
        newImage("yellow_wall.png");
    }
    if(keypressed=='68' ) {
        newImage("dark_green.png");
    }
    if(keypressed=='67' ) {
        newImage("cloud.jpg");
    }
    if(keypressed=='85' ) {
        newImage("unique.png");
    }
}
function up() {
    if (player_y>=0) {
        player_y=player_y-blockimageheight;
        canvas.remove(player_object);
        playerupdate();
    }
}
function down() {
    if (player_y<=500) {
        player_y=player_y+blockimageheight;
        canvas.remove(player_object);
        playerupdate();
    }
}
function left() {
    if (player_x>=0) {
        player_x=player_x-blockimagewidth;
        canvas.remove(player_object);
        playerupdate();
    }
}
function right() {
    if (player_x<=850) {
        player_x=player_x+blockimagewidth;
        canvas.remove(player_object);
        playerupdate();
    }
}

