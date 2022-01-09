inp_list = list(map(int, input().split()))

inp_list.remove(max(inp_list))
print(max(inp_list))
