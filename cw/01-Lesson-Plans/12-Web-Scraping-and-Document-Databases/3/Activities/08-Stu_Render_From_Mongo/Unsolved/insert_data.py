import pymongo

# Setup connection to mongodb
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# Select database and collection to use
db = client.store_inventory
produce = db.produce

produce.insert_many(
    [
    {
      "type": "apples",
      "cost": .23,
      "stock": 333
    },
    {
      "type": "oranges",
      "cost": .40,
      "stock": 300
  },
  {
      "type": "melon",
      "cost": .35,
      "stock": 145
  },
  {
      "type": "onion",
      "cost": 1.3,
      "stock": 300
  },
  {
      "type": "carrot",
      "cost": .26,
      "stock": 340
  }
    ]
)

print("Data Uploaded!")
