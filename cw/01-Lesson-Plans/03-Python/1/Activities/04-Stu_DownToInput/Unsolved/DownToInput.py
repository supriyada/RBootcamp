# Take input of you and your neighbor
my_name=input("Please enter your name: ")
neigh_name = input("Please enter your neighbour's name: ")

# Take how long each of you have been coding
my_exp = int(input("How long have you been coding? "))
neigh_exp = int(input("How long has you neighbour been coding? "))

# Add total month
total_month = my_exp + neigh_exp

# Print results
print("Hello "+ my_name)
print(f"You and your neighbour has been coding for: {str(total_month)}")

