    var Questions = [
        {
            Question: "What does console.log() do?",
            option1: "Displays output in the console",
            option2: "Starts a loop",
            option3: "Declares a variable",
            option4: "Stops code execution",
            answer: "Displays output in the console"
        },
        {
            Question: "Which keyword is used to declare a variable?",
            option1: "var",
            option2: "let",
            option3: "const",
            option4: "All of the above",
            answer: "All of the above"
        },
        {
            Question: "Which symbol is used for single-line comments?",
            option1: "//",
            option2: "/* */",
            option3: "<!-- -->",
            option4: "#",
            answer: "//"
        },
        {
            Question: "What will `typeof 42` return?",
            option1: "string",
            option2: "number",
            option3: "object",
            option4: "boolean",
            answer: "number"
        },
        {
            Question: "Which method adds an item to an array?",
            option1: "push()",
            option2: "pop()",
            option3: "join()",
            option4: "split()",
            answer: "push()"
        },
        {
            Question: "How do you write 'Hello World' in an alert box?",
            option1: "alertBox('Hello World');",
            option2: "msg('Hello World');",
            option3: "alert('Hello World');",
            option4: "msgBox('Hello World');",
            answer: "alert('Hello World');"
        },
        {
            Question: "Which of the following is a data type in JavaScript?",
            option1: "string",
            option2: "number",
            option3: "boolean",
            option4: "All of the above",
            answer: "All of the above"
        },
        {
            Question: "What does `isNaN()` function check?",
            option1: "If a value is null",
            option2: "If a value is NaN",
            option3: "If a value is undefined",
            option4: "If a value is a string",
            answer: "If a value is NaN"
        },
        {
            Question: "What does `===` check?",
            option1: "Equality without type conversion",
            option2: "Equality with type conversion",
            option3: "Inequality",
            option4: "None of the above",
            answer: "Equality without type conversion"
        },
        {
            Question: "What is the output of `2 + '2'`?",
            option1: "22",
            option2: "4",
            option3: "undefined",
            option4: "NaN",
            answer: "22"
        },
        {
            Question: "What does `break` do in a loop?",
            option1: "Exits the loop",
            option2: "Skips one iteration",
            option3: "Restarts the loop",
            option4: "None of the above",
            answer: "Exits the loop"
        },
        {
            Question: "What is `null` in JavaScript?",
            option1: "A data type",
            option2: "A keyword",
            option3: "An empty object",
            option4: "A variable",
            answer: "An empty object"
        },
        {
            Question: "What does `shift()` do to an array?",
            option1: "Removes the first element",
            option2: "Adds an element to the end",
            option3: "Reverses the array",
            option4: "Removes the last element",
            answer: "Removes the first element"
        },
        {
            Question: "How do you declare a function?",
            option1: "function myFunction()",
            option2: "function:myFunction()",
            option3: "func myFunction()",
            option4: "myFunction():function",
            answer: "function myFunction()"
        },
        {
            Question: "What does `splice()` do?",
            option1: "Adds/removes elements from an array",
            option2: "Sorts an array",
            option3: "Joins an array",
            option4: "Splits a string",
            answer: "Adds/removes elements from an array"
        },
        {
            Question: "Which event is triggered when a user clicks an HTML element?",
            option1: "onchange",
            option2: "onclick",
            option3: "onmouseover",
            option4: "onload",
            answer: "onclick"
        },
        {
            Question: "What does `Math.random()` return?",
            option1: "A random integer",
            option2: "A random float",
            option3: "A random boolean",
            option4: "None of the above",
            answer: "A random float"
        },
        {
            Question: "What is the correct way to check if `x` is undefined?",
            option1: "x == undefined",
            option2: "typeof x === 'undefined'",
            option3: "x === null",
            option4: "None of the above",
            answer: "typeof x === 'undefined'"
        },
        {
            Question: "What does `JSON.stringify()` do?",
            option1: "Converts a string to an object",
            option2: "Parses a JSON string",
            option3: "Converts an object to a string",
            option4: "None of the above",
            answer: "Converts an object to a string"
        },
        {
            Question: "What is the output of `typeof []`?",
            option1: "array",
            option2: "object",
            option3: "undefined",
            option4: "null",
            answer: "object"
        },
        {
            Question: "Which operator is used to assign a value?",
            option1: "=",
            option2: "==",
            option3: "===",
            option4: "!=",
            answer: "="
        }
    ];





    var counter = 0;
    var score = 0;
    
    function gotonext() {
        renderQuestion();
    }


    
    function renderQuestion() {
        if (counter < Questions.length) {
            var questionData = Questions[counter];
            document.getElementById('first').innerHTML = `
            <div class="quizwindow">
                <h4 id="question">${questionData.Question}</h4>
                <ul>
                    <li><input type="radio" id="option1" name="quizOption" value="${questionData.option1}">
                        <label id="label1" for="option1">${questionData.option1}</label></li>
                    <li><input type="radio" id="option2" name="quizOption" value="${questionData.option2}">
                        <label id="label2" for="option2">${questionData.option2}</label></li>
                    <li><input type="radio" id="option3" name="quizOption" value="${questionData.option3}">
                        <label id="label3" for="option3">${questionData.option3}</label></li>
                    <li><input type="radio" id="option4" name="quizOption" value="${questionData.option4}">
                        <label id="label4" for="option4">${questionData.option4}</label></li>
                </ul>
                <button class="btn btn-warning" onclick="next()">Next</button>
            </div>`;
        } else {
            document.getElementById('first').innerHTML = `
            <div style="text-align: center;">
                <h2>Your Score: ${score}/${Questions.length}</h2>
            </div>`;
        }
    }
    
    function next() {
        var selectedOption = document.querySelector('input[name="quizOption"]:checked');
        if (!selectedOption) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Select Any One Option !",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
              
        } else {
            if (selectedOption.value === Questions[counter].answer) {
                score++;
            }
            counter++;
            renderQuestion();
        }
    }