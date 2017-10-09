/**
 * Created by 1 on 2017/10/9.
 */
/*·½·¨Ò»*/
var arr=[1,5,4,5,1,4];
var newArr=[];
function autoArrO(){
    for(var i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])=="-1"){
            newArr.push(arr[i])
        }
    }
    return newArr;
};
console.log(autoArrO());