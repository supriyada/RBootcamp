import os
import csv

# Path to collect data from the Resources folder
wrestling_csv = os.path.join('..', 'Resources', 'WWE-Data-2016.csv')

# Define the function and have it accept the 'wrestlerData' as its sole parameter
def print_percentages(wrestlerData):
# Find the total number of matches wrestled
    name = wrestlerData[0]
    win = int(wrestlerData[1])
    loss = int(wrestlerData[2])
    draw = int(wrestlerData[3])
    Total_match = win+draw+loss
# Find the percentage of matches won
    win_percent = round(win/Total_match,2)
# Find the percentage of matches lost
    loss_percent = loss/Total_match
# Find the percentage of matches drawn
    draw_percent = draw/Total_match
# Print out the wrestler's name and their percentage stats
    if loss_percent > 50:
        wrestle_stat = "Jobber"
    else:
        wrestle_stat = "Super Star"
    print(f'The wrestler name is {name}. He is a {wrestle_stat}')
    print(f'Win percentage: {win_percent}')
    print(f'Loss percentage: {loss_percent}')
    print(f'Draw percentage: {draw_percent}')

# Read in the CSV file
with open(wrestling_csv, 'r') as csvfile:

    # Split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')

    # Prompt the user for what wrestler they would like to search for
    name_to_check = input("Which wrestler do you want to look for? ")

    # Loop through the data
    for row in csvreader:

        # If the wrestler's name in a row is equal to that which the user input, run the 'print_percentages()' function
        if(name_to_check == row[0]):
            print_percentages(row)
