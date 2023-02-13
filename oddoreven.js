function oddishOrEvenish(x){
    sum=0;
   while (x>0){
       sum+=Number(x%10);
       x=Math.floor(x/10);
   }
   if(sum%2==0){
       console.log("Evenish")
   }
   else{
       console.log("Oddish")
   }
    
}
oddishOrEvenish(4433) 
