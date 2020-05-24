from dotenv import load_dotenv
load_dotenv()

import os
import re
from flask import Flask, render_template, request
import requests
app = Flask(__name__, static_folder='public', template_folder='public', static_url_path='/static/')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/cors', methods=['GET'])
def cors_everywhere():
    return requests.get(
        request.args['url']
    ).text

if __name__ == "__main__":
    app.debug = True
    app.run(port=os.environ.get('PORT', 8000))