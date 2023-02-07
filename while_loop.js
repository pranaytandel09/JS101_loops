// avg of even nos from 1 to 100

let a=0;
let sum=0;
let count=0;
while((a<=100)){
  if((a%2==0))
  
  {
    sum=sum+a;
    count++;
  }
  a++;
} console.log((sum/count));