from uoft_web_app import app
from flask import render_template


@app.route('/', endpoint='index')
def index():
    return render_template('index.html')
