class Node { // os nós da lista
    constructor(element){ 
        this.value = element
        this.next = undefined
    }
}

class LinkedList {
    constructor(){
        this.head = undefined // o primeiro nó da lista que é a cabeça
        this.count = 0 // conta o quantidade de nós na lista
    }
    //adiciona um novo nó no final da lista 
    push(element){
        const newnode = new Node(element) // cria o nó
        let current = undefined // ele vai apontar na memoria o elemento atual 

        if(this.head == undefined){ // a lista  esta vazia?
            this.head = newnode// head -> nó1 (element + (next == undefined))
        } else { // quando der o segundo push | newnode == nó2 (element + (next == undefined)
           current = this.head // aponta para o primeiro nó criado | nó1 (element + (next == null))
           while(current.next != null){ // enquanto o próximo nó existir
                current = current.next // current entra no próximo nó que é o nó2
           }
           current.next = newnode // nó1 { value: 12, next: Nó2 { value: 21, next: undefined } },
        }
        this.count++
    }
    // pega um elemento na posição especifica
    getElementAt(position){
        if(position >= 0 && position <= this.count){
            let node = this.head // aponta para o primeiro nó
            for(let i = 0; i < position && node != null; i++){ //ele itera de acordo com a quantidade de nós
                node = node.next // passa pro próximo nó
            }
            return node // retorna o nó encontrado
        }
        return undefined // caso não encotre nada
    }
    // insere um novo nó na posição especifica
    insertAt(element, position){
        if(position >= 0 && position <= this.count){
            const node = new Node(element)
            if(position === 0){ // na primeira posição
                const current = this.head // aponta para o primeiro nó
                node.next = current // o next do novo nó criado aponta para primeiro nó
                this.head = node // a cabeça aponta para o novo primeiro nó
            } else {
                const previous = this.getElementAt(position - 1) // aponta para o elemento anterior a posição mencionada
                const current = previous.next // aponta pro nó da posição mencionada
                node.next = current // o novo node aponta para o nó a frente
                previous.next = node // e o previous aponta para o novo nó
            }
            this.count++
            return true
        }
        return false
    }
    // remove um elmento na posição especifica
    removeAt(position){
        if(position >= 0 && position <= this.count){
            if(position === 0){
                const current = this.head
                this.head = current.next // o primeiro nó é substituido pelo segundo (se NULL: desaparece)
            } else {
                const previous = this.getElementAt(position - 1) // nó anterior
                const current = this.getElementAt(position) // nó atual
                previous.next = current.next // o nó anterior aponta para o nó de duas casas a frente
            }
            this.count--
            return true
        }
        return false
    }
    //indexOf(element) // retorna a posição especifica de um elemento na lista
    indexOf(element) { // obs: se tiver dois elementos repetidos na lista ele retornara o primeiro
        if(!this.isEmpty()){
            let current = this.head
            for(let i = 0; current != null; i++){ // percorre toda a lista
                if(current.value == element)
                    return i
                else
                    current = current.next // próximo nó
            }
            return undefined
        }
    }
    // isEmpty() checar se a lista esta vazia
    isEmpty(){
        return (this.head == undefined)? true : false
    }
    // tamanho da lista
    size(){
        return this.count 
    }
    // remove() remove um elemento no final da lista
    remove(){
        let previous = this.getElementAt(this.count - 2) 
        previous.next = undefined
        this.count--
    }

    scroll(option) {
        let current = this.head; // Assume que this.head é o início da lista
        let arr = []        
        let lastNode
        
       
        // Percorre a lista ligada
        while (current !== undefined) {
            if(option == 1) console.log(current.value);  // Imprime o valor de cada nó
            arr.push(current.value)
            if(current.next == undefined) lastNode = current
            current = current.next;    // Move para o próximo nó
        }
        if(option == 2) // retornar os valores da lista em um array
            return arr
        else if(option == 3) // retornar o ultimo nó da lista
            return lastNode
        else if(option != 1)
            throw new Error('scroll() deve haver um paramêtro: \n  1. imprimir os valores da lista \n  2. retornar os valores da lista em um array \n  3. retornar o ultimo nó da lista\n')
        
    }
}
// const lista = new LinkedList()
// console.log(lista.isEmpty());
// lista.push(12) 
// lista.push(2) 


// // lista.removeAt(0)
// // console.log(lista.getElementAt(lista.size() - 1));
// console.log(lista);
// lista.scroll(0)


//  export {LinkedList, Node}
// import {LinkedList, Node} from '../curso de js/anotações/estrutura de dados/LinkedList.mjs'



// SALVE ESSE CODIGO 



// percorrer a lista: Big O(n), inserir/remover: Big O(1)
// a estrutura da lista funciona assim head -> nó (value + next) -> nó (value + next) -> undefined
// ela se inicializa assim head -> undefined, e depois vai adicionando os nós 