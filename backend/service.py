import pandas as pd
import numpy
from flask import jsonify
import json

def select_cidade(cidade):
    df = pd.read_csv('./data/satisfacao_5_1.csv')
    df_municipio = df.copy()
    df_municipio = pd.get_dummies(df_municipio, columns=['grauSatisfacao'])
    df_municipio = df_municipio.groupby('municipio').sum()

    df_municipio['total'] = df_municipio['grauSatisfacao_INDIFERENTE'] + df_municipio['grauSatisfacao_INSATISFEITO'] + df_municipio['grauSatisfacao_MUITO_SATISFEITO'] + df_municipio['grauSatisfacao_SATISFEITO'] + df_municipio['grauSatisfacao_MUITO_INSATISFEITO']
    df_municipio = df_municipio.sort_values(by='total', ascending=False)
    df_municipio = df_municipio.reset_index()

    df_percentage = df_municipio.copy()
    df_percentage['grauSatisfacao_INDIFERENTE'] = df_percentage['grauSatisfacao_INDIFERENTE']/df_percentage['total']
    df_percentage['grauSatisfacao_INSATISFEITO'] = df_percentage['grauSatisfacao_INSATISFEITO']/df_percentage['total']
    df_percentage['grauSatisfacao_MUITO_SATISFEITO'] = df_percentage['grauSatisfacao_MUITO_SATISFEITO']/df_percentage['total']
    df_percentage['grauSatisfacao_SATISFEITO'] = df_percentage['grauSatisfacao_SATISFEITO']/df_percentage['total']
    df_percentage['grauSatisfacao_MUITO_INSATISFEITO'] = df_percentage['grauSatisfacao_MUITO_INSATISFEITO']/df_percentage['total']

    df_percentage['insatisfeito'] = df_percentage['grauSatisfacao_INSATISFEITO'] + df_percentage['grauSatisfacao_MUITO_INSATISFEITO']
    df_percentage['satisfeito'] = df_percentage['grauSatisfacao_SATISFEITO'] + df_percentage['grauSatisfacao_MUITO_SATISFEITO']

    # print(df_percentage.iloc[df_percentage['municipio'] == 'MANAUS/AM'])
    retorno = df_percentage[df_percentage['municipio'] == cidade].to_json(orient='records')
    return(retorno)

def municipios():
    df = pd.read_csv('./data/satisfacao_5_1.csv')
    
    df.dropna(inplace=True)
    df.sort_values('municipio', ascending=True, inplace=True)
    return {"data":list(df['municipio'].unique())}

def versoes():
    df = pd.read_csv('./data/satisfacao_5_1.csv')
    
    df.dropna(inplace=True)
    df.sort_values('versao', ascending=True, inplace=True)
    return {"data":list(df['versao'].unique())}

def satisfacoes(palavra, versao, cidade):
    df = pd.read_csv('./data/satisfacao_5_1.csv')
    df.dropna(inplace=True)
    novo_dataframe = pd.DataFrame()

    if palavra:
        df = df[df['observacao'].str.contains(palavra)]
    if cidade:
        df = df[df['municipio'] == cidade]
    if versao:
        df = df[df['versao'] == versao]

    novo_dataframe['versao'] = df['versao']
    novo_dataframe['grauSatisfacao'] = df['grauSatisfacao']

    novo_dataframe = json.loads(novo_dataframe.groupby(['versao', 'grauSatisfacao'])['grauSatisfacao'].count().to_json())
    return novo_dataframe

def satisfacoes_media():
    df = pd.read_csv('./data/satisfacao_5_1.csv')
    df_versao = df.copy()
    df_versao = df_versao.dropna()
    df_versao = pd.get_dummies(df_versao, columns=['grauSatisfacao'])
    df_versao = df_versao.groupby('versao').sum()
    df_versao['total'] = 0
    for coluna in df_versao.columns:
        df_versao["total"] += df_versao[coluna]
    df_versao['total'] = df_versao['total']*0.5
    df_versao["grauSatisfacao_INSATISFEITO"] = df_versao["grauSatisfacao_INSATISFEITO"] * 1
    df_versao["grauSatisfacao_MUITO_INSATISFEITO"] = df_versao["grauSatisfacao_MUITO_INSATISFEITO"] * 2
    df_versao["grauSatisfacao_INDIFERENTE"] = df_versao["grauSatisfacao_INDIFERENTE"] * 3
    df_versao["grauSatisfacao_SATISFEITO"] = df_versao["grauSatisfacao_SATISFEITO"] * 4
    df_versao["grauSatisfacao_MUITO_SATISFEITO"] = df_versao["grauSatisfacao_MUITO_SATISFEITO"] * 5

    df_versao['total_ponderado'] = 0

    for coluna in df_versao.columns:
        df_versao["total_ponderado"] += df_versao[coluna]
    
    df_versao['media'] = df_versao['total_ponderado']/df_versao['total']

    df_versao['media'] = df_versao['media'] * 0.5

    df_versao = df_versao.reset_index()

    return json.loads(df_versao[['versao', 'media', 'total']].to_json(orient='records'))