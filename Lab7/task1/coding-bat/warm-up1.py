def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else :
    return False

def diff21(n):
  if(n<21):
    return 21-n
  else:
    return 2*(n-21)

def near_hundred(n):
  return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))

def missing_char(str, n):
  for i in str:
    if(i==str[n]):
      continue
    newstr+=i
  return newstr

def missing_char(str, n):
  front = str[:n]
  back = str[n+1:]
  return front + back

def monkey_trouble(a_smile, b_smile):
  if(a_smile and b_smile or (not a_smile and not b_smile)):
    return True
  else:
    return False

def parrot_trouble(talking, hour):
  if(talking and (hour<7 or hour>20)):
    return True
  else:
    return False
  
def pos_neg(a, b, negative):
  if(negative):
    if(a<0 and b<0):
      return True
    else:
      return False
    return True
  elif((a<0 and b>0) or (a>0 and b<0)):
    return True
  else:
    return False

def not_string(str):
  beginning = str[0:3]
  if(beginning=='not'):
    return str
  else:
    return 'not '+str
string = 'not bad'

def front_back(str):
  if len(str) <= 1:
    return str
  
  mid = str[1:len(str)-1] 
  return str[len(str)-1] + mid + str[0]

def sum_double(a, b):
  if(a==b):
    return 4*a
  else:
    return a+b

def makes10(a, b):
  if(a==10 or b==10 or a+b==10):
    return True
  else:
    return False

def front3(str):
  if(len(str)<=3):
    return str*3
  str= str[0:3]
  return str*3
