# Incorporate the random library
import random

# Print Title
print("Let's Play Rock Paper Scissors!")

# Specify the three options
options = ["r", "p", "s"]

# Computer Selection
computer_choice = random.choice(options)

# User Selection
#user_choice = input("Make your Choice: (r)ock, (p)aper, (s)cissors? ")

# Run Conditionals

option = 'y'
while option == 'y':
    user_choice = input("Make your Choice: (r)ock, (p)aper, (s)cissors? ")
    if((user_choice == "r" and computer_choice == 'r') or (user_choice == "s" and computer_choice == "s") or (user_choice == "p" and computer_choice == "p")):
        print("It's a smashing tie!!!")
        print("The user choice is: "+user_choice+" and computer's choice is: "+computer_choice)
    elif((user_choice == 'r' and computer_choice == 's') or (user_choice == 's' and computer_choice == "p") or (user_choice == 'p' and computer_choice == "r")):
        print("You won!!!")
        print("The user choice is: "+user_choice+" and computer's choice is: "+computer_choice)
    elif((user_choice == 's' and computer_choice == 'r') or (user_choice == 'p' and computer_choice == "s") or (user_choice == 'r' and computer_choice == "p")):
        print("You Loose!!!")
        print("The user choice is: "+user_choice+" and computer's choice is: "+computer_choice)
    else:
        print("Please enter valid option")
    option = input("\nDo you want to continue? (y)es or (n)o: ")


