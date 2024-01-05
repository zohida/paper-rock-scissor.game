
const handOptions = {
    "scissors": "/images/scissors.png",
    "rock": "./images/rock.png",
    "paper": "./images/paper.png",
    "lizard": "./images/lizard.svg",
    "spock": "./images/spock.png",
}

let SCORE = 0;

const pickUserHand = (hand) => {
    //hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    //show the next page with the hand you picked

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //set the user pick

    if(hand == 'scissors'  || hand == 'rock' || hand == 'paper' || hand == 'lizard' || hand == 'spock'){
        document.getElementById("userPickImage").src = handOptions[hand];

       let cpHand = pickComputerHand();
       referee(hand, cpHand);
    }
}

const pickComputerHand = () => {
    let hands = ["scissors","rock", "paper", "lizard", "spock"];
    let cpHand = hands[Math.floor(Math.random() * 5)];

    //set the computer pick

    document.getElementById("computerPickImage").src = handOptions[cpHand];

    return cpHand;
    
}

const referee = (userHand, cpHand) => {

        if(userHand == "paper" && cpHand == "scissors") {
            setDecision("YOU LOSE!")
        } 
        if(userHand == "paper" && cpHand == "rock") {
            setDecision("YOU WIN!")
            setScore(SCORE + 1)
        }

        if(userHand == "paper"  && cpHand == "paper") {
            setDecision("It's a tie!");
        }

        if(userHand == "rock"  && cpHand == "scissors") {
            setDecision("YOU WIN!")
            setScore(SCORE + 1)
        }

        if(userHand == "rock"  && cpHand == "paper") {
            setDecision("YOU LOSE!")
        }

        if(userHand == "rock"  && cpHand == "rock") {
            setDecision("It's a tie!");
        }

        if(userHand == "scissors"  && cpHand == "scissors") {
            setDecision("It's a tie!");
        }

        if(userHand == "spock"  && cpHand == "spock") {
            setDecision("It's a tie!");
        }

        if(userHand == "lizard"  && cpHand == "lizard") {
            setDecision("It's a tie!");
        }

        if(userHand == "scissors"  && cpHand == "paper") {
            setDecision("YOU WIN!")
            setScore(SCORE + 1)
        }

        if(userHand == "scisssors"  && cpHand == "rock") {
            setDecision("YOU LOSE!")
        }
}

const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    //show the next page with the hand you picked

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}

const setDecision = (desicion) => {
    document.querySelector(".desicion h2").innerText = desicion;
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h4").innerText = score;
}

const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");
const overlay = document.getElementById('overlay');

btnRules.addEventListener("click", () => {
    modalRules.classList.add('show-modal');
    overlay.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    modalRules.classList.remove('show-modal');
    overlay.style.display = 'none';
});