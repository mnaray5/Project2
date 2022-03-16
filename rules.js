var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 
                'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var mWord = "";
var myGuess = [];
var fullGuess = [];
var lives = 9;
var found = 0;
var list;
var value = 0;
    this.makeWord = function(word){
        console.log(word);
        mWord = word;
        //document.getElementById("next").classList.add('old');
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(210,0,100,30);
        ctx.fillStyle = "#000000";
        ctx.font = "25px Trebuchet MS  ";
        ctx.fillText("Lives: " + lives, 210, 20);
        sessionStorage.setItem("value", value);

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
          sessionStorage.setItem("value", value+1);
          g = this.innerHTML;
          button = document.getElementById(String(g));
          button.disabled = "true";
          button.style = "opacity:1.0";
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
          holders.appendChild(dash);
          guessHolder.appendChild(holders);

        }
        
      }

      this.makeGuess = function(){

        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.font = "25px Trebuchet MS  ";
        ctx.fillText("Lives: " + lives, 210, 20);
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
          nextButton.innerHTML = "You Win!" + "<br>" + "Next Page!";
          nextButton.classList.add('revealNext');
          nextButton.disabled = false;
          nextButton.style = "text-align: center; width: 300px; height: 100px; opacity: 1.0;";
          value2 = sessionStorage.getItem("value2");
          sessionStorage.setItem("value2", value2+1);
          sessionStorage.setItem("lives", lives);

          /*nextButton = document.createElement("button");
          nextButton.classList.add('btn');
          nextButton.innerHTML = "You Win!" + "<br>" + "Next Page!";
          nextButton.classList.add('revealNext');
          document.getElementById("nexts").appendChild*/
          nextButton.onclick = function(){
            location.href = "winner.html";
          }
        }
        if(found == 0){
          lives--;
          var c = document.getElementById("myCanvas");
          var ctx = c.getContext("2d");

          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(210,0,100,30);
          ctx.fillStyle = "#000000";
          ctx.font = "25px Trebuchet MS  ";
          ctx.fillText("Lives: " + lives, 210, 20);
          console.log("make guess:" + g);
          drawHangman();
          
        }
        if(lives == 0){
          disableAllButtons();
          //fill in the text
          for(x = 0; x < mWord.length; x++){
            myGuess[x].innerHTML = " <span class='under'>" + mWord.charAt(x) + "</span> "
          }
          console.log("you lose");
          nextButton = document.getElementById("next");
          nextButton.innerHTML = "Sorry, You Lose:(" + "<br />"+ "Next Page :(";
          nextButton.classList.add('revealNext');
          nextButton.disabled = false;
          nextButton.style = "text-align: center; width: 300px; height: 100px; opacity: 1.0;";
          value2 = sessionStorage.getItem("value2");

          sessionStorage.setItem("value2", value2+1);


          nextButton.onclick = function(){
            location.href = "loser.html";
          }

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
          dButtons.style = "opacity:1.0";

        }
      }

      this.drawHangman = function(){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.strokeStyle = "#156F74";
        if(lives == 8){ //head
          ctx.beginPath();
          ctx.arc(150, 100, 30, 0, 2 * Math.PI);
          ctx.stroke();
          
        } else if(lives == 7){//body
          ctx.moveTo(150, 130);
          ctx.lineTo(150, 210);
          ctx.stroke();

        } else if(lives == 6){//left arm
          ctx.moveTo(150, 160);
          ctx.lineTo(100, 120);
          ctx.stroke();

        } else if(lives == 5){//right arm
          ctx.moveTo(150, 160);
          ctx.lineTo(200, 120);
          ctx.stroke();

        } else if(lives == 4){//left leg
          ctx.moveTo(150, 210);
          ctx.lineTo(100, 260);
          ctx.stroke();

        } else if(lives == 3){//right leg
          ctx.moveTo(150, 210);
          ctx.lineTo(200, 260);
          ctx.stroke();          
        } else if(lives == 2){ //left eye
          ctx.fillStyle = 'black';
          ctx.beginPath();
          ctx.arc(140, 90, 5, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fill();

        } else if(lives == 1){ //right eye
          ctx.fillStyle = 'black';
          ctx.beginPath();
          ctx.arc(160, 90, 5, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.fill();

        } else if(lives == 0){ //frown
          ctx.strokeStyle = 'black';
          ctx.beginPath();
          ctx.arc(150, 115, 10, 0, Math.PI, true);
          ctx.stroke();
        }
      }
