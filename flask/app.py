import os
import pandas as pd
from flask import Flask, jsonify, request

app= Flask(__name__)



# Define the path to the dataset
dataset_path = os.path.join(os.getcwd(), 'data', 'synthetic_mine_dataset_2.csv')
data= pd.read_csv(dataset_path)


@app.route('/get_state_data', methods=['GET'])
def get_state_data():

    state = request.args.get('state')

    state_data =  data[data['State'] == state]

    return jsonify ( state_data.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)

