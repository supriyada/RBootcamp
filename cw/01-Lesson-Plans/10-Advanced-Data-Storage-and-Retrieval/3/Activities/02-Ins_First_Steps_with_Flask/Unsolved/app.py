from flask import Flask

app = Flask(__name__)

@app.route('/')
def home_page():
    return "My home page"

@app.route('/about')
def about_page():
    return "My about page"
    
if __name__ == "__main__":
    app.run(debug=True)