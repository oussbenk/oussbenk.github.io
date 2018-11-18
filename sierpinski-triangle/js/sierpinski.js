/**
 *	Credits to Jörn Hameister (https://www.hameister.org/HTML5_Sierpinski.html)
 */
var width = 600;
var height = 600;
var size = 500;
 
function sierpinski(Ax,Ay,Bx,By,Cx,Cy,d,ctx) {
    if(d>0) {
        var pointAx = (Bx + Cx) / 2;
        var pointAy = (By + Cy) / 2;
 
        var pointBx = (Ax + Cx) / 2;
        var pointBy = (Ay + Cy) / 2;
 
        var pointCx = (Ax + Bx) / 2;
        var pointCy = (Ay + By) / 2;
 
        sierpinski(Ax,Ay,pointBx,pointBy,pointCx,pointCy,d-1,ctx);
        sierpinski(pointCx,pointCy,pointAx,pointAy,Bx,By,d-1,ctx);
        sierpinski(pointBx,pointBy,pointAx,pointAy,Cx,Cy,d-1,ctx);
    }
    else {
        ctx.moveTo(Ax,Ay);
        ctx.lineTo(Bx,By);
        ctx.lineTo(Cx,Cy);
        ctx.lineTo(Ax,Ay);
    }
}
 
 
function drawTriangle(depth,ctx) {
    var midPointX = width/2;
    var midPointY = height/2;
 
    var ri = (size/6) * Math.sqrt(3);
    var ru = (size/3) * Math.sqrt(3);
 
    var pointAx = midPointX-(size/2);
    var pointAy = midPointY+ri;
 
    var pointBx = midPointX+(size/2);
    var pointBy = midPointY+ri;
 
    var pointCx = midPointX;
    var pointCy = midPointY-ru;
 
    sierpinski(pointAx,pointAy,pointBx,pointBy,pointCx,pointCy,depth,ctx);
}