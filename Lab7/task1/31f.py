n=int(input())
str_n=""
for i in range(1,len(str(n))+1):
    str_n+=str(n)[-i]
print(int(str_n))