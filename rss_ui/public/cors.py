from dotenv import load_dotenv
load_dotenv()

import os
import re
from flask import Flask
from flask_cors import CORS, cross_origin
import requests
app = Flask(__name__)

cors = CORS(app)

@app.route('/<path:url>', methods=['GET'])
@cross_origin(origin="*")
def cors_everywhere(url):
    return requests.get(
        re.sub(r'(https?):\/', r'\1://', url)
    ).text

if __name__ == "__main__":
    app.debug = True
    app.run(port=os.environ.get('PORT', 8000))