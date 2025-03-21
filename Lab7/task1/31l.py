n=int(input())
dec=0
for i in range(len(str(n))):
    last_num=n%10
    n=n//10
    dec+=last_num*(2**i)
print(dec)