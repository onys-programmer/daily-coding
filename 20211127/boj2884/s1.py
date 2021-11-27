import sys
sys.stdin = open('input.txt')

H, M = map(int, input().split())

value = H * 60 + M
new_alarm_val = value - 45

if new_alarm_val < 0:
    new_alarm_val = 24 * 60 + new_alarm_val

new_alarm_h = new_alarm_val // 60
new_arlarm_m = new_alarm_val - new_alarm_h * 60

print(f'{new_alarm_h} {new_arlarm_m}')
