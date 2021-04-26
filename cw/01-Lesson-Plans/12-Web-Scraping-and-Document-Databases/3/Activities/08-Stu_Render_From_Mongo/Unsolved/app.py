from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.store_inventory
produce = db.produce

@app.route('/')
def inventory():
    inventory_list = list(db.produce.find())
    return render_template('index.html', dict= inventory_list)


if __name__ == "__main__":
    app.run(debug=True)
