def prepare_names(time):
    def fibo(num):
        if num == 0 or num == 1:
            return 1

        return fibo(num-1) + fibo(num-2)

    dividings = sum([fibo(i) for i in range(time + 1)])
    taking_rests = sum([fibo(i) for i in range(time)])
    name_exists = sum([fibo(i) for i in range(time - 1)])
    
    return dividings + taking_rests - name_exists

print(prepare_names(2))
print(prepare_names(4))
