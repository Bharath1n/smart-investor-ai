import csv
from models.stock import Stock  # Adjust import as per your ORM

def insert_stocks(csv_path):
    with open(csv_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            stock = Stock(**row)  # depends on your ORM model
            stock.save()  # Save the stock instance

if __name__ == "__main__":
    insert_stocks("data/raw/stocks.csv")
