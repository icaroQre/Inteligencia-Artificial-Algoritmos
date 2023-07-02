// Definindo grafo baseado no mapa
grafo = {
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
    'Fagaras': {'Sibiu': 99, 'Bucharest': 211},
    'Pitesti': {'Rimnicu Vilcea': 97, 'Craiova': 138, 'Bucharest': 101},
    'Bucharest': {'Fagaras': 211, 'Pitesti': 101, 'Giurgiu': 90, 'Urziceni': 85},
    'Giurgiu': {'Bucharest': 90},
    'Urziceni': {'Bucharest': 85, 'Hirsova': 98, 'Vaslui': 142},
    'Hirsova': {'Urziceni': 98, 'Eforie': 86},
    'Eforie': {'Hirsova': 86},
    'Vaslui': {'Urziceni': 142, 'Iasi': 92},
    'Iasi': {'Vaslui': 92, 'Neamt': 87},
    'Neamt': {'Iasi': 87}
}

// Vértices que já tiveram todas as suas arestas verificadas 
let visitados = [];
// Pai de cada vértice
let pai = [];
// Distância de cada vértice
let distancia = [];
// Vértices que vão ser percorridos
let fila = [];

console.log('Inicializando o algoritimo de Dijkstra \n')

const dijkstra = (origem, objetivo) => {

    // Define por onde a verificação deve começar
    fila[0] = origem;

    while (borda) {

        //Vértice que vai ser explorado neste momento
        no = borda.pop(0);

        //Verifica se o nó já foi visitado
        if (visitados.includes(no) == false){
            
            // Verifica se o nó já chegou no objetivo
            if (no == objetivo){
                return;
            }
            // Se não, visita ele
            else{
                visitados.push(no)
            }
        }

    }

}