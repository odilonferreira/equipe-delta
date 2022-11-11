from flask import Flask, jsonify, request
from service import select_cidade, municipios, versoes, satisfacoes

# initialize our Flask application
app= Flask(__name__)


@app.route("/message", methods=["GET"])
def message():
    posted_data = request.get_json()
    cidade = posted_data['cidade']

    dados = select_cidade(cidade)
    return dados

@app.route("/municipio", methods=["GET"])
def municipio():
    retorno = municipios()
    return (retorno)

@app.route("/versoes", methods=["GET"])
def versao():
    retorno = versoes()
    return retorno

@app.route("/satisfacao", methods=["GET"])
def satisfacao():
    retorno = satisfacoes()
    return retorno   


#  main thread of execution to start the server
if __name__=='__main__':
    app.run(debug=True)