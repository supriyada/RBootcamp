# 1. Import Flask
from flask import Flask


# 2. Create an app
app = Flask(__name__)


# 3. Define static routes
@app.route("/")
def home_page():
    return "Hello, world!"

@app.route("/about")
def about_page():
    my_name = "Priya"
    location = "Greenbrook"
    return f'My name is {my_name}, I live in {location}'

@app.route("/contact")
def contact():
    return "Please email at supriyada@gmail.com"

# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
