function equilibriumElement(N, arr){
    var i = 0;
    var j = N-1;
    
    while(i < j){
        var sum1 = 0;
        var sum2 = 0;
        
        if(sum1 === sum2){
            sum1 += arr[i];
            i++ ;
        }
        else if(sum1 > sum2){
            sum2 += arr[j];
            j-- ;
        }
        else{
            sum1 += arr[i];
            i++ ;
        }
        
        if(i === j){
            if(sum1 === sum2){
                console.log(i+1);
            }
            else{
                console.log(-1);
            }
        }
        
    }
}
equilibriumElement(5,[3,3,5,5,1])
