class Form {

    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Start");
        this.title = createElement("h1");
        this.enter = createElement("h2")
    }
    hide() {
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.enter.hide();
    }
    display() {
        this.title.html("Many in one Game");
        this.title.position(650, 100);
        this.input.position(670, 350);
        this.button.position(845,350);
        this.enter.html("Enter Your Name To Continue")
        this.enter.position(630, 300);

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.enter.hide();
        gameState = 1;
        });
    }

}