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

print(to_jaden_case('yes I am a healthy man'))

#Multiply
def multiply(a, b):
  return a * b