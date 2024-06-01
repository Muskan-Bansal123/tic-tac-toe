let buttons=document.querySelectorAll(".item");
let resbtn=document.querySelector("#reset-btn");
let countOfButtonClicks=0;
let chance="playerx";
let winner=false;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const disabled=()=>
    {
        for(let button of buttons)
            {
                button.disabled=true;
            }
    }
const enabled=()=>{
    for(let button of buttons)
        {
            button.disabled=false;
        }
}
//player1=X player2=O

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
    if(chance==="playerx")
        {
            button.innerText="X";
            chance="playero";
        }
    else{

        button.innerText="O";
        chance="playerx";
    }
    button.disabled=true;

  
    countOfButtonClicks++;
    checkWinner();

});
});


const checkWinner=()=>{
    for(let pattern of winpatterns)
        {
            let pos1val=buttons[pattern[0]].innerText;
            let pos2val=buttons[pattern[1]].innerText;
            let pos3val=buttons[pattern[2]].innerText;
            
            if(pos1val!=""&&pos2val!=""&&pos3val!="")
                {
                    if(pos1val===pos2val&&pos2val===pos3val)
                        {
                            
                             let played;
                             if(chance==="playerx")
                                {
                                    played="Player 2";
                                    winner=true;
                                }
                                else{
                                    played="Player 1";
                                    winner=true;
                                }
                            document.querySelector(".message").innerText=`${played} WON 👏 `;

                        disabled();
                        return;
                       }
                   
                }


            
        }
        if(countOfButtonClicks===9&& !winner)
            {
                document.querySelector(".message").innerText="Match Draw";
            
            }

}


resbtn.addEventListener("click",()=>{
    enabled();
    winner=false;
    countOfButtonClicks=0;
    document.querySelector(".message").innerText="";
    for(let button of buttons)
        {
            button.innerText="";
        }
        chance="playerx";
    });