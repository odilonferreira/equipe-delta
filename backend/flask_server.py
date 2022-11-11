from flask import Flask, jsonify, request

from flask_cors import CORS

from search import search_by_text
from service import municipios, satisfacoes, select_cidade, versoes

# initialize our Flask application
app= Flask(__name__)
CORS(app)


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

@app.route("/query", methods=["GET"])
def query():
    posted_data = request.get_json()
    texto = posted_data['texto']
    cidade = posted_data['cidade']
    versao = posted_data['versao']

    retorno = search_by_text(texto, versao, cidade)

    return retorno

@app.route("/satisfacao", methods=["GET"])
def satisfacao():
    posted_data = request.get_json()
    texto = posted_data['texto']
    cidade = posted_data['cidade']
    versao = posted_data['versao']

    retorno = satisfacoes(texto,versao,cidade)
    return retorno   


#  main thread of execution to start the server
if __name__=='__main__':
    app.run(debug=True)