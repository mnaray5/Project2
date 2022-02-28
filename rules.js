var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 
                'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var mWord = "";
var myGuess = [];
var fullGuess = [];
var lives = 6;
var found = 0;
var list;

    this.makeWord = function(word){
        console.log(word);
        mWord = word;
        document.getElementById("next").classList.add('old');
        result();
        makeButton();
    }

    this.makeButton = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');
    
        for (var i = 0; i < alphabet.length; i++) {
          l = alphabet[i];
          letters.id = 'alphabet';
          list = document.createElement('button');
          list.classList.add('btn');
          list.classList.add('btn2');
          list.id = list.innerHTML = l;
          check();
          letters.appendChild(list);
        }
        myButtons.appendChild(letters);

      }

      this.check = function(){
        list.onclick = function(){
          g = this.innerHTML;
          button = document.getElementById(String(g));
          button.disabled = "true";
          button.classList.remove('btn2');
          button.classList.add('noButton');
          makeGuess(g);
        }
      }

      this.result = function(){
        guessHolder = document.getElementById("mainGuess");
        holders = document.createElement('ul');
        for(x = 0; x < mWord.length; x++){
          dash = document.createElement('ul');
          dash.classList.add('dash');
          if(mWord[x] == " "){
            dash.innerHTML = "<span class='space'>" + " " + "</span>";
            fullGuess.push(" ");
          } else {
            dash.innerHTML = "_";
            fullGuess.push("_");
          }

          myGuess.push(dash);
          guessHolder.appendChild(holders);
          holders.appendChild(dash);
        }
        
      }

      this.makeGuess = function(){
        console.log("make guess:" + g);
        //call a function to see if there are any dashes
        for(x = 0;x < mWord.length; x++){
          if(mWord.charAt(x) == g){
           fullGuess[x] = g;
           myGuess[x].innerHTML = " <span class='under'>" + g + "</span> ";
           console.log(myGuess[x].innerHTML);
           found++;
          }
        }
        if(checkWord()){
          disableAllButtons();
          console.log("winner!");
          nextButton = document.getElementById("next");
          nextButton.classList.remove('old');
          nextButton.innerHTML = "You Win! Next Page!";
          nextButton.classList.add('revealNext');
          nextButton.disabled = false;
          nextButton.onclick = function(){
            location.href = "winner.html";
          }
        }
        if(found == 0){
          lives--;
          //draw hangman
        }
        if(lives == 0){
          disableAllButtons();
          console.log("you loose");
            //create a new next page button to winner

        }
        found = 0;
      }

      this.checkWord = function(){
        for(x = 0; x < mWord.length; x++){
          if(fullGuess[x] != mWord.charAt(x)){
            return false;
          }
        }
        return true;
      }
      
      this.disableAllButtons = function(){
        for(x = 0; x < alphabet.length; x++){
          dButtons = document.getElementById(alphabet[x])
          dButtons.disabled = "true";
          dButtons.classList.remove('btn2');
          dButtons.classList.add('noButton');
        }
      }
