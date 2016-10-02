function init() {
  // console.log("Game Ready.");
  var currentPlayer = 'Player 1';
  var boardCount = 0;

  //create an array to store X or O
  var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  var gameBoard = document.getElementsByClassName('box');
  var playerStatus = document.querySelector('h4');
  var resetButton = document.getElementById('reset-btn');

  var addCross = '<div id="playerOne" class="content"><i class="crossIcon"></i></div>';
  var addCircle = '<div id="playerTwo" class="content"><i class="circleIcon"></i></div>';

  for ( var i = 0; i < gameBoard.length; i++ ) {
    gameBoard[i].addEventListener('click', playerMove);
  }

  function removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className);
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      // regular expression cancellation to only find the keywords identifier of "circle" or "cross"
      // in order for the removeClass to work and remove all the 'circles' and 'crosses'
      el.className=el.className.replace(reg, ' ');
    }
  }
  resetButton.addEventListener('click', resetBoard);

  function resetBoard() {
    for ( var i = 0; i < gameBoard.length; i++ ) {
      gameBoard[i].innerHTML = "";
      removeClass(gameBoard[i], 'circle');
      removeClass(gameBoard[i], 'cross');
    }
    board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    boardCount = 0;
    playerStatus.innerHTML = "Let's start the game!";
  }

  function playerMove() {
    var selectedBox = event.target;
    var unmarkedBox = this.innerHTML === "";

    if (currentPlayer === 'Player 1' && unmarkedBox) {
      this.classList.add('cross');
      this.innerHTML = addCross;
      setMove('X', this.id);
      switchPlayer('Player 2');
      checkForWinner();
    } else if (currentPlayer === 'Player 2' && unmarkedBox) {
      this.classList.add('circle');
      this.innerHTML = addCircle;
      setMove('O', this.id);
      switchPlayer('Player 1');
      checkForWinner();
    } else {
        alert('Wrong move, try again!');
    }
  }

  function switchPlayer(player) {
      currentPlayer = player;
      playerStatus.innerHTML = player + "'s turn.";
  }

  function setMove(move, buttonId) {
      if (buttonId === 'box1') {
          board[0][0] = move;
      } else if (buttonId === 'box2') {
          board[0][1] = move;
      } else if (buttonId === 'box3') {
          board[0][2] = move;
      } else if (buttonId === 'box4') {
          board[1][0] = move;
      } else if (buttonId === 'box5') {
          board[1][1] = move;
      } else if (buttonId === 'box6') {
          board[1][2] = move;
      } else if (buttonId === 'box7') {
          board[2][0] = move;
      } else if (buttonId === 'box8') {
          board[2][1] = move;
      } else if (buttonId === 'box9') {
          board[2][2] = move;
      }
      boardCount++;
  }

  function getButtonState(buttonId) {
      if (buttonId === 'box1') {
          return board[0][0];
      } else if (buttonId === 'box2') {
          return board[0][1];
      } else if (buttonId === 'box3') {
          return board[0][2];
      } else if (buttonId === 'box4') {
          return board[1][0];
      } else if (buttonId === 'box5') {
          return board[1][1];
      } else if (buttonId === 'box6') {
          return board[1][2];
      } else if (buttonId === 'box7') {
          return board[2][0];
      } else if (buttonId === 'box8') {
          return board[2][1];
      } else if (buttonId === 'box9') {
          return board[2][2];
      }
  }

  function alertWinner(buttonValue){
      if(buttonValue === 'O'){
          playerStatus.innerHTML = "Player 2 wins!";
          alert('Game Over, Player 2 wins!');
          resetBoard();
      }else {
          playerStatus.innerHTML = "Player 1 wins!";
          alert('Game Over, Player 1 wins!');
          resetBoard();
      }
  }

  function checkForWinner() {
      //Check row 1 for matching O or X
      if ((board[0][0] === board[0][1]) && (board[0][1] === board[0][2]) && (board[0][2] !== null)) {
          alertWinner(board[0][0]);
      }
      //Check row 2 for matching O or X
      else if ((board[1][0] === board[1][1]) && (board[1][1] === board[1][2]) && (board[1][2] !== null)) {
          alertWinner(board[1][0]);
      }
      else if ((board[2][0] === board[2][1]) && (board[2][1] === board[2][2]) && (board[2][2] !== null)) {
          alertWinner(board[2][0]);
      }
      else if ((board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && (board[2][0] !== null)) {
          alertWinner(board[0][0]);
      }
      else if ((board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && (board[2][1] !== null)) {
          alertWinner(board[0][1]);
      }
      else if ((board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && (board[2][2] !== null)) {
          alertWinner(board[0][2]);
      }
      else if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[2][2] !== null)) {
          alertWinner(board[0][0]);
      }
      else if ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[2][0] !== null)) {
          alertWinner(board[0][2]);
      }
      else if(boardCount === 9){
        // no winner
          alert('It is a tie!');
          resetBoard();
      }
  }
}

window.addEventListener("load",init,false);
