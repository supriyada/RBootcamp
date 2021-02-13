import os
import csv

cereal_csv = os.path.join("..", "Resources", "cereal_bonus.csv")

# Open and read csv
with open(cereal_csv) as csv_file:
    csvreader=csv.reader(csv_file,delimiter=',')

    #Skip header
    #csvheader = next(csv_file)
    #print(f"CSV Header: {csvheader}")

    for row in csvreader:
        if float(row[7]) >=5:
            print(row[0]+", "+row[7])