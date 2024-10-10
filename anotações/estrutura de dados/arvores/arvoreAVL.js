class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // Cada nó começa com altura 1 (considerando ele mesmo)
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Função para obter a altura de um nó
    height(node) {
        return node ? node.height : 0;
    }

    // Função para calcular o fator de balanceamento de um nó
    getBalanceFactor(node) {
        return node ? this.height(node.left) - this.height(node.right) : 0;
    }

    // Rotação à direita (LL Rotation)
    rotateRight(y) { // 30 delete
        const x = y.left; // 29 delete
        const T2 = x.right; // null delete

        // Realiza a rotação
        x.right = y; // 30 delete
        y.left = T2; // null

        // Atualiza as alturas
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

        // Retorna a nova raiz
        return x;
    }

    // Rotação à esquerda (RR Rotation)
    rotateLeft(x) { // 12
        const y = x.right; // 29 delete
        const T2 = y.left; // null delete

        // Realiza a rotação
        y.left = x; // 12 delete
        x.right = T2; // null delete

        // Atualiza as alturas
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

        // Retorna a nova raiz
        return y;
    }

    // Inserção de um nó com balanceamento AVL
    push(value) {
        this.root = this._insert(this.root, value);
    }
//  isso verifica e desbalanceia a arvore antes de retornar ela balanceada
    _insert(node, value) {
        // Passo 1: Inserir normalmente na árvore binária de busca
        if (node === null) {
            return new Node(value); // cria os nós a cada push
        }

        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        } else {
            throw new Error("Tente um valor diferente"); // valores duplicados não permitidos
        }

//      Passo 2: Atualizar a altura do nó ancestral
        node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;

//      Passo 3: Obter o fator de balanceamento
//      isso é a diferença entre as alturas da subárvore esquerda e da subárvore direita de um nó
        const balanceFactor = this.getBalanceFactor(node);

//      Passo 4: Verificar os casos de desbalanceamento
//      Caso LL - Rotação à direita
        if (balanceFactor > 1 && value < node.left.value) { // o valor é menor que o valor da subarvore a esquerda?
            return this.rotateRight(node);
        }

        // Caso RR - Rotação à esquerda
        if (balanceFactor < -1 && value > node.right.value) { // o valor é maior que o valor da subarvore a direita?
            return this.rotateLeft(node);
        }

        // Caso LR - Rotação dupla esquerda-direita
        if (balanceFactor > 1 && value > node.left.value) { // o valor é maior que o valor da subarvore a esquerda?
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Caso RL - Rotação dupla direita-esquerda
        if (balanceFactor < -1 && value < node.right.value) { // o valor é menor que o valor da subarvore a direita?
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        // Retorna o nó sem alterações se estiver balanceado
        return node;
    }

   // Função de remoção com balanceamento AVL
   remove(node, value) {
    if (node === null) return node;

    // Passo 1: Remover normalmente na árvore binária de busca
    if (value < node.value) {
        node.left = this.remove(node.left, value);
    } else if (value > node.value) {
        node.right = this.remove(node.right, value);
    } else {
        // Nó encontrado
//      verifica se tem filhos ou não e faz operações
        if (!node.left || !node.right) { 
            node = node.left ? node.left : node.right; // substitui o nó do pai pelo o do filho
        } else { // tem dois filhos
            const temp = this.getMin(node.right); // 30 delete
            node.value = temp.value; // 29 => 30 delete
            node.right = this.remove(node.right, temp.value);
        }
    }
  
    if (node === null) return node;

    // Atualizar altura
    node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;

    // Obter o fator de balanceamento
    const balanceFactor = this.getBalanceFactor(node);

    // Verificar e corrigir desbalanceamento
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) {
        return this.rotateRight(node);
    }

    if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
    }

    if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) {
        return this.rotateLeft(node);
    }

    if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
    }

    return node;
}

    // Função para obter o nó com menor valor
    getMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    // Percurso In-Order
    inOrder(node) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    // Percurso Pre-Order
    preOrder(node) {
        if (node) {
            console.log(node.value); // Visita a raiz primeiro
            this.preOrder(node.left); // Depois visita o filho esquerdo
            this.preOrder(node.right); // E finalmente o filho direito
        }
    }

    // Percurso Post-Order
    postOrder(node) {
        if (node) {
            this.postOrder(node.left); // Visita o filho esquerdo primeiro
            this.postOrder(node.right); // Depois visita o filho direito
            console.log(node.value); // E finalmente visita a raiz
        }
    }
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

    maxNode(){
        let current = this.root
        while(current){
            if(current.right)
                current = current.right
            else
                return current.value
        }
    }
    minNode(){
        let current = this.root
        while(current){
            if(current.left)
                current = current.left
            else
                return current.value
        }
    }
}

// Teste da árvore AVL
const avlTree = new AVLTree();
avlTree.push(12) //      12                 29
avlTree.push(2)  //    2   30              /  \ 
avlTree.push(30) //       /  \     =>    12    30
avlTree.push(29) //      29  31    =>   /  \    \
avlTree.push(31) //     /              2    28   31
avlTree.push(28) //    28          || arvore balanceada automaticamente com duas rotações

avlTree.remove(avlTree.root, 29) // remove um valor especifico

let search = avlTree.search(avlTree.root,29) // procurar um valor especifico na arvore
console.log((search)? search.value + ' foi encontrado!': 'O valor não foi encontrado');

console.log(JSON.stringify(avlTree.root, null, 2));

// console.log("Percurso In-Order da Árvore AVL:");
// avlTree.inOrder(avlTree.root);

// console.log("Percurso Pre-Order da Árvore AVL:");
// avlTree.preOrder(avlTree.root);

// console.log("Percurso Post-Order da Árvore AVL:");
// avlTree.postOrder(avlTree.root);
