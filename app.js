//pierre feuille ciseux etc.

//score
    const game = function() {
        let pScore = 0;
        let iaScore = 0;

        //disparition let's play
        const startGame = function(){
            const playBtn = document.querySelector(".intro button");
            const introScreen = document.querySelector(".intro");
            const match = document.querySelector(".match");

        playBtn.addEventListener("click", function(){
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
         });
    };
 


//jouer le match

//utiliser fct forEach pour selectionner fonction plus facilement 

const playMatch = function(){
    const options =document.querySelectorAll(".option button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    //option de l'ordi 
    const computerOptions = ["pierre", "feuille", "ciseaux", "lézard","spock"];

    options.forEach(function(option){
        option.addEventListener("click",function(){
            const computerNumber = Math.floor(Math.random()*4);
            const computerChoices = computerOptions[computerNumber];

    
            
            compareHands(this.textContent, computerChoices);

            //update images
            playerHand.src = `./images/${this.textContent}.png`;
            computerHand.src = `./images/${computerChoices}.png`;
           
            
        });
    }); 
};

// fonction  compare les mains
const compareHands = function (playerChoices, computerChoices){
    const winner = document.querySelector('.winner');

    if (playerChoices === computerChoices){
                 winner.textContent = "Match nul"
                 return;

             }else{
                 //pierre ecrase ciseaux et lézard
                 //feuille couvre la pierre et tue spock
                 //ciseaux coupe la feuille et le lezard
                 //lézard mange le papier et tue spock
                 //spock ecrase ciseauc et pierre
    
                 if ( playerChoices === "pierre" && computerChoices === ("ciseaux" || "lézard")){
                     winner.textContent = "Le joueur gagne"
                     pScore++;
                     document.querySelector('.player-score > p').innerHTML = pScore;

                     return;
                 }
                 if ( playerChoices === "feuille" && computerChoices === ("pierre" || "spock")){
                    winner.textContent = "Le joueur gagne"
                    pScore++
                    document.querySelector('.player-score > p').innerHTML = pScore;
                    return;
                 }
                 if ( playerChoices === "ciseaux" && computerChoices === ("feuille" || "lézard")){
                    winner.textContent = "Le joueur gagne"
                    pScore++
                    document.querySelector('.player-score > p').innerHTML = pScore;
                    return;
                 }
                 if ( playerChoices === "lézard" && computerChoices === ("feuille" || "spock")){
                    winner.textContent = "Le joueur gagne"
                    pScore++
                    document.querySelector('.player-score > p').innerHTML = pScore;
                    
                    return;
                 }
                
                if ( playerChoices === "spock" && computerChoices === ("ciseaux" || "pierre")){
                    winner.textContent = "Le joueur gagne"
                    pScore++
                    document.querySelector('.player-score > p').innerHTML = pScore;
                    return;
                } else {
                    winner.textContent = "L'ordinateur gagne"
                    iaScore++
                    document.querySelector('.computer-score > p').innerHTML = iaScore;
                    return;
                }
            }
        }
startGame();
playMatch();
    };
 game();




    //fonction representant l'IA
    // function ia(){
    //     const ENUM = {
    //         rock : 'pierre',
    //         paper : 'feuille',
    //         scissors : 'ciseaux',
    //         lizard : 'lézard',
    //         spock : 'spock',
    //     }
         
    //     const choice = Math.floor(Math.random()*4)
    //     switch(choice){
    //         case 0 :
    //              return ENUM.rock
    //         case 1 :
    //             return ENUM.paper
    //         case 2 :
    //              return ENUM.scissors
    //         case 3 :
    //              return ENUM.lizard
    //         case 4 :
    //             return ENUM.spock
    //     }
    // }
    // options.addEventListener("click", ia);
    // console.log(choice);
    // };


    

//fonction représentant le choix des joueurs
// function play(){
//     const playerChoice = document.getElementsById("option").value
//     const iaChoice = ia()


//     if (playerChoice === iaChoice){
//         return "Match nul"
//     }else{
//         //pierre ecrase ciseaux et lézard
//         //feuille couvre la pierre et tue spock
//         //ciseaux coupe la feuille et le lezard
//         //lézard mange le papier et tue spock
//         //spock ecrase ciseauc et pierre

//         if ( playerChoice === ENUM.rock && iaChoice === (ENUM.scissors || ENUM.lizard)){
//             return "le joueur gagne"
//         }
//         if ( playerChoice === ENUM.paper && iaChoice === (ENUM.rock || ENUM.spock)){
//             return "le joueur gagne"
//         }
//         if ( playerChoice === ENUM.scissors && iaChoice === (ENUM.paper || ENUM.lizard)){
//             return "le joueur gagne"
//         }
//         if ( playerChoice === ENUM.lizard && iaChoice === (ENUM.paper || ENUM.spock)){
//             return "le joueur gagne"
//         }
//         if ( playerChoice === ENUM.spock && iaChoice === (ENUM.scissors || ENUM.rock)){
//             return "le joueur gagne"
//         } else {
//             return "l'ordinateur gagne"
//         }
//      }
//    }
// }
