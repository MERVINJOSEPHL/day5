function concat(){
    var sum=[];
    k=0;
    for(var i=0;i<arguments.length;i+=1){
        for(j=0;j<arguments[i].length;j+=1){
            sum[k]=arguments[i][j];
            k+=1;
        }
    }
    return (sum);
    
}
