let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector('#msg')//document.getElementById('msg')
let uscore = document.getElementById('uscore');
let cscore = document.getElementById('cscore');
const resetbtn = document.getElementById("resetbtn");


resetbtn.onclick=()=>{
    userscore=0;
    compscore=0;
    uscore.innerText=userscore;
    cscore.innerText=compscore;
    msg.innerText=`play your move`;
    msg.style.backgroundColor='black';
}


const compchoice=()=>{
    let choices = ["rock", "paper", "scissor"];
    let random= Math.floor(Math.random() * 3);
    return choices[random];
    
}

const drawgame = () => {
    msg.innerText=`game was draw`;
    msg.style.backgroundColor='black'
    console.log(`game was draw`);
}

const showwinner = (userwin , u,c) => {
    if (userwin) {
        userscore ++;
        msg.innerText=`you won, your ${u} beat ${c}`;
        msg.style.backgroundColor='green'
        console.log(userscore)
        uscore.innerText = userscore;

    }
    else{
        compscore ++;
        msg.innerText=`computer won, computers ${c} beat ${u}`;
        msg.style.backgroundColor='red'
        console.log(userscore);
        cscore.innerText = compscore;
    }
    
}


// main 

const playgame=(userChoice)=>{
    
    //generate compuetr choice
    const computerchoice = compchoice();
    console.log(`computer choice ${computerchoice}`);
    console.log(`user choice ${userChoice}`);

    if(userChoice==computerchoice){
        //draw
        drawgame();
        return;
        
    }
    else{
        let userwin=true;
        if(userChoice=='rock'){
            // comp have scissor , paper if not drawgame execute
            userwin = computerchoice == 'paper'? false : true; // if(?) computerchoice == paper return false else(:) true
        }
        else if(userChoice=='paper'){
            // comp have rock,scissors if not drawgame execute
            userwin = computerchoice == 'scissor'? false : true; // if(?) computerchoice == seasor return false else(:) true
        }
        else{
            // computer have rock , paper if not drawgame execute
            userwin = computerchoice == 'rock'? false : true; // if(?) computerchoice == rock return false else(:) true
        }

        showwinner(userwin,userChoice , computerchoice);
    }


}

choices.forEach((choice) =>{ // for each is a loop , loop through sub class of choices class
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        
        playgame(userChoice);

      
});
});
