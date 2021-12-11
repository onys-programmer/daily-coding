x, y, w, h = map(int, input().split())

min_x = x if w / 2 > x else w - x
min_y = y if h / 2 > y else h - y

print(min(min_x, min_y))
