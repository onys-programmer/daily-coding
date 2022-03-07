import sys
sys.stdin = open('chat.py')
input = sys.stdin.readline

for _ in range(int(input())):
    a, b = map(int, input().split())
    my_set = [int(str(a)[-1])]
    temp = a

    if a % 10 == 0:
        print(10)
        continue

    if b == 1:
        print(my_set[0])
        continue

    while True:
        rst = temp * a
        if rst > 10:
            rst %= 10

        if rst in my_set:
            break

        temp = rst
        my_set.append(rst)

    idx = (b % len(my_set)) - 1 if b >= len(my_set) else b
    print(my_set[idx])
