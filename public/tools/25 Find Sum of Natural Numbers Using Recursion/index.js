// Suppose we have function named sum():
//  o   sum(5):     returns 5 + sum(5-1)
//  o   sum(4):     returns 5+4 + sum(4-1)
//  o   sum(3):     returns 5+4+3 + sum(3-1)
//  o   sum(2):     returns 5+4+3+2 + sum(2-1)
//  o   sum(1):     returns 5+4+3+2+1 + sum(1-1)
//  o   sum(0):     returns 15

function sum(num){
    if(num>0){
        return num + sum(num-1);
        // 5 + 4 + 3 + 2 + 1 + 0 = 15
    }else{
        return num;
    }
}
var res =  sum(20);
console.log(res);