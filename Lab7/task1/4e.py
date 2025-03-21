n=int(input())
arr=[int(x) for x in input().split()]
yes=False
for i in range(n):
    if i==0:
        continue
    else:
        if arr[i]>=0 and arr[i-1]>=0 or arr[i]<0 and arr[i-1]<0:
            yes=True
            break

if yes:
    print('YES')
else:
    print('NO')