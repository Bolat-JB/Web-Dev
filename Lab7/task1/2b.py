n=int(input())
if(n%100==0 and n%400!=0) :
    print("NO")
elif(n%4==0) :
    print("YES")
else :
    print("NO")