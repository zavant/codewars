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


##Multiply
def multiply(a, b):
  return a * b


#Multiples of 3 and/or 5
def solution(number):
    total = 0
    for i in range(1, number):
        if i % 3 == 0 or i % 5 == 0:
            total += i
    return total

solution(10)

##Even or Odd
def even_or_odd(number):
    if number % 2 == 0:
        return 'Even'
    else: return 'Odd'

##Vowel Count
def get_count(input_str):
    num_vowels = 0
    input_str = list(input_str)
    for letter in input_str:
        if letter == 'a' or letter == 'i' or letter == 'e' or letter == 'o' or letter == 'u':
            num_vowels += 1
    
    return num_vowels

#Square Every Day

def square_digits(num):
    for number in num:
        return number ** 2

print(square_digits(5231))