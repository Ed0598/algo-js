
function calcDistance(A,B){
    x_A=A[0];
    x_B=B[0];
    y_A=A[1];
    y_B=B[1];
    dx=x_B-x_A
    dy=y_B-y_A
    return Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2))
}
console.log(calcDistance([1,1],[2,2]));