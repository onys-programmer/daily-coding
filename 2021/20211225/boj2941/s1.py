import sys
sys.stdin = open('input.txt')


def croatian_to_alpha(string):
    cnt = 0
    temp = []
    maybe_croatians = ['-', '=', 'c', 'd', 'z', 'l', 'j', 'n', 's']
    for char in string:
        if char not in maybe_croatians:
            # print(char)
            cnt += 1
        else:
            if char == '=':
                if temp.pop() == 'z':
                    if len(temp):
                        temp = []
                        cnt -= 1
                        # print('dz=')
                else:
                    # print('c or s or z')
                    continue
            elif char == '-':
                # print('c or d')
                temp = []
            elif char == 'j':
                if len(temp):
                    temp = []
                    # print('lj or nj')
                else:
                    # print(char)
                    cnt += 1
            else:
                temp.append(char)
                cnt += 1
    return cnt


inp = input()
print(croatian_to_alpha(inp))
