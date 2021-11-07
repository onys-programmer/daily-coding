from collections import deque

def solution(C, B):
    result = 0
    time = 1
    current_C = C
    dq = deque([B])
    found = 0

    while True:
        if current_C > 200000:
            result = -1
            break
        current_C += time
        for _ in range(len(dq)):
            num = dq.popleft()
            b_plus = num + 1
            b_minus = num - 1
            b_times = num * 2

            if b_plus == current_C or b_minus == current_C or b_times == current_C:
                result = time
                found = 1
                break
            else:
                dq.append(b_plus)
                dq.append(b_minus)
                dq.append(b_times)

        if found:
            break
        time += 1

    return result

print(solution(11, 2))
