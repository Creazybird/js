var len;
function buildMaxHeap(arr){ 
    len=arr.length;
    for(var i=Math.floor(len/2);i>=0;i--){    //Math.floor(len/2) 作用:确保从最底下的一个非叶节点开始调整堆
        heapify(arr,i);
    }
}

function heapify(){
    var left=2*i+1
    var right=2*i+2
    largest=i;
    
    if(left<len&&arr[left]>arr[largest]){
        largest=left;
    }
    if(right<len&&arr[right]>arr[largest]){
        largest=right;
    }
    if(largest!=i){
        swap(arr,i,largest)
        heapify(arr,largest)
    }
}

function swap(arr,i,j){
    var temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

function heapSort(arr){
    buildMaxHeap(arr);
    for(var i=arr.length-1;i>0;i--){
        swap(arr,0,i);
        len--;
        heapify(arr,0);
    }
    return arr;
}