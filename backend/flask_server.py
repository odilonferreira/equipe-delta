from flask import Flask, jsonify, request
from exemplo import select_cidade

# initialize our Flask application
app= Flask(__name__)


@app.route("/message", methods=["GET"])
def message():
    posted_data = request.get_json()
    cidade = posted_data['cidade']

    dados = select_cidade(cidade)
    return dados

#  main thread of execution to start the server
if __name__=='__main__':
    app.run(debug=True)