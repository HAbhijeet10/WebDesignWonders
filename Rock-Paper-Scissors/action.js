const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msg1 = document.querySelector("#msg1");
const msg2 = document.querySelector("#msg2");
let userpoint = 0;
let comppoint = 0;
const User_score= document.querySelector("#User_score");
const Random=()=>{
    const options =["Rock", "Paper", "Scissors"];
    const random_choice = Math.floor(Math.random()*3);
    return options[random_choice];
}

const Showwin=(win, Urchoice,computer_Choice)=>{
    if(win){
        console.log("You Win!!");
        msg.innerText = "You Win";
        msg1.innerText = Urchoice;
        msg2.innerText = computer_Choice;
        userpoint++;
        User_score.innerText = userpoint;
        msg.style.color="green";
        
    }else{
        console.log("you Lose!!");
        msg.innerText = "You Lose";
        msg1.innerText = Urchoice;
        msg2.innerText = computer_Choice;
        comppoint ++;
        Comp_score.innerText = comppoint;
        msg.style.color="red";
    }
}

const draw=()=>{
    console.log("Game is Draw")
    msg.innerText = "Game Draw";
    msg1.innerText = "Draw";
    msg2.innerText = "Draw";
    msg.style.color="gold";
    
}

const playgame=(Urchoice)=>{
    console.log("user choice is ", Urchoice);
    const computer_Choice = Random();
    console.log("Computer choice is ", computer_Choice);

    if(Urchoice===computer_Choice){
        draw();
    }else{
            let win = true;
            if(Urchoice==="Rock"){
                win = computer_Choice==="Paper" ? false : true;
            }else if( Urchoice==="Paper"){
                    win = computer_Choice==="Scissors" ? false : true;
                }else{
                    win = computer_Choice ==="Rock" ? false: true;
                }
            Showwin(win,Urchoice,computer_Choice);
        }
    }


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const Urchoice=choice.getAttribute("id");
        playgame(Urchoice);
    }); 
});