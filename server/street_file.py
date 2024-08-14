import json

street = {}
import csv


with open(r"C:\Users\eli\Downloads\street.csv") as file:
    file_csv = csv.reader(file)

    file_csv.__next__()

    for line in file_csv:
        if line[0] not in street:
            street[line[0]] = []

        street[line[0]].append(line[1])


with open("data.json", "w") as file_json:
    json.dump(street, file_json)

