# Write a function that returns the arithmetic average for a list of numbers
def average(numbers):
    length = len(numbers)
    sum=0.00
    for i in numbers:
        sum=sum+i
    avg = sum/length
    return avg

# Test your function with the following:
print((average([1, 5, 9])))
print(average(range(11)))