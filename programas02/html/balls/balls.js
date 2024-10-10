const btn_add = document.querySelector('#btn_add');
const btn_remover = document.querySelector('#btn_remover');
const num_objetos = document.querySelector('#num_objetos');
const txt_qtde = document.querySelector('#txt_qtde');
const palco = document.querySelector('#palco');

let bolas = [];
let numBola = 0;
let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight;

// Define a classe Bola que representa cada bola criada na tela
class Bola {
    constructor(arrayBolas, palco) {
//          Atributos da bola
// id aleatoria inigualavel
        this._id = Math.floor(Math.random() * 10 ** 30)
        this._arrayBolas = arrayBolas; // Array que contém todas as bolas
        this._palco = palco; // Referência ao palco onde as bolas serão adicionadas
// posição de spawn da bola
        this._px = Math.floor(Math.random() * larguraPalco);
        this._py = Math.floor(Math.random() * alturaPalco);
// tamanho
        this._tam = Math.floor(Math.random() * 50) + 10;
// cor aleatoria em RGB
        this._r = Math.floor(Math.random() * 255);
        this._g = Math.floor(Math.random() * 255);
        this._b = Math.floor(Math.random() * 255);
// velocidades
        this._velx = Math.random() * 2;
        this._vely = Math.random() * 2;
// direções
        this._dirx = (Math.random() * 10) > 5 ? 1 : -1;
        this._diry = (Math.random() * 10) > 5 ? 1 : -1;

        this._eu = null; // Referência ao elemento DOM da bola
        this.desenhar(); // Chama o método para desenhar a bola no palco
        this.controle = setInterval(() => this.controlar(), 10); // Inicia um intervalo para controlar o movimento da bola
    }

    remover() {
        clearInterval(this.controle);  // Para o intervalo que controla o movimento da bola
        this._arrayBolas = this._arrayBolas.filter(b => b._id !== this._id); // Remove a bola do array
        this._eu.remove();
        num_objetos.innerHTML = --numBola; // Atualiza o contador de bolas no DOM
    }

// Método para desenhar a bola no palco
    desenhar() {
        this._eu = document.createElement('div');
        this._eu.setAttribute('id', this._id);
        this._eu.setAttribute('class', 'bola');
        this._eu.setAttribute('style', `left:${this._px}px; top:${this._py}px; width:${this._tam}px; height:${this._tam}px; background-color:rgb(${this._r}, ${this._g}, ${this._b})`);
        this._palco.appendChild(this._eu);
        num_objetos.innerHTML = ++numBola; // Atualiza o contador de bolas no DOM
    }

    controle_bordas() {
// ao bater na parede ele muda a direção
        if (this._px + this._tam >= larguraPalco) // Muda a direção horizontal para esquerda se bater na borda direita
            this._dirx = -1;
        else if (this._px <= 0)  // Muda a direção horizontal para direita se bater na borda esquerda
            this._dirx = 1;
    
        if (this._py + this._tam >= alturaPalco) // Muda a direção vertical para cima se bater na borda inferior
            this._diry = -1;
        else if (this._py <= 0) // Muda a direção vertical para baixo se bater na borda superior
            this._diry = 1;
    }
// Método que controla o movimento da bola e a atualiza no DOM
    controlar() {
        this.controle_bordas();  // Verifica as bordas e ajusta a direção se necessário
        // Atualiza as posições da bola
        this._px += this._dirx * this._velx;
        this._py += this._diry * this._vely;
        this._eu.setAttribute('style', `left:${this._px}px; top:${this._py}px; width:${this._tam}px; height:${this._tam}px; background-color:rgb(${this._r}, ${this._g}, ${this._b})`);
        
        if (this._px > larguraPalco || this._py > alturaPalco) // Remove a bola se ela sair completamente do palco (precaução)
            this.remover();
    }
}

// Ajusta as dimensões do palco quando a janela é redimensionada
window.addEventListener('resize', () => { 
    larguraPalco = palco.offsetWidth;
    alturaPalco = palco.offsetHeight;
});

// Evento que adiciona novas bolas ao clicar no botão "Adicionar"
btn_add.addEventListener('click', () => {
   const qtde = parseInt(txt_qtde.value, 10);
   for (let i = 0; i < qtde; i++) {
        bolas.push(new Bola(bolas, palco));        
   }
   txt_qtde.focus();
});

// Evento que remove todas as bolas ao clicar no botão "Remover"
btn_remover.addEventListener('click', () => {
   bolas.forEach(bola => {
        bola.remover(); // Remove cada bola
   });
   bolas = [];
});

txt_qtde.focus();
