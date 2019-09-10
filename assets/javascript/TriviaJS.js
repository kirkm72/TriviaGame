let right = 0;
let wrong = 0;
let intervalId;
let selected="";
let questionCounter = 0;
let number = 80; //Timer start setting

const questions = [
        "What team was the winner of the longest game in MLB history?(25 Innings)",
        "What NFL team holds the record for most points scored in a game at 72?",
        "Who holds the record for most World Series Of Poker bracelets?",
        "Who holds the Texas Longhorn career rushing record?",
        "What horse holds the record for the fastest Kentucky Derby time?",
        "What former Texas Longhorn won the Heisman Trophy in 1999?",
        "What was the Longhorns' game winning streak when the final whistle blew at the 2006 Rose Bowl?",
        "What team did Texas defeat for the 2005 National Title (in the 2006 Rose Bowl)?",
        "Who holds the NFL career rushing record?",
        "Who holds the Houston Astros record for most home runs in a season?",
        "What is the original name of the Houston Astros?",
        "Who has the most consecutive Bassmaster Classic appearances with 28?",
        "Who holds the record for biggest 3 day weight in the Bassmaster Classic?",
        "Which MLB player holds the record for most career home runs?",
        "Who holds the NFL record for the most seasons with the same team?",
        "Who is the first NFL player ever to play in over 360 games in a career?",
        "Who holds the NFL record for most sacks in a game?",
        "What record-setting quarterback was the NFL's 82nd draft pick in 1979?",
        "Which is the only American Football team to go a whole season undefeated, including the Super Bowl?",
        "What team was the winner of the longest game in MLB history?(25 Innings)"
    ]

    const answers = [
        ["Boston Red Sox",
        "Chicago White Sox",
        "New York Yankees",
        "Chicago Cubs"
        ],
        ["Dallas Cowboys",
        "Pittsburgh Steelers",
        "New England Patriots",
        "Washington Redskins"
        ],
        ["Phil Ivey",
        "Phil Hellmuth",
        "Doyle Brunson",
        "Johhny Chan"
        ],
        ["Earl Campbell",
        "Cedric Benson",
        "Ricky Williams",
        "Jamaal Charles"
        ],
        ["Secretariat",
        "Sham",
        "Funny Cide",
        "Seabiscuit"
        ],
        ["Ricky Williams",
        "Colt McCoy",
        "Peter Gardere",
        "Earl Campbell"
        ],
        ["22",
        "20",
        "19",
        "21",
        ],
        ["Notre Dame",
        "Florida State",
        "USC",
        "Alabama",
        ],
        ["Walter Payton",
        "Barry Sanders",
        "Jim Brown",
        "Emmit Smith",
        ],
        ["Jose Altuve",
        "Jeff Bagwell",
        "Craig Biggio",
        "Nolan Ryan",
        ],
        ["Colt .45s",
        "Texans",
        "Oilers",
        "Cougars",
        ],
        ["Kevin VanDam",
        "Rick Clunn",
        "Bobby Murray",
        "Larry Nixon",
        ],
        ["Rick Clunn",
        "Randy Howell",
        "Jordan Lee",
        "Kevin VanDam",
        ],
        ["Sammy Sosa",
        "Babe Ruth",
        "Barry Bonds",
        "Hank Aaron",
        ],
        ["Jackie Slater",
        "Emmit Smith",
        "Jerry Rice",
        "Brett Favre"
        ],
        ["Gary Anderson",
        "Jerry Rice",
        "Morten Andersen",
        "George Blanda"
        ],
        ["Lawrence Taylor",
        "Derrick Thomas",
        "Reggie White",
        "Michael Strahan",
        ],
        ["Roger Staubach",
        "Terry Bradshaw",
        "Johnny Unitas",
        "Joe Montana",
        ],
        ["Miami Dolphins",
        "Pittsburg Steelers",
        "New England Patriots",
        "Cleveland Browns"
        ],
        ["Boston Red Sox",
        "Chicago White Sox",
        "New York Yankees",
        "Chicago Cubs"
        ]
    ]
    const correctAnswers = [
        "Chicago White Sox",
        "Washington Redskins",
        "Phil Hellmuth",
        "Ricky Williams",
        "Secretariat",
        "Ricky Williams",
        "20",
        "USC",
        "Emmit Smith",
        "Jeff Bagwell",
        "Colt .45s",
        "Rick Clunn",
        "Kevin VanDam",
        "Barry Bonds",
        "Jackie Slater",
        "Morten Andersen",
        "Derrick Thomas",
        "Joe Montana",
        "Miami Dolphins",
        "Chicago White Sox"
        ];

$(document).ready(function () {

    // Function Declarations
    function endGame(){
        number=80;
        right=0;
        wrong=0;
        questionCounter=0;
        intervalId=number;
        $("#start-button").show(); 
    }

    function run() { // intervalId is required and defined in global scope.
        clearInterval(intervalId); // Clears interval first
        intervalId = setInterval(decrement, 1000); // Sets interval to 1000 milliseconds
    }

    function decrement() { // This function is a required callback for the "clearinterval" method above
        number--; // Decrement number to display
        $("#time").html("<h3>Time remaining: " + number + " seconds</h3>" + "<br>");  
        if (number === 0) {
            stop();
            endGame();
        }
    }

    function stop() {
        clearInterval(intervalId); // intervalId is required and defined in global scope.
        console.log("Time's up");
    }

    function updateAnsQ() {
        $("#question").html("<h4>" + questions[questionCounter] + "</h4>");
        for (let j = 0; j < answers[questionCounter].length; j++) {
            let tmpTag2 = "";
            tmpTag2 = "#answer" + (j + 1);
            // console.log(tmpTag2);
            console.log("Answer # ", answers[questionCounter][j]);
            $(tmpTag2).html("<input type = 'radio' class= 'option' name='radio_group' value = '" + answers[questionCounter][j] + "'>" + answers[questionCounter][j]);
        }
    }

    function check(input){
        if(jQuery.inArray(input , correctAnswers) !== -1){ //method returns -1 if not member of array
            right++; // increment correct answer count
            $("#right").html("<h3>Right: "+right+"</h3>"); //update screen
        } else {
            wrong++; // increment incorrect answer count
            $("#wrong").html("<h3>Wrong: "+wrong+"</h3>"); //update screen
        }
        console.log("Right: ", right, "Wrong: ", wrong);
        questionCounter++;  //increment question counter to use next in array
        if(questionCounter < questions.length){
            updateAnsQ(); //post next question
        } else{
            stop();
            clearQuestions();
            endGame();
        }   
    }

    function clearQuestions(){
        $("#question").html("<h4></h4>");
        $("#answer1").html("<h4></h4>");
        $("#answer2").html("<h4></h4>");
        $("#answer3").html("<h4></h4>");
        $("#answer4").html("<h4></h4>");
    }

    $("#start-button").on("click", function () { // on click for "start" Button
        $(this).hide(); // Hides button and posts first timer message.
        $("#time").html("<h3>Time remaining: "+ number +" seconds </h3>" + "<br>");
        $("#right").html("<h3>Right: </h3>");
        $("#wrong").html("<h3>Wrong: </h3>");
        run();
        updateAnsQ();
    });

    $(document).on("click", ".option", function(){ // Assigning selected answer to a variable
        selected = $("input[name='radio_group']:checked").val();
        console.log("Selected: "+selected);
        check(selected); //send selected to "check" function
    });

}); //end of "Document.ready"

//Insert all code inside above function
//Remember, this is jQuery so if the library is not already called, it won't know how to deal with the above syntax

// Psuedocode flow
// 1. Setup HTML with basic divs for simple layout. Make pretty later.
// 2. Setup timer. This is in HTML, not JS.
// 3. Create an array, with 20 questions & multiple choice answers.
// 4. Have a start button that will begin game event loop. Disable button during game play.
//      B. Loop through number of choices to add tags to divs for display
//      C. Start countdown timer.
//      D. b & C must display simultaneously.
// 5. Check answers
// 6. Increment Counters
// 7. Update page
// 8. Check for endgame... out of time of completed list
// 9. Re-enable start button and reinitialize values.     