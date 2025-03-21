n=int(input())
arr=[int(x) for x in input().split()]

for i in range(n//2):
    arr[i], arr[-i-1] = arr[-i-1], arr[i]
print(arr)