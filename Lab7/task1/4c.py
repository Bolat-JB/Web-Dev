n=int(input())
arr=[]
count=0
for i in range(n):
    a=int(input())
    arr.append(a)
    if not a<0:
        count+=1
print(count)