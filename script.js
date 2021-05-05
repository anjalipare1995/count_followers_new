var counter=document.querySelector(".counter");
var followers=document.querySelector(".followers");
//document=method and queryselector =return 1st elementwithing doc
//counter.innerHTML=1001;
// //2 methods
// setTimeOut(function,milisecond);
// setInterval(function,milisecond);


let count=1
setInterval(()=>{
    // count++;
    // counter.innerText=count//it will incress infinity

    if(count<1000)
    {
     count++;
    counter.innerText=count

    }
},1) //1 milisecond

setTimeout(()=>{
    followers.innerText="Followers on instagram!"
//"https://learnyst.s3.amazonaws.com/assets/schools/2410/resources/images/Group_2_4y5b8p.png
