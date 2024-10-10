class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

// uma arvore binaria em que somente os nós do lado lefts tem os menores valores
class BinaryTree{
    constructor(){
        this.root = null
        this.arrPre = []
        this.arrIn = []
        this.arrPost = []
    }
    // adicionar nós
    push(value){
        const newnode = new Node(value)
        if(!this.root){
            this.root = newnode // primeiro nó que é a raiz
        } else {
            let current = this.root
            while(current){
                if(value < current.value){
                    if(!current.left){ // não tem nó esquerd0?
                        current.left = newnode
                        break
                    } else {
                        current = current.left // ele entra no próximo nó a esquerda
                    }
                } else if(value > current.value){
                    if(!current.right){ // não tem nó direit0?
                        current.right = newnode
                        break
                    } else {
                        current = current.right // ele entra no próximo nó a direita
                    }
                } else {
                    throw new Error('tente um valor diferente')
                }
            }
        }
    }
// Encontrar o sucessor in-order (menor valor na subárvore à direita do nó)
    getMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    // Remover nós
    remove(node, value) {
        if (node === null) { // a raiz é vazia?
            return node;
        }

        if (value < node.value) {
            node.left = this.remove(node.left, value); // ir para a subárvore esquerda
        } else if (value > node.value) {
            node.right = this.remove(node.right, value); // ir para a subárvore direita
        } else { // se for igual
            // aqui ele faz as alterações na arvore
            // Caso 1: Nó é uma folha (sem filhos)
            if (node.left === null && node.right === null) {
                return null; // value == 2, this.root.left = null(removido)
            }

            // Caso 2: Nó tem apenas um filho
            // aqui o next do võ que apontava para seu filho(pai) agora aponta para seu neto(filho de pai)
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Caso 3: Nó tem dois filhos
            // Encontrar o sucessor (menor valor da subárvore à direita)
            const successor = this.getMin(node.right); // sucessor = node[31]
            node.value = successor.value; // aqui ele substitui o valor pelo do sucessor e nao o seu nó // node[30].value = 31
            node.right = this.remove(node.right, successor.value); // Remover o sucessor da subárvore à direita // 31 = 32
        }
        return node // sem isso ele não pode retornar o nó para a recursividade de node.right na linha 62
    }

    // percurso Pré ordem
    preOrder(node) {
        if(node) { 
            this.arrPre.push(node.value);  // guarda em array para imprimir
            // recursividade BIG O(n)
            this.preOrder(node.left); // Percorrendo a subárvore esquerda
            this.preOrder(node.right); // Percorrendo a subárvore right             
        }
    }
    // percursp Em ordem
    inOrder(node) {
        if(node) {
            this.inOrder(node.left);   // Percorre a subárvore esquerda
            this.arrIn.push(node.value);  // guarda em array para imprimir
            this.inOrder(node.right);  // Percorre a subárvore direita
        }
    }
    // Percurso pós-ordem
    postOrder(node) {
        if (node) {
            this.postOrder(node.left);  // Percorre a subárvore esquerda
            this.postOrder(node.right); // Percorre a subárvore direita 
            this.arrPost.push(node.value);  // guarda em array para imprimir
        }
    }
    // Método para calcular a altura em termos de nós
    height(node) {
        if (node === null) 
            return 0; // Retorna 0 para árvores vazias
         else 
            // Calcula a altura dos filhos à esquerda e à direita
            return Math.max(this.height(node.left), this.height(node.right)) + 1; 
    }  
  /* depuração do height
Visitando nó: 12
Visitando nó: 2
Altura do nó 2: 1
Visitando nó: 30
Visitando nó: 29
Altura do nó 29: 1
Visitando nó: 31
Altura do nó 31: 1
Altura do nó 30: 2
Altura do nó 12: 3
Altura da árvore: 3
  */
//  encontrar valores na arvore
    search(node, value) { 
        if (node === null) // arvore vazia
            return undefined // Valor não encontrado
        
        if (node.value === value) 
            return node

        // encontrando o nó a ser removido
        if (value < node.value) 
            return this.search(node.left, value); // Procura na subárvore esquerda
        else
            return this.search(node.right, value); // Procura na subárvore direita
    }
    // Método de percurso em nível utilizando fila (push/shift)
    levelOrder() {
        if (!this.root) return [];

        let result = [];
        let queue = [this.root]; // fila

        while (queue.length > 0) {
            let current = queue.shift(); // Remove o nó da frente da fila
            result.push(current.value); // Adiciona o valor ao resultado

            if (current.left) 
                queue.push(current.left); // Adiciona o nó filho da esquerda à fila
            
            if (current.right) 
                queue.push(current.right); // Adiciona o nó filho da direita à fila
        }
        return result;
    }
//  maior nó
    maxNode(){
        let current = this.root
        while(current){
            if(current.right)
                current = current.right
            else
                return current.value
        }
    }
//  menor nó
    minNode(){
        let current = this.root
        while(current){
            if(current.left)
                current = current.left
            else
                return current.value
        }
    }
// quando precisar fazer o percurso duas vezes ou mais utilize esse metodo
    clearArrays(){
        this.arrIn = []
        this.arrPre = []
        this.arrPost = []
    }
 
}

const tree = new BinaryTree()
tree.push(12) //      12
tree.push(2)  //    2   30
tree.push(30) //       /  \
tree.push(29) //      29  31
tree.push(31) //            \
tree.push(32) //            32
tree.remove(tree.root,30) // remoção de um valor especifico na arvore
let search = tree.search(tree.root,30) // procurar um valor especifico na arvore
console.log((search)? search.value + ' foi encontrado!': 'O valor não foi encontrado');

// console.log(JSON.stringify(tree.root, null, 2)); // imprimir a arvore em forma de JSON
// console.log(tree.maxNode()); // maior nó
// console.log(tree.minNode()); // menor nó

// console.log(tree.height(tree.root)) // altura
// percursos 
// console.log(tree.levelOrder());

// tree.preOrder(tree.root)
// console.log('Pré Ordem: ' + tree.arrPre);

// tree.inOrder(tree.root)
// console.log('Em Ordem: ' + tree.arrIn);

// tree.postOrder(tree.root)
// console.log('Pós Ordem: ' + tree.arrPost);

