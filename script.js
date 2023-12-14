let lesChoix = ["Pierre", "Papier", "Ciseaux"];
let joueur = "";
let monChoix = "";
let computerChose = "";
let myScore = 0;
let computerScore = 0;
let message = "";
let msgFinGame = "";
// ------------------------------------------------------------------------------
document.getElementById("saveName").onclick = function () {
  joueur = document.getElementById("joueur").value;
  console.count("test");

  document.getElementById("scene2").style.display = "block";
  document.getElementById("scene1").style.display = "none";
  document.getElementById("nameJoueur").textContent = joueur;
};

document.getElementById("startGame").onclick = function () {
  document.getElementById("row1").style.display = "flex";
  document.getElementById("image").style.display = "flex";
  document.getElementById("resultGame").style.display = "none";

  document.getElementById("imageEmpty").style.display = "none";
  document.getElementById("msgFinGame").textContent = "";
  document.getElementById("Quitter").style.display = "block";
  document.getElementById("newGame").style.display = "none";

  document.getElementById("welcome").style.display = "none";
  document.getElementById("container").style.display = "flex";
  document.getElementById("btns").style.display = "flex";
  document.getElementById("joueurName").textContent = joueur;
};
// ------------------------------------------------------------------------------
document.getElementById("annuler").onclick = function () {
  document.getElementById("scene2").style.display = "none";
  document.getElementById("scene1").style.display = "block";
};
// ------------------------------------------------------------------------------
const btnPierre = document.getElementById("Pierre");
btnPierre.onclick = function () {
  monChoix = document.getElementById("Pierre").value;

};

const btnPapier = document.getElementById("Papier");
btnPapier.onclick = function () {
  monChoix = document.getElementById("Papier").value;
};

const btnCiseaux = document.getElementById("Ciseaux");
btnCiseaux.onclick = function () {
  monChoix = document.getElementById("Ciseaux").value;
};

// ----------------------------------------------------------------------------
const buttons = document.querySelectorAll(".joue");

function handleClick() {
  message = "";
  document.getElementById("msg").textContent = message;
  document.getElementById("choiDeRobot").src = "";
  document.getElementById("choixDeUser").src = "";
  // -------------------------------------------------------------------------
  document.getElementById("vs").style.display="none";
  document.getElementById("loader").style.display="block";
  // -------------------------------------------------------------------------

  const random = Math.floor(Math.random() * lesChoix.length);
  computerChose = lesChoix[random];
  console.log(`computerChose : ${computerChose}`);
  console.log(`monChoix : ${monChoix}`);

  setTimeout(function () {
    console.log( document.getElementById("loader"));
    document.getElementById("loader").style.display="none";
    document.getElementById("vs").style.display="block";

    switch (`${monChoix}-${computerChose}`) {
      case "Pierre-Ciseaux":
      case "Papier-Pierre":
      case "Ciseaux-Papier":
        message = "Vous avez gagné !";
        console.log("Vous avez gagné !");
        myScore += 1;
        console.log(`my Score : ${myScore}`);
        console.log(`computerScore : ${computerScore}`);
        // -------------------
        document.getElementById("resultOrdinateur").textContent = computerScore;
        document.getElementById("resultVous").textContent = myScore;
        document.getElementById("msg").textContent = message;
        // --------------------
        break;

      case "Ciseaux-Pierre":
      case "Pierre-Papier":
      case "Papier-Ciseaux":
        message = "Vous avez perdu !";
        console.log("Vous avez perdu !");
        computerScore += 1;
        console.log(`my Score : ${myScore}`);
        console.log(`computerScore : ${computerScore}`);
        // -------------------
        document.getElementById("resultOrdinateur").textContent = computerScore;
        document.getElementById("resultVous").textContent = myScore;
        document.getElementById("msg").textContent = message;
        // --------------------
        break;

      default:
        message = "Égalité !";
        document.getElementById("msg").textContent = message;
        console.log("Égalité !");
        console.log(`my Score : ${myScore}`);
        console.log(`computerScore : ${computerScore}`);
        break;
    }
    // -------------------------------------------------------------------------

    if (computerScore > myScore || computerScore == myScore) {
      document.getElementById("computerImg").src = "images/Robot-win.png";
    } else if (computerScore < myScore) {
      document.getElementById("computerImg").src = "images/Robot-loser.png";
    }

    if (monChoix === "Ciseaux") {
      document.getElementById("choixDeUser").src = "images/scissors.png";
    } else if (monChoix === "Pierre") {
      document.getElementById("choixDeUser").src = "images/rock.png";
    } else if (monChoix === "Papier") {
      document.getElementById("choixDeUser").src = "images/paper.png";
    }

    if (computerChose === "Ciseaux") {
      document.getElementById("choiDeRobot").src = "images/scissors.png";
    } else if (computerChose === "Pierre") {
      document.getElementById("choiDeRobot").src = "images/rock.png";
    } else if (computerChose === "Papier") {
      document.getElementById("choiDeRobot").src = "images/paper.png";
    }
  }, 3000);
}

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

// ======================================================================================

document.getElementById("Quitter").onclick = function () {
  document.getElementById("resultGame").style.display = "flex";

  document.getElementById("row1").style.display = "none";
  document.getElementById("btns").style.display = "none";
  document.getElementById("image").style.display = "none";
  document.getElementById("imageEmpty").style.display = "block";
  if (computerScore > myScore) {
    msgFinGame = `${joueur} Vous avez gagné !`;
    document.getElementById("msgFinGame").textContent = msgFinGame;
    document.getElementById("cardUser").style.opacity = 0.5;
  } else if (computerScore < myScore) {
    msgFinGame = ` ${joueur} Vous avez gagné !`;
    document.getElementById("msgFinGame").textContent = msgFinGame;
    document.getElementById("cardRobot").style.opacity = 0.5;
  } else {
    msgFinGame = ` Égalité !`;
    document.getElementById("msgFinGame").textContent = msgFinGame;
  }

  document.getElementById("resultGame").style.display = "flex";
  document.getElementById("resultVousRes").textContent = myScore;
  document.getElementById("resultOrdinateurRes").textContent = computerScore;
  document.getElementById("joueurNameRes").textContent = joueur;

  document.getElementById("newGame").style.display = "block";
  document.getElementById("Quitter").style.display = "none";
};

document.getElementById("newGame").onclick = function () {
  joueur = "";
  monChoix = "";
  computerChose = "";
  myScore = 0;
  computerScore = 0;
  message = "";
  msgFinGame = "";

  document.getElementById("choixDeUser").src = "";
  document.getElementById("choiDeRobot").src = "";
  document.getElementById("msg").textContent = message;
  document.getElementById("joueurName").textContent = "";
  document.getElementById("joueurNameRes").textContent = "";
  document.getElementById("resultVousRes").textContent = "";
  document.getElementById("resultOrdinateurRes").textContent = "";
  document.getElementById("resultVous").textContent = "";
  document.getElementById("resultOrdinateur").textContent = "";
  document.getElementById("resultGame").style.display = "none";
  document.getElementById("container").style.display = "none";
  document.getElementById("scene2").style.display = "none";
  document.getElementById("welcome").style.display = "block";
  document.getElementById("scene1").style.display = "block";
  document.getElementById("joueur").value = "";
};




























// if (
//     (monChoix === "Pierre" && computerChose === "Ciseaux") ||
//     (monChoix === "Papier" && computerChose === "Pierre") ||
//     (monChoix === "Ciseaux" && computerChose === "Papier")
// ) {
//     console.log("Vous avez gagné !");
// } else if (
//     (computerChose === "Pierre" && monChoix === "Ciseaux") ||
//     (computerChose === "Papier" && monChoix === "Pierre") ||
//     (computerChose === "Ciseaux" && monChoix === "Papier")
// ) {
//     console.log("Vous avez perdu !");
// } else {
//     console.log("Égalité !");
// }
