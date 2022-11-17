// Поиск в ширину в графе

const graph = {};
graph.a = ['b', 'c']; // из вершины а мы имеем путь к в и с
graph.b = ['f']; // из вершины в мы имеем путь к f
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];