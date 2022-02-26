var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 
                'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.makeWord = function(word){
        console.log(word);
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
            console.log(g);
        }
      }


