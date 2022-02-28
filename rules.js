var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 
                'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var mWord = "";
var myGuess = [];
var fullGuess = [];
    this.makeWord = function(word){
        console.log(word);
        mWord = word;
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
          }
        }
      }


