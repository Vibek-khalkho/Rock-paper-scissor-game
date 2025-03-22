let player
let bot
let chances = false;
let stone = document.getElementById('st')
let paper = document.getElementById('pa')
let scisor = document.getElementById('sc')
let playercl =document.querySelector('.player')
let botcl =document.querySelector('.bot')
let replay = document.getElementById('replay')
let declare = document.querySelector('.declare')
let options=["stone","paper","scisor"]



    stone.addEventListener('click',()=> {
        player="stone"
        bot= botoption()
        console.log(player)
        console.log(bot)
        stopanimation()
        decider()
        changeimg()
    })
    
    paper.addEventListener('click',()=>{
        player="paper"
        bot= botoption()
        console.log(player)
        console.log(bot)
         stopanimation()
         decider()
         changeimg()
})
scisor.addEventListener('click',()=>{
    player="scisor"
    bot= botoption()
    console.log(player)
    console.log(bot)
    stopanimation()
    decider()
    changeimg()
})

function botoption(){

    bot=options[Math.floor(Math.random()*options.length)]
    
    return bot
}

function stopanimation() {
    playercl.style.animation = 'none'
    botcl.style.animation = 'none'
}
function startanimation() {
    playercl.style.animation = 'shake 3s infinite'
    botcl.style.animation = 'shake 3s infinite'
}

replay.addEventListener('click',() =>{
    startanimation()
    declare.style.opacity= "0"
    imgreplay()

})
function decider() {
    if(player==bot){
   
        declare.textContent='Match Tie'
        setTimeout(()=>{
            declare.style.opacity= "1"
        },800);
   
}

else if(player=="stone" && bot=="paper"){
    declare.textContent='You Lost'
    setTimeout(()=>{
        declare.style.opacity= "1"
    },800);
}
else if(player=="stone" && bot=="scisor"){
    declare.textContent='You Win'
     setTimeout(()=>{
        declare.style.opacity= "1"
    },800);
}
else if(player=="scisor" && bot=="paper"){
    declare.textContent='You Win'
     setTimeout(()=>{
        declare.style.opacity= "1"
    },800);
}
else if(player=="scisor" && bot=="stone"){
    declare.textContent='You Lost'
     setTimeout(()=>{
        declare.style.opacity= "1"
    },800);
}
else if(player=="paper" && bot=="scisor"){
    declare.textContent='You Lost'
     setTimeout(()=>{
        declare.style.opacity= "1"
    },800);
}
else if(player=="paper" && bot=="stone"){
    declare.textContent='You Win'
     setTimeout(()=>{
        declare.style.opacity= "1"
    },800);
}
}
function changeimg(){
    botcl.style.background =`url(img/${bot}.png)`
    botcl.style.backgroundSize = "cover";
    botcl.style.backgroundPosition = "center";
    botcl.style.backgroundRepeat = "no-repeat";
    playercl.style.background =`url(img/${player}.png)`
    playercl.style.backgroundSize = "cover";
    playercl.style.backgroundPosition = "center";
    playercl.style.backgroundRepeat = "no-repeat";
 }

function imgreplay(){
    botcl.style.background =`url(img/select.jfif)`
    playercl.style.background =`url(img/select.jfif)`
    botcl.style.backgroundSize = "cover";
    botcl.style.backgroundPosition = "center";
    botcl.style.backgroundRepeat = "no-repeat";
    playercl.style.backgroundSize = "cover";
    playercl.style.backgroundPosition = "center";
    playercl.style.backgroundRepeat = "no-repeat";

}
