import re

str = input()
if str == ' ':
    print(0)
else:
    str = re.sub('^\s|\s$|^\s$', '', str, flags=1)
    arr = str.split(' ')
    print(len(arr))
