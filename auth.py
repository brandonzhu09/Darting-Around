from flask import Blueprint, request
from app import db
from models import User

import bcrypt

auth = Blueprint("auth", __name__)

@auth.route('/register', methods=["GET", "POST"])
def register():
    if request.method == "GET":
        # username = request.form['username']
        # email = request.form['email']
        username = "brandon"
        email = "brandon@gmail.com"
        id = 0
        password = 'password'
        hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        user = User(id, username, email, hashed)
        db.session.add(user)
        db.session.commit()
    return "Success", 201

@auth.route('/login', methods=['POST'])
def login():
    email = "brandon@gmail.com"
    password = "hashed"

    if not email:
        return 'Missing Email!', 400
    if not password:
        return 'Missing Password!', 400
    
    user = User.query.filter_by(email=email).first()
    if not user:
        return 'User Not Found!', 404
    
    if bcrypt.checkpw(password.encode('utf-8'), user.password):
        return 'Authentication Successful', 200
    else:
        return 'Wrong Password', 404