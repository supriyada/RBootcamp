from flask import Flask, jsonify, request, redirect
from flask_pymongo import PyMongo
from flask import render_template
from flask_cors import CORS
import requests

import pymongo
import json
from bson import json_util
from bson.json_util import dumps


app = Flask(__name__)
app.jinja_env.add_extension('jinja2.ext.loopcontrols')

connection_url = 'mongodb+srv://projectOlympics:project123@supriyada.h7evx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
client = pymongo.MongoClient(connection_url)
Database = client.get_database('Olympics_Data_db')
# Table
dataTable = Database.athlete_record
logoTable = Database.logo_info


@app.route("/")
def index():
    FIELDS1 = { 'Event': True,
            'Logo_url':True,
            'Year':True,
             '_id': False
    }
    logo_data = logoTable.find(projection=FIELDS1)
    
    json_logos = []
    for logo in logo_data:
        #print(logo)
        json_logos.append(logo)
    print(json_logos)

    return render_template("index.html", logo_info = json_logos)

FIELDS2 = {  'ID': True,
            'Name':True,
            'Sex':True,
            #'Height':False,
            #'Weight':False,
            'Team':True,
            'NOC':True,
            'Games':True,
            'Year':True,
            'Season': True,
            'City': True,
            'Sport': True,
            'Event': True,
            'Medal': True,
            '_id': False
}

#gets the value of the button. Further the year is used in filtering the data
@app.route('/findByYear/', methods=['POST'])
def findByYear():
    
    year = request.form['getYearBtn']
    print(year)

    query = dataTable.find({'Year':int(year)}, projection=FIELDS2)
    
    json_projects = []
    for project in query:
        json_projects.append(project)
        
    #print(json_projects)
    json_projects = json.dumps(json_projects, default=json_util.default)
    #print(json_projects)
    #connection.close()
    return json_projects


if __name__ == '__main__':
    app.run(debug=True)