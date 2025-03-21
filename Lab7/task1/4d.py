n=int(input())
arr=[]
count=0
for i in range(n):
    a=int(input())
    arr.append(a)
for i in range(n-1):
    if arr[i+1]>=arr[i]:
        count+=1
print(count)