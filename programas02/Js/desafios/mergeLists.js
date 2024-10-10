var mergeTwoLists = function(list1, list2) {

    if (!list1) return list2;
    if (!list2) return list1;

    // Cria um nó sentinela para facilitar a fusão
    let head = new newNode(-1); // ele é o pai
    let current = head;

    // Enquanto ambas as listas não forem nulas
    while (list1 !== null && list2 !== null) {
        // Compara os valores e adiciona o menor à nova lista
        if (list1.val < list2.val) {
            current.next = list1; 
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        // Move o ponteiro da nova lista
        current = current.next;
    }

    // Se uma das listas ainda tiver nós, anexa-os ao final
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Retorna o próximo nó de 'head', que é o início da lista mesclada
    return head.next; // retorna toda a lista
};
class newNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
let list1 = new newNode(1, new newNode(2, new newNode(4)))
let list2 = new newNode(1, new newNode(3, new newNode(4)))
console.log(JSON.stringify(mergeTwoLists(list1, list2)));


