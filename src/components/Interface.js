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
        .result {
            background-color: #31363F;
            width: 100%;
            height: 17%;
            border-radius: 10px;
            display: flex;
            flex-direction: row-reverse;
            align-items: flex-end;
        }
        .result h1 {
            color: white;
            margin: 10px;
            font-size: 3rem;
        }
        .container {
            width: 80vw;
        }
        .calculadora {
            width: 60vw;
            height: 60vh;
            background-color: #222831;
            margin: 27% auto;
            border-radius: 3%;
            padding: 20px;
        }
        `
        return style;
    }
}

customElements.define("calculadora-interface", Interface);