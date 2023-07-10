// Definindo o grafo
graph = {
    'Oradea': ['Zerind', 'Sibiu'],
    'Zerind': ['Arad', 'Oradea'],
    'Arad': ['Zerind', 'Sibiu', 'Timisoara'],
    'Timisoara': ['Arad', 'Lugoj'],
    'Lugoj': ['Timisoara', 'Mehadia'],
    'Mehadia': ['Lugoj', 'Dobreta'],
    'Dobreta': ['Mehadia', 'Craiova'],
    'Craiova': ['Dobreta', 'Rimnicu Vilcea', 'Pitesti'],
    'Sibiu': ['Oradea', 'Arad', 'Fagaras', 'Rimnicu Vilcea'],
    'Rimnicu Vilcea': ['Sibiu', 'Craiova', 'Pitesti'],
    'Pitesti': ['Rimnicu Vilcea', 'Craiova', 'Bucharest'],
    'Bucharest': ['Fagaras', 'Pitesti', 'Giurgiu', 'Urziceni'],
    'Fagaras': ['Sibiu', 'Bucharest'],
    'Giurgiu': ['Bucharest'],
    'Urziceni': ['Bucharest', 'Hirsova', 'Vaslui'],
    'Hirsova': ['Urziceni', 'Eforie'],
    'Eforie': ['Hirsova'],
    'Vaslui': ['Urziceni', 'Iasi'],
    'Iasi': ['Vaslui', 'Neamt'],
    'Neamt': ['Iasi']
    }

// Inicia o vetor de visistados
let visited = []
let find = false

// Função que aplicará o algoritmo Deep-First Search, recebendo como parâmetros, um grafo, uma cidade de origem e uma cidade de destino
function dfs (graph, node, destiny) { 
    
    visited.push(node) // Adiciona o nó ao vetor de visitados 
    console.log(node) // Imprime o vertice que está visiteando 

    // Se o nó que está visiteando for o destino, então o algoritmo marca como encontrado e retorna
    if(node == destiny){
        console.log('Você chegou ao seu destino!')
        find = true
        return
    }

    // Para cada nó adjacente do nó que está visitando
    for (var adjNode in graph[node]){

        // Se o destino já foi encontrado ele não continua a verificação por outros caminhos
        if(find == true){
            return
        }

        // Se ainda não foi visitado, chama a função passando o nó adjacente sendo o nó que deverá ser explorado
        if(!visited.includes(graph[node][adjNode])){
            dfs(graph, graph[node][adjNode], destiny)
        }
    }
}

dfs(graph, 'Zerind', 'Bucharest')

