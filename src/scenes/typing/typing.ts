import Scene from "../../scene.js";
import TextController from "./textController.js";
import InputController from "./inputController.js";
import InfoCollector from "../../infoCollector/infoCollector.js";

class TypingScene extends Scene {
    protected elm: HTMLDivElement;

    private text: TextController;
    private input: InputController;
    private infoCollecter: InfoCollector;

    constructor() {
        super();

        this.elm = this.createElm();
        this.infoCollecter = new InfoCollector();
        this.text = this.createText();
        this.input = this.createInput();

        this.setup();
    }

    public setup(): void {
        this.getText();
    }

    public destory(): void {
        if (this.elm.parentElement) {
            this.elm.parentElement.removeChild(this.elm);
        }
        this.text.destory();
    }

    private createElm(): HTMLDivElement {
        const elm = document.createElement("div");
        elm.classList.add("typingScene");
        return elm;
    }

    private createText(): TextController {
        const controller = new TextController(this.infoCollecter);
        controller.appendTo(this.elm);
        controller.onDone(function () { console.log("Done!!"); });
        return controller;
    }

    private createInput(): InputController {
        const input = new InputController(this.text);
        input.onInput(this.onInput.bind(this));
        input.appendTo(this.elm);
        return input;
    }

    private onInput(value: string) {
        this.text.typeChar(value);
    }

    private async getText() {
        const text = (await fetch("text.txt").then(e => e.text())).slice(0, 10); // TEMP TODO
        this.text.setText(text);
    }
}

export default TypingScene;