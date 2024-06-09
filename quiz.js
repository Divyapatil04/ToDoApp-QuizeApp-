document.addEventListener("DOMContentLoaded", function (){
    const questions = [
      {
          question: "Which of the following option leads to the portability and security of Java?",
          options:["Bytecode is executed by JVM", "The applet makes the Java code secure and portable", "Use of exception handling", "Dynamic binding between objects"],
          correctAnswer: "Bytecode is executed by the JVM"
      },
      {
          question: "Which of the following is not a Java features?",
          options:["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"],
          correctAnswer: "Use of pointers"
      },
      {
        question: "____ is used to find and fix bugs in the Java programs?",
        options:["JVM", "JRE", "JDK", "JDB"],
        correctAnswer: "JDB"
      },
      {
        question: "What is the return type of the hashCode() method in the Object class?",
        options:["Object", "int", "void", "long"],
        correctAnswer: "int"
      },
      {
        question: "What does the expression float a = 35 / 0 return?",
        options:["0", "Not a Number", "Infinity", "Run time exception"],
        correctAnswer: "Infinity"
      },
      {
        question: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
        options:["getClass()", "intern()", "getName()", "toString()"],
        correctAnswer: "getName()"
      },
      {
        question: "In which process, a local variable has the same name as one of the instance variables?",
        options:["Serialization", "Variable Shadowing", "Abstraction", "Multi-threading"],
        correctAnswer: "Variable Shadowing"
      },
      {
        question: "Which of the following is true about the anonymous inner class?",
        options:["It has only methods", "Objects can't be created", "It has a fixed class name", "It has no class name"],
        correctAnswer: "It has no class name"
      },
      {
        question: "Which package contains the Random class?",
        options:["java.util package", "java.lang package", "java.awt package", "java.io package"],
        correctAnswer: "java.util package"
      },
      {
        question: "What do you mean by nameless objects?",
        options:["An object created by using the new keyword", "An object of a superclass created in the subclass", "An object without having any name but having a reference", "An object that has no reference"],
        correctAnswer: "An object that has no reference"
      },
      {
        question: "An interface with no fields or methods is known as a ______?",
        options:["Runnable Interface", "Marker Interface", "Abstract Interface", "CharSequence Interface"],
        correctAnswer: "Marker Interface"
      },
      {
        question: "In which memory a String is stored, when we create a string using new operator?",
        options:["Stack", "String memory", "Heap memory", "Random storage space"],
        correctAnswer: "Heap memory"
      }
    ];
  
    let currentQuestion = 0;
    let score = 0;
  
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const submitButton = document.getElementById("submit-btn");
  
    function displayQuestion() {
  
      const currentQ = questions[currentQuestion];
      questionElement.textContent = currentQ.question;
      optionsElement.innerHTML = "";
      currentQ.options.forEach((option) => {
          const optionButton = document.createElement("button");
          optionButton.textContent = option;
          optionButton.addEventListener("click", ()=> checkAnswer(option));
          optionsElement.appendChild(optionButton);
      });
    }
  
    function displayIndicators(){
  
      const indicatorsContainer = document.getElementById("indicators");
      indicatorsContainer.innerHTML = "";
      questions.forEach(() => {
  
          const indicator = document.createElement("div");
          indicator.classList.add("feedback-indicator");
          indicatorsContainer.appendChild(indicator);
  
      });
    }
  
    function updateIndicator (index, isCorrect) {
  
      const indicators = document.querySelectorAll(".feedback-indicator");
      const indicator = indicators[index];
      if (isCorrect) {
          indicator.classList.add("correct");
          indicator.innerHTML = "&#10003";
          
      } else {
          indicator.classList.add("incorrect");
          indicator.innerHTML = "&#10007";
      }
    }
  
    function checkAnswer(selectedAnswer){
  
      const currentQ = questions[currentQuestion];
      if (selectedAnswer === currentQ.correctAnswer) {
          score++;
          updateIndicator(currentQuestion, true);
      } else {
          updateIndicator(currentQuestion, false);  
      }
  
      currentQuestion++;
      if (currentQuestion < questions.length) {
          displayQuestion();
      } else {
          endQuiz();
      }
    }
  
    function endQuiz () {
      questionElement.textContent ="";
      optionsElement.innerHTML = "";
      feedbackElement.textContent = `Quiz completed! Your Score is ${score}/${questions.length}.`;
      submitButton.style.display = "none";
    }
  
    displayIndicators();
    displayQuestion();
  
  })