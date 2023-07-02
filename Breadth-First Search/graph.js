// Criando uma classe grafo
class Graph {
    constructor(){
        // Cria uma estrutura para os vertices e arestas
        this.edges = new Map()
    }

    // Adiciona um vértice com uma lista de adjacência vazia
    addVertex(vertex){
        this.edges.set(vertex, []);
    }
    
    // Adiciona uma aresta entre um ponto inicial e um destino
    addEdge(source, destiny){
        this.edges.get(source).push(destiny)

        // Como o grafo não é direcional, também cria uma conexão entre o destino e o ponto inicial
        this.edges.get(destiny).push(source)
    }

    // Método que imprime o grafo
    printGraph(){
        // Pega todos os vértices (chaves da estrutura Map, edges)
        var vertices = Array.from(this.edges.keys())

        // Para cada vestice, imprime a chave e os valores
        vertices.map(element => console.log(element + " => " + this.edges.get(element)))
    }
}

// Exportando a classe
module.exports = Graph