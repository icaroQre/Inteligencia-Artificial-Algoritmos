// Importando a classe Graph
const Graph = require("./graph.js")

// Instância o objeto graph
var graph = new Graph()

// Adicionando vértices no grafo
var vertices = [
    'Oradea',
    'Zerind',
    'Arad',
    'Timisoara',
    'Lugoj',
    'Mehadia',
    'Dobreta',
    'Sibiu',
    'Rimnicu Vilcea',
    'Craiova',
    'Fagaras',
    'Pitesti',
    'Bucharest',
    'Giurgiu',
    'Neamt',
    'Iasi',
    'Vaslui',
    'Urziceni',
    'Hirsova',
    'Eforie',
]
for(var i = 0; i < vertices.length; i++){
    graph.addVertex(vertices[i])
}

// Adicionando as conexões entre os vertices
graph.addEdge('Oradea', 'Zerind')
graph.addEdge('Oradea', 'Sibiu')
graph.addEdge('Zerind', 'Arad')
graph.addEdge('Arad', 'Timisoara')
graph.addEdge('Arad', 'Sibiu')
graph.addEdge('Timisoara', 'Lugoj')
graph.addEdge('Lugoj', 'Mehadia')
graph.addEdge('Mehadia', 'Dobreta')
graph.addEdge('Sibiu', 'Rimnicu Vilcea')
graph.addEdge('Sibiu', 'Fagaras')
graph.addEdge('Rimnicu Vilcea', 'Craiova')
graph.addEdge('Rimnicu Vilcea', 'Pitesti')
graph.addEdge('Craiova', 'Pitesti')
graph.addEdge('Fagaras', 'Bucharest')
graph.addEdge('Pitesti', 'Bucharest')
graph.addEdge('Bucharest', 'Giurgiu')
graph.addEdge('Bucharest', 'Urziceni')
graph.addEdge('Urziceni', 'Vaslui')
graph.addEdge('Urziceni', 'Hirsova')
graph.addEdge('Hirsova', 'Eforie')
graph.addEdge('Vaslui', 'Iasi')
graph.addEdge('Iasi', 'Neamt')

// Função que aplica o algoritmo Breadth-First Search, recebendo como parâmetro um grafo, um ponto de inicio e um objetivo
function bfs(graph, source, destiny){
    console.log('Iniciando o algoritmo Breadth-First Search...\n');
    console.log('Saindo do ponto de: ' + source)
    console.log('Para o ponto de: ' + destiny + '\n')

    let queue = [] // Cria uma fila de nós a serem visitados
    let visited = [] // Cria um vetor para armazenar os nós visitados
    let parent = [] // Cria um vetor para armazenar os nós pai
    let distance = [] // Cria um vetor para armazenar a distância entre os nós

    // Cria um vetor com os vértices do grafo
    var vertices = Array.from(graph.edges.keys())
    // Marca a distância do ponto inicial à todo vértice como infinito
    // Marca o pai de todo vértice como vazio
    vertices.forEach(function (element) {
        distance[element] = Infinity
        parent[element] = null
    })

    queue.push(source) // Adiciona o ponto inicial a fila para ser visitado

    visited.push(source) // Adiciona o ponto inicial na lista de visitados
    distance[source] = 0 // Marca a distância até ele como zero
    parent[source] = source // Marca o pai do ponto inicial sendo ele mesmo
    
    // Enquanto a fila tiver elementos para ser visitados
    while(queue.length > 0){

        var node = queue.shift() // Nó atual que está sendo visitado, retira o nó da fila

        // Verifica se o nó atual não é o destino
        // Se for o destino
        if(node == destiny){
            // Imprimi uma mensagem que foi encontrado
            console.log('Encontrado!')

            var path = [] // Inicia um array para guardar o caminho
            var aux = destiny // Inicia uma variavel auxiliar com o valor do destino

            // enquanto a variável aux não for igual ao ponto de início
            while(aux != source){
                path.unshift(aux) // Adiciona a variável no início do array de caminho
                aux = parent[aux] // Atribui o valor do pai da variável a variável                  
            }
            path.unshift(source) // Adiciona o ponto inicial no array
            console.log("Caminho: " + path) // Imprime o caminho
            return
        }

        // Se não for
        else{
            // Visita os nós adjacentes do nó atual
            graph.edges.get(node).forEach(element => {
                
                //Se o nó adjacente ainda não está no vetor de visitados
                if(!visited.includes(element)){

                    parent[element] = node // Marca o pai do nó adjacente sendo o nó atual
                    distance[element] = distance[node] + 1 // Marca a distância até o nó adjacente como, a distância do início até o pai + 1
                    queue.push(element) // Adiciona o nó adjacente na fila para ser visitado
                    visited.push(element) // Adiciona o nó adjacente no vetor como visitado
                }
            });
        }
    }
}

// Chama a função do bfs passando como parâmetro o grafo a percorrer, o ponto de início e o ponto de destino 
bfs(graph, 'Zerind', 'Bucharest')