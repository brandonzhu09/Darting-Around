from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS #comment this on deployment

app = Flask(__name__, static_url_path='', static_folder='client/build')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:9558@localhost/flasksql'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
db.init_app(app)
CORS(app)
# api = Api(app)
db.create_all()

from api import api
from auth import auth

app.register_blueprint(api, url_prefix="")
app.register_blueprint(auth, url_prefix="")

@app.route('/', methods=["GET","POST"])
def home():
    # if request.method == "POST":
    #     print(request.form)
    # return send_from_directory(api.static_folder, 'index.html')
    return '<h1>Home Page</h1>'