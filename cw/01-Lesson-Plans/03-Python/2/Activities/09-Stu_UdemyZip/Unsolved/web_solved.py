import os
import csv

udemy_csv = os.path.join("..", "Resources", "web_starter.csv")

# Lists to store data
title = []
price = []
subscribers = []
reviews = []
review_percent = []
length = []

# Use encoding for Windows
with open(udemy_csv, newline='', encoding='utf-8') as csvfile:
# OR below one for MAC
# with open(udemy_csv, newline='') as csvfile:
    csvreader = csv.reader(csvfile, delimiter=',')
    for row in csvreader:
        title.append(row[1])
        price.append(row[4])
        subscribers.append(row[5])
        reviews.append(row[6])
        percent = round(int(row[6])/int(row[5]),2)
        review_percent.append(percent)
        len_split = row[9].split(" ")
        length.append(len_split[0])

cleaned_csv= zip(title,price,subscribers,reviews,review_percent,length)

output_file = os.path.join("output.csv")
with open(output_file, "w", newline='') as datafile:
    writer = csv.writer(datafile)

    writer.writerow(["Title", "Price","Subscribers","Reviews","review_percent","length"])

    writer.writerows(cleaned_csv)

