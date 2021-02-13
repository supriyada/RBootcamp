# The list of candies to print to the screen
candy_list = ["Snickers", "Kit Kat", "Sour Patch Kids", "Juicy Fruit", "Swedish Fish", "Skittles", "Hershey Bar", "Starbursts", "M&Ms"]

# The amount of candy the user will be allowed to choose
allowance = 5

# The list used to store all of the candies selected inside of
candy_cart = []

candy_count_list=[0,0,0,0,0,0,0,0,0]

# Print out options

for candy in range(len(candy_list)):
    print("[" + str(candy) + "] " + candy_list[candy])

total_candy = 0
next_item = 'y'
while next_item == 'y' :

    if total_candy < allowance:
        candy_count = int(input("Enter the number against the candy: "))
        candy_cart.append(candy_list[candy_count])
        candy_count_list[candy_count]+=1
        total_candy+=1
        print("Your candy is added to the cart!!!")
        print("\n")
        next_item=input("Do you want more candies? (y)es or (n)o: ")  
    else:
        print("\nYou cannot have more than five candies!")
        break
       

print(f"\nYou have purchased!!!")
print("-"*20)

for cart in range(len(candy_list)):
    print(str(candy_count_list[cart])+" "+candy_list[cart])
    
    











