class Interface extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        //div .calculadora
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "calculadora");

        //conteudo .res
        const result = document.createElement("div");
        result.setAttribute("class", "result");

        //valor 0 incial
        const valorResult = document.createElement("h1");
        valorResult.textContent = "0";

        //conteudo buttons
        const buttons = document.createElement("div");
        buttons.setAttribute("class", "buttons");

        //definindo elementos filhos
        componentRoot.appendChild(result);
        componentRoot.appendChild(buttons);
        result.appendChild(valorResult);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        
        // TAMANHO PARA CELULAR PRIMEIRAMENTE
        
        style.textContent = `
        .result h1 {
            color: white;
        }
        .container {
            width: 80vw;
        }
        .calculadora {
            width: 85vw;
            height: 80vh;
            background-color: green;
            margin: 25% auto;
        }
        `
        return style;
    }
}

customElements.define("calculadora-ios", Interface);