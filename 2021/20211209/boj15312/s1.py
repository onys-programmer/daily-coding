import sys
sys.stdin = open('input.txt')
sys.setrecursionlimit(100000)


# 한글자씩 겹쳐 획수 배열 구하기
def get_joined_stroke(a, b):
    strokes = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1]

    joined_stroke = []
    for i in range(len(a)):
        joined_stroke.append(strokes[ord(a[i]) - 65])
        joined_stroke.append(strokes[ord(b[i]) - 65])
    return joined_stroke


# 획수 계산하기
def recur(arr):
    if len(arr) == 2:
        return str(arr[0]) + str(arr[1])

    new_arr = []
    for i in range(0, len(arr) - 1):
        new_arr.append((arr[i] + arr[i + 1]) % 10)
    return recur(new_arr)


print(recur(get_joined_stroke(input(), input())))
