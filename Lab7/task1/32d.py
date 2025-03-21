n=int(input())
num=0
while num<n:
    if(n==2**num):
        print("YES")
        break
    num+=1
if(num==n):
    print("NO")