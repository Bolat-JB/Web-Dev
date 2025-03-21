n=int(input())
arr=[]
for i in range(n):
    a=int(input())
    arr.append(a)

for i in arr:
    if(i%2==0):
        print(i, end=" ")