from flask import Flask, jsonify, request
from urllib.parse import urlparse
from flask_cors import CORS

from service import select_cidade, municipios, versoes, satisfacoes, satisfacoes_media
from search import search_by_text
from flask_cors import CORS

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
    texto = request.args.get('texto')
    cidade = request.args.get('cidade')
    versao = request.args.get('versao')

    retorno = search_by_text(texto, versao, cidade)

    return retorno

@app.route("/satisfacao", methods=["GET"])
def satisfacao():
    texto = request.args.get('texto')
    cidade = request.args.get('cidade')
    versao = request.args.get('versao')
    
    retorno = satisfacoes(texto,versao,cidade)
    return retorno   

@app.route("/satisfacao_media", methods=["GET"])
def satisfacao_media():
    retorno = satisfacoes_media()
    return retorno

#  main thread of execution to start the server
if __name__=='__main__':
    app.run(debug=True)