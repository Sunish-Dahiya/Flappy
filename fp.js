var cv=document.getElementById("cv");
var cx=cv.getContext("2d");
var fp=document.getElementById("fp");
var back=document.getElementById("back");
var w=document.getElementById("w");
var gap=100;
var fx=10,fy=100,g=1.7;
var arr=[{px:500,py:0,px2:500,py2:350}];
document.addEventListener("keydown",event=>{
	fy-=39;
	console.log(event.keyCode);
	switch(event.keyCode){
case 13:window.location.reload();
break;
	}
});
var score=0;
var crx,cry,cr1x,cr1y;
function gameLoop(){
cx.clearRect(0,0,600,600);

cx.drawImage(back,0,0,600,600);
cx.font = "15px Comic Sans MS";
cx.fillStyle = "red";

cx.drawImage(fp,fx,fy,40,40);
for(var i=0;i<arr.length;i++){
cx.drawImage(w,arr[i].px,arr[i].py,80,250);
cx.drawImage(w,arr[i].px2,arr[i].py2,80,600-arr[i].py2);	
arr[i].px-=2;
arr[i].px2-=2;

if(arr[i].px==150){
	var t=Math.random()*250 -250;
	arr.push({px:500,py:t,px2:500,py2:t+350})
}
if(arr[i].px+80<fx){arr.splice(i,1);score++;}
if((fx+40>=arr[i].px&&!(fy>arr[i].py+250&&fy+40<arr[i].py+250+100))||fy+40>600){
cx.font = "30px Comic Sans MS";
cx.fillStyle = "red";
cx.textAlign = "center";
cx.fillText("Game Over", cv.width/2, cv.height/2+50);
cx.fillText("Your Score:"+score, cv.width/2, cv.height/2);
cx.fillText("Press Enter to retry", cv.width/2, cv.height/2 +100);
return}
}
cx.fillText("Your Score:"+score,450, 50);



fy+=g;






requestAnimationFrame(gameLoop);

}
requestAnimationFrame(gameLoop);
