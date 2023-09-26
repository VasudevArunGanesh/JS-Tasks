setInterval(myFunc, 1000);

function myFunc(){

let ele = document.querySelectorAll("#normal")
ele.forEach(element => {
    const inp = element.getElementsByTagName("input")[0].value;
     if(inp==""){
        element.getElementsByTagName("span")[0].innerHTML = "POOR";
        element.getElementsByTagName("span")[0].style.color = "red";
    }
    else{
        element.getElementsByTagName("span")[0].innerHTML = "GOOD";
        element.getElementsByTagName("span")[0].style.color = "green";
    }
});

ele = document.querySelectorAll("#addr")
ele.forEach(element => {
    const inp = element.getElementsByTagName("textarea")[0].value;
     if(inp==""){
        element.getElementsByTagName("span")[0].innerHTML = "POOR";
        element.getElementsByTagName("span")[0].style.color = "red";
    }
    else{
        element.getElementsByTagName("span")[0].innerHTML = "GOOD";
        element.getElementsByTagName("span")[0].style.color = "green";
    }
});

ele = document.querySelectorAll("#pass")
ele.forEach(element => {
    const inp = element.getElementsByTagName("input")[0].value;
     if(inp.length<5){
        element.getElementsByTagName("span")[0].innerHTML = "POOR";
        element.getElementsByTagName("span")[0].style.color = "red";
    }
    else if(inp.length<8){
        element.getElementsByTagName("span")[0].innerHTML = "MEDIUM";
        element.getElementsByTagName("span")[0].style.color = "blue";
    }
    else{
        element.getElementsByTagName("span")[0].innerHTML = "GOOD";
        element.getElementsByTagName("span")[0].style.color = "green";
    }
});

ele = document.querySelectorAll("#repass")
ele.forEach(element => {
    const prevele = document.querySelector("#pass");
    const previnp = prevele.getElementsByTagName("input")[0].value;
    const inp = element.getElementsByTagName("input")[0].value;
     if(inp==""){
        element.getElementsByTagName("span")[0].innerHTML = "POOR OR MISMATCH";
        element.getElementsByTagName("span")[0].style.color = "red";
    }
    else if(inp !== previnp){
        element.getElementsByTagName("span")[0].innerHTML = "MISMATCH";
        element.getElementsByTagName("span")[0].style.color = "red";
    }
    else{
        element.getElementsByTagName("span")[0].innerHTML = "MATCH";
        element.getElementsByTagName("span")[0].style.color = "green";
    }
});

ele = document.querySelectorAll("#age")
ele.forEach(element => {
    const inp = element.getElementsByTagName("input")[0].value;
     if(inp.length==0){
        element.getElementsByTagName("span")[0].innerHTML = "POOR";
        element.getElementsByTagName("span")[0].style.color = "red";
    }
    else if (parseInt(inp)<1){
        element.getElementsByTagName("span")[0].innerHTML = "DOES NOT EXIST";
        element.getElementsByTagName("span")[0].style.color = "red";
    }
    else{
        element.getElementsByTagName("span")[0].innerHTML = "GOOD";
        element.getElementsByTagName("span")[0].style.color = "green";
    }
});

ele = document.querySelectorAll("#num")
ele.forEach(element => {
    const inp = element.getElementsByTagName("input")[0].value;
     if(inp.length==0){
        element.getElementsByTagName("span")[0].innerHTML = "POOR";
        element.getElementsByTagName("span")[0].style.color = "red";
    }
    else if (isNaN(parseInt(inp))){
        element.getElementsByTagName("span")[0].innerHTML = "WRONG INPUT";
        element.getElementsByTagName("span")[0].style.color = "red";
    }
    else if (inp.length<10){
        element.getElementsByTagName("span")[0].innerHTML = "INVALID";
        element.getElementsByTagName("span")[0].style.color = "red";
    }
    else{
        element.getElementsByTagName("span")[0].innerHTML = "GOOD";
        element.getElementsByTagName("span")[0].style.color = "green";
    }
});

ele = document.querySelector("#mail")

const inp = ele.getElementsByTagName("input")[0].value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inp==""){
ele.getElementsByTagName("span")[0].innerHTML = "POOR";
ele.getElementsByTagName("span")[0].style.color = "red";
}
else if (inp.match(mailformat)){
ele.getElementsByTagName("span")[0].innerHTML = "GOOD";
ele.getElementsByTagName("span")[0].style.color = "green";
}
else{
ele.getElementsByTagName("span")[0].innerHTML = "INVALID ADDRESS";
ele.getElementsByTagName("span")[0].style.color = "red";
}


}


