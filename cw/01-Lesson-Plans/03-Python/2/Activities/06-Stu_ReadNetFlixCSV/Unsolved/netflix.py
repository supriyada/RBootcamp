# Modules
import os
import csv

# Prompt user for video lookup
video = input("What show or movie are you looking for? ")

# Set path for file
csvpath = os.path.join("..", "Resources", "netflix_ratings.csv")

#To check movie is found or not, set a boolean variable
found = False

with open(csvpath) as cvsfile:
    csv_read_file = csv.reader(cvsfile,delimiter=',')

    #print(csv_read_file)

    csv_header = next(csv_read_file)
    #print(f"CSV Header: {csv_header}")

   
    for row in csv_read_file:
        if row[0] == video :
            print(row[0] +" is rated "+row[1]+ " with rating " + row[3])
            found = True
            break
        
if found is False:
    print("Movie is not found")
