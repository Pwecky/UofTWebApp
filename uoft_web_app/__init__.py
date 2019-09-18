from flask import Flask
from uoft_web_app.config import config

app = Flask(__name__)
app.config.from_object(config['development'])

from uoft_web_app.controller import index, courses
