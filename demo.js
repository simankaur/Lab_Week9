from flask import Flask, jsonify, requests

  app = Flask(__name__)
# -- Task 1
@app.route('/animals', methods=['GET'])
def get_animals():
    animals = ["Cat", "Dog", "Bird", "Fish", "Elephant", "Lion"]
    return jsonify(animals)
