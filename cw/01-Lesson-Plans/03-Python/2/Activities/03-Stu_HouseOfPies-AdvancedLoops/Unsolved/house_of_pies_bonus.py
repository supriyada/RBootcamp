# Initial variable to track shopping status
shopping = 'y'

# List to track pie purchases
pie_purchases = [0,0,0,0,0,0,0,0,0,0]

# Pie List
pie_list = ["Pecan", "Apple Crisp", "Bean", "Banoffee", "Black Bun",
            "Blueberry", "Buko", "Burek", "Tamale", "Steak"]

# Display initial message
print("Welcome to the House of Pies! Here are our pies:")

# While we are still shopping...
# Loop starts here
i=0
for pie in pie_list:
    print("["+str(i) +"] "+ pie_list[i])
    i=i+1

total_item = 0
pie_count = 0
more_items = 'y'
while more_items == 'y':
    purchased_item = int(input("Please enter the number against the item to purchase: "))
    pie_purchases[purchased_item] = pie_purchases[purchased_item]+1
    more_items=input("Do you want to purchase more pies? (y)es or (n)o: ")
    total_item+=1

j=0
for pie in pie_list:
    print("["+str(pie_purchases[j]) +"] "+ pie_list[j])
    j=j+1

# Loop end here
# Once the pie list is complete
print("------------------------------------------------------------------------")
print("You purchased a total of " + str(total_item) + ".")

