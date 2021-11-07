# def dfs(graph, start_node):
#     visited, need_visit = list(), list()
#     need_visit.append(start_node)

#     while need_visit:
#         node = need_visit.pop()
#         if node not in visited:
#             visited.append(node)
#             need_visit.extend(graph[node])

#     return visited
    
N, M, V = 4, 5, 1
edges = [[1, 2], [1, 3], [1, 4], [2, 3], [3, 4]]

def solution(N, M, V, edges):
    def dfs(start):
        graph = {}
        visited = []
        need_visit = []

        for edge in edges:
            if graph.get(edge[0]):
                graph[edge[0]].append(edge[1])
            else:
                graph[edge[0]] = [edge[1]]

            if graph.get(edge[1]):
                graph[edge[1]].append(edge[0])
            else:
                graph[edge[1]] = [edge[0]]
        
        need_visit.append(start)

        while need_visit:
            node = need_visit.pop()
            if node not in visited:
                visited.append(node)
                need_visit.extend(sorted(graph[node],reverse=True))
        
        print(visited)
    
    dfs(V)

solution(N,M,V,edges)