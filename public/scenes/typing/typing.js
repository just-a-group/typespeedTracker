var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Scene from "../../scene.js";
import TextController from "./textController.js";
class TypingScene extends Scene {
    constructor() {
        super();
        this.elm = this.createElm();
        this.text = this.createText();
        this.input = this.createInput();
        this.setup();
    }
    setup() {
        this.getText();
    }
    destory() {
        if (this.elm.parentElement) {
            this.elm.parentElement.removeChild(this.elm);
        }
    }
    createElm() {
        const elm = document.createElement("div");
        elm.classList.add("typingScene");
        return elm;
    }
    createText() {
        const controller = new TextController();
        controller.appendTo(this.elm);
        return controller;
    }
    createInput() {
        const input = document.createElement("input");
        input.classList.add("input");
        this.elm.appendChild(input);
        return input;
    }
    getText() {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield fetch("text.txt").then(e => e.text());
            this.text.setText(text);
        });
    }
}
export default TypingScene;