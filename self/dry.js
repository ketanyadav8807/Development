function runProgram(input){
    input = input.trim().split("\n");
    
    var testCase = Number(input[0]);
 
     var add = 0;
     for(var i = 1; i <= testCase; i++){
       var arrSlice = input.slice( i+add  , i+add+2);
       add = i;
       answer(arrSlice)
     }
     
     function answer(){
         var length = Number(arrSlice[0]);
         var string = arrSlice[1].split("");
         var answer_arr = [];
         
         answer_arr.push(string[0]);
         var rep = 1;
         for(var i = 1; i < length; i++){
             if(answer_arr[answer_arr.length-1] === string[i]){
                 if(i === length-1){
                     rep ++ ;
                     answer_arr.push(rep);
                 }
                 else{
                  rep ++ ;   
                 }
             }
             else{
                 answer_arr.push(rep);
                 answer_arr.push(string[i]);
                 rep = 1;
             }
         }
         console.log(answer_arr.join(""));
     }
}
runProgram(`2
5
aabcc
5
aazaa`)
