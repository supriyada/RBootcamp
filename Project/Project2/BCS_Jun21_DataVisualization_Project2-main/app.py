from flask import Flask, jsonify, request, redirect
from flask_pymongo import PyMongo
from flask import render_template, url_for
from flask_cors import CORS
import requests

import pymongo
import json
from bson import json_util
from bson.json_util import dumps
from requests import sessions


app = Flask(__name__)
app.jinja_env.add_extension('jinja2.ext.loopcontrols')

connection_url = 'mongodb+srv://projectOlympics:project123@supriyada.h7evx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
client = pymongo.MongoClient(connection_url)
Database = client.get_database('Olympics_Data_db')
# Table
dataTable = Database.athlete_record
logoTable = Database.logo_info

class DataStore():
    year = 1896;

@app.route("/")
def index():
    
    data.year = 1896;

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
    #print(json_logos)

    return render_template("index.html", logo_info = json_logos, year = data.year)

    

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
            'Country': True,
            '_id': False
}


    

data = DataStore()

@app.route('/find/')
def find():
    
    query = dataTable.find({'$and': [{'Year': {'$eq': int(data.year)}},{'Season': {'$eq': "Summer"}}]}, projection=FIELDS2)
     #dataTable.find({'Year':int(year)}, projection=FIELDS2)
    
    json_projects = []
    for project in query:
        json_projects.append(project)
        
    #print(json_projects)
    json_projects = json.dumps(json_projects, default=json_util.default)
    #print(json_projects)
    #connection.close()
    return json_projects

#gets the value of the button. Further the year is used in filtering the data
@app.route('/findByYear')#, methods=['POST'])
def findByYear():
    data.year = request.args.get('year')
    #data.year = int(request.form['getYearBtn'])
    print(str(data.year))
    return redirect("/find/", code=302)

@app.route('/findByCountry')#, methods=['POST'])
def findByCountry():
    NOC_code = request.args.get('country')
    #data.year = int(request.form['getYearBtn'])
    print(str(data.year))
    print(str(NOC_code))
    query = dataTable.find({'$and': [{'Year': {'$eq': int(data.year)}},{'NOC': {'$eq': NOC_code}},{'Season': {'$eq': "Summer"}}]}, projection=FIELDS2)
     #dataTable.find({'Year':int(year)}, projection=FIELDS2)
    
    json_projects = []
    for project in query:
        json_projects.append(project)
        
    print(json_projects)
    json_projects = json.dumps(json_projects, default=json_util.default)
    print(json_projects)
    #connection.close()
    return json_projects

@app.route('/OlympicData', methods=['GET', 'POST'])
def index_func():
    if request.method == 'POST':
        # do stuff when the form is submitted
        # redirect to end the POST handling
        # the redirect can be to the same route or somewhere else
        return redirect(url_for('index'))
    # show the form, it wasn't submitted
    return render_template('OlympicData.html')


if __name__ == '__main__':
    app.run(debug=True)