import pandas as pd
import json

def search_by_text(palavra, versao, cidade):
    df = pd.read_csv('./data/satisfacao_5_1.csv')

    df_drop = df#.dropna()
    if palavra:
        df_drop = df_drop[df_drop['observacao'].str.contains(palavra)]
    if cidade:
        df_drop = df_drop[df_drop['municipio'] == cidade]
    if versao:
        df_drop = df_drop[df_drop['versao'] == versao]

    print(df_drop)

    return json.loads(df_drop.to_json())
