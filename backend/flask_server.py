from flask import Flask, jsonify, request
from exemplo import select_cidade, municipios, versoes
from search import search_by_text

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

@app.route("/query", methods=["GET"])
def query():
    posted_data = request.get_json()
    texto = posted_data['texto']
    cidade = posted_data['cidade']
    versao = posted_data['versao']
    

    retorno = search_by_text(texto, versao, cidade)

    return retorno

#  main thread of execution to start the server
if __name__=='__main__':
    app.run(debug=True)