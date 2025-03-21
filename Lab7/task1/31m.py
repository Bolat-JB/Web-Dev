n=int(input())
count=0
for i in range(n):
    x=int(input())
    for j in str(x):
        if(j == "0"):
            count+=1
print(count)