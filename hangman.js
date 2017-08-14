window.onload = function() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];


    var words; // Words computer can choose from
    var word; // Selected word
    var guess; // Guess
    var guesses = []; // Stored geusses
    var lives; // Lives
    var counter; // Count correct guesses
    var space; // Number of spaces in word '-'


    var showLives = document.getElementById("mylives");

    var buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }

    play = function() {
        words = ["Ron-Weasley", "Harry-Potter", "Hermione-Granger", "Remus-Lupin", "Albus-Dumbledore", "Voldemort", "Ginny-Weasley", "Tom-Riddle", "Belatrix-Lestrange", "Draco-Malfoy", "Charlie-Weasley", "George-Weasley", "Fred-Weasley", "Nymphadora-Tonks", "Mad-Eye-Moody", "Serverus-Snape", "Dudley-Dursley", "Bill-Weasley", "Fluer-Delacor", "Sirius-Black", "James-Potter", "Lily-Potter", "Wormtail"]


        chosenWord = words[Math.floor(Math.random() * words.length)];
        word = chosenWord[Math.floor(Math.random() * chosenWord.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        guesses = [];
        lives = 11;
        counter = 0;
        space = 0;
        result();
    }

    // Create geusses ul
    result = function() {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // Show lives
    comments = function() {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = "You Win!";
            }
        }
    }

    check = function() {
        list.onclick = function() {
            var geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    guesses[i].innerHTML = guess;
                    counter += 1;
                }
            }
            var j = (word.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                comments();
            } else {
                comments();
            }
        }
    }


    play();


    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
    }
}