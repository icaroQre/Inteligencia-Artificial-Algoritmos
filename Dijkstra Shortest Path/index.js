// Definindo grafo baseado no mapa
graph = {
    'Oradea': {'Zerind': 71, 'Sibiu': 151},
    'Zerind': {'Arad': 75, 'Oradea': 71},
    'Arad': {'Zerind': 75, 'Sibiu': 140, 'Timisoara': 118},
    'Timisoara': {'Arad': 118, 'Lugoj': 111},
    'Lugoj': {'Timisoara': 111, 'Mehadia': 70},
    'Mehadia': {'Lugoj': 70, 'Dobreta': 75},
    'Dobreta': {'Mehadia': 75, 'Craiova': 120},
    'Craiova': {'Dobreta': 120, 'Rimnicu Vilcea': 146, 'Pitesti': 138},
    'Sibiu': {'Oradea': 151, 'Arad': 140, 'Fagaras': 99, 'Rimnicu Vilcea': 80},
    'Rimnicu Vilcea': {'Sibiu': 80, 'Craiova': 146, 'Pitesti': 97},
    'Pitesti': {'Rimnicu Vilcea': 97, 'Craiova': 138, 'Bucharest': 101},
    'Bucharest': {'Fagaras': 211, 'Pitesti': 101, 'Giurgiu': 90, 'Urziceni': 85},
    'Fagaras': {'Sibiu': 99, 'Bucharest': 211},
    'Giurgiu': {'Bucharest': 90},
    'Urziceni': {'Bucharest': 85, 'Hirsova': 98, 'Vaslui': 142},
    'Hirsova': {'Urziceni': 98, 'Eforie': 86},
    'Eforie': {'Hirsova': 86},
    'Vaslui': {'Urziceni': 142, 'Iasi': 92},
    'Iasi': {'Vaslui': 92, 'Neamt': 87},
    'Neamt': {'Iasi': 87}
}

function djk (graph, source, destiny) {
    
    let visited = [] // Incia um vetor para armazenar os vértices que já foram visitados
    let parent = [] // Inicia um vetor para armazenar os pais de cada vértice
    let cost = [] // Inicia um vetor para armazenar a distância do ponto de partida até cada vértice
    let queue = [] // Inicia uma fila para armazenar os nós a serem visitados

    for (var element in graph){
        parent[element] = null
        cost[element] = Infinity
    }
    
    parent[source] = source // Marca o pai do nó inicial sendo ele mesmo
    cost[source] = 0 // Adiciona a distância do vértice inicial no vetor de distâncias
    
    queue.push(source) // Inicia a fila dos nós para serem visitados
    visited.push(source) // Adiciona o vértice de origem no vetor de visitados
    
    
    // Enquanto a fila não estiver vazia
    while (queue.length > 0) {
    
        var currentNode = queue.shift() // Pega o vértice atual da fila
        visited.push(currentNode) // Adiciona o vértice atual no vetor de visitados
        
        // Verifica se o vértice atual é o destino
        if (currentNode == destiny) {

            var path = [] // Inicia um vetor para armazenar o nós do caminho até o destino

            // Enquanto o nó atual não for a origem
            while (currentNode!= source) {
                path.unshift(currentNode) // Adiciona o nó ao vetor de caminho
                currentNode = parent[currentNode] // Define o nó atual sendo o pai do nó atual
            }
            path.unshift(source) // Adiciona o vértice inicial no vetor de caminhos
            return console.log("Custo minimo de " + source + ", até " + destiny + " é: " + cost[destiny] + "\nCaminho:\n" + path)
        }

        // Para cada nó adjacente do nó atual
        for (var adjNode in graph[currentNode]) {
            
            // Verifica se o nó adjacente ainda não foi visitado
            if(!visited.includes(adjNode)){

                // Se o custo por esse caminho for menor que o custo que está salvo, substitui o caminho
                 if((cost[currentNode] + graph[currentNode][adjNode]) < cost[adjNode]){
                    cost[adjNode] = cost[currentNode] + graph[currentNode][adjNode] // Define o custo sendo, o custo da origem até o pai (custo acumulado) + custo do pai até o nó adjacente 
                    parent[adjNode] = currentNode // Define o nó atual como pai do vértice adjacente
                }

                queue.push(adjNode) // Adiciona o vértice adjacente no fila para ser explorado
                queue.sort(function (a, b){ // Ordena a fila para que o menor custo seja o próxmo a ser explorado 
                    return cost[a] - cost[b]
                })
            }
        }
    }
}

djk(graph, 'Oradea', 'Bucharest')