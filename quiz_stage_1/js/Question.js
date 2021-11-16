class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Your Answer Here...")
    this.input2.position(440, 230);
   //Create a input box to enter the number



    this.button = createButton('Submit');
    this.buttonTwo = createButton('Submit')
    this.buttonTwo.position(410, 300);
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
    this.question = createElement("h3")
    this.input2 = createElement("h4")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("What Car Brand is the Camaro Zl1 1LE?")
    this.question.position(150, 75);



    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      this.message.hide();
    })
    this.buttonTwo.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      this.message.hide();
      this.buttonTwo.hide();
      this.question.hide();
    })

  }
}
