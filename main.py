#Jaden Case

def to_jaden_case(string):
    # ...
    result = ""
    list_string = string.split()
    
    for ele in list_string:
        if len(result) > 0:
            result = result + " " + ele.strip().capitalize()
        else:
            result = ele.capitalize()
    return result


#Multiply
def multiply(a, b):
  return a * b


#Multiples of 3 or 5
def solution(number):
    total = 0
    for i in range(1, number):
        if i % 3 == 0 or i % 5 == 0:
            total += i
    return total

solution(10)

#Even or Odd
def even_or_odd(number):
    if number % 2 == 0:
        return 'Even'
    else: return 'Odd'