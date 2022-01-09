# 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램
# 정점 여러개인 경우 => 정점 번호가 작은 것을 먼저 방문
# 더 방문할 점이 없는 경우 종료
# 정점의 개수N, 간선의 개수M, 탐색 시작 정점 번호V

graph = {}

def bfs(graph, start_node):
    visited = []
    need_visit = []

    need_visit.append(start_node)

    while need_visit:
        node = need_visit.pop(0)
        if node not in visited:
            visited.append(node)
            need_visit.extend(graph[node])

    return visited
