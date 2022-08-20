

// ///////////////////////////////////////////////////////////////////
function jumpingArray(arr){
            let des=0;
            let jump=0;
            let pos=0;
            let i=0;
            while(i<arr.length-1){
                des= Math.max(des, arr[i]+1);
                if(i==pos){
                    pos=des;
                    jump++
                }
                i++
            }
            return jump
        
        }
        console.log(jumpingArray([2,3,1,1,4]))
//         console.log(jumpingArray([2,3,0,1,4]))
////////////////////////////////////////////////////////////////////

function median(arr1,arr2){
    let res=merge(arr1,arr2)
    var mid=Math.floor(res.length/2)
    return res.length%2===0 ? ((res[mid-1]+res[mid])/2) : res[mid];
}

function merge(arr1,arr2){
    let res=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i])
            i++;
        }else{
            res.push(arr2[j])
            j++;
        }
    }

while(i<arr1.length){
    res.push(arr1[i])
    i++;

}
while(j<arr2.length){
    res.push(arr2[j])
    j++;
}
return res
}
console.log(median([1,3],[2,4]))