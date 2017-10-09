/**
 * Created by 1 on 2017/10/9.
 */
/*·½·¨¶þ*/
var arr=[1,5,4,5,1,4];
var newArr=[];
function autoArrT(){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i] ==arr[j]){
                newArr.push(arr[i])
            }
        }
    }
    return newArr;
};
console.log(autoArrT());