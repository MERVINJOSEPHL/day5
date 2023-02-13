
function binarySearch(search,list,start,end){
    mid=Math.floor((start+end)/2);
   if (end>=0 && start<=end){
       if(list[mid]==search){
           return mid;
       }
       if(list[mid]>search){
           return binarySearch(search,list,start,mid-1);
       }
       else{
           return binarySearch(search,list,mid+1,end);
       }
   }
   else{
       return false;
   }
    
}
console.log(binarySearch(4,[1,2,3,4],0,3)) 
