function beforeunload1(){
    return "write"
}
var click1start = false
var click2start = false
var click3start =  false
var click4start = false
function click1(){
    click1start = true
    if(click1start==true && click2start== false){
        var img1 = document.getElementById("img3")
        img1.style.backgroundColor="yellow"
        
    }


}
function click2(){
    click2start = true
    if(click2start == true && click1start== false){
 var img2 = document.getElementById("img4")
    img2.style.backgroundColor = "yellow"  
    }
   
}
function click3(){
    click3start= true
    if(click3start== true && click4start == false){
        var img3 = document.getElementById("img5")
        img3.style.backgroundColor = "yellow"
    }
}
function click4(){
    click4start = true
    if(click4start == true && click3start==false){
        var img4 = document.getElementById("img6")
        img4.style.backgroundColor = "yellow"
    }
}