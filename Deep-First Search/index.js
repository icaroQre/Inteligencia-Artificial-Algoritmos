console.log("Iniciando o algoritmo Deep-First Search");

//Função que aplica o Deep-First Search
//Recebe um grafo, o ponto inicial de busca e o ponto de objetivo como parâmetro
const dfs = (graph, start, objective) => {
    
    console.log("Saindo do ponto: " + start)
    
    let visited = new Set() //Conjunto para armazenar os nós que já foram visitados (set, conjunto que evita elementos duplicados)
    let stack = [start] //Pilha para armazenar os nós que vão ser visitados
    
    while(stack.length != 0) {
        let node = stack.pop() //Define um nó, removendo o nó do topo da pilha
        
        //Verifica se o nó já foi visitado
        //Se ainda não foi
        if(!visited.has(node)){
            console.log(node) //Imprimi o nó que está visitando
            visited.add(node) //Adiciona o no conjunto dos visitados
            
            //Se o nó for o nó de destino, encerra o programa
            if(node == objective){
                console.log("Você chegou ao seu destino: " + objective)
                return 0
            }
            
            //Para cada nó adjacentes desse nó que está visitando
            for(let adjacentNode of graph[node]){
                //Verifica se esse nó adjacente ainda não foi visitado
                if(!visited.has(adjacentNode)){
                    stack.push(adjacentNode) //O adciona na pilha dos nós a serem visitados
                }
            }
        }
    }
}

//Defininfo um Grafo
let graphCities = {
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
  'Fagaras': ['Sibiu', 'Bucharest'],
  'Pitesti': ['Rimnicu Vilcea', 'Craiova', 'Bucharest'],
  'Bucharest': ['Fagaras', 'Pitesti', 'Giurgiu', 'Urziceni'],
  'Giurgiu': ['Bucharest'],
  'Urziceni': ['Bucharest', 'Hirsova', 'Vaslui'],
  'Hirsova': ['Urziceni', 'Eforie'],
  'Eforie': ['Hirsova'],
  'Vaslui': ['Urziceni', 'Iasi'],
  'Iasi': ['Vaslui', 'Neamt'],
  'Neamt': ['Iasi'],
}

dfs(graphCities, 'Zerind', 'Iasi') //Chamando o algoritmo e passando o grafo a percorrer, o ponto inicial e o ponto de destino