import heapq

my_graph = {
    'A': {'B':8, 'C':1, 'D':2},
    'B': {},
    'C': {'B': 5, 'D':2},
    'D': {'E': 3, 'F':5},
    'E': {'F': 1},
    'F': {'A':5}
}

def dijkstra(graph, start):

    distances = {node:float('inf') for node in graph}
    distances[start] = 0
    queue = []
    heapq.heappush(queue, [distances[start], start])

    while queue:
        current_distance, current_node = heapq.heappop(queue)

        if distances[current_node] < current_distance:
            continue

        for adjacent, weight in graph[current_node].items():
            distance = current_distance + weight
        
            if distance < distances[adjacent]:
                distances[adjacent] = distance
                heapq.heappush(queue, [distance, adjacent])
    
    return distances

# print(dijkstra(my_graph, 'A'))

def solution(n, vertex):
    my_graph = {}

    for arr in vertex:
        if my_graph.get(str([arr[1]])) == None:
            my_graph.update({str(arr[1]):{str(arr[0]):1}})
        else:
            print('exist!')
        
    print(my_graph)
    distances = {node:float('inf') for node in range(1 , n+1)}
    distances[1] = 0
    queue = []
    heapq.heappush(queue, [distances[1], 1])

    # print(queue)

    return 0
solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])