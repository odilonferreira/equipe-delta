import pandas as pd
import matplotlib.pyplot as plt
import numpy

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