from flask import Flask
from autostock.config import *


app = Flask(__name__)

if os.environ.get("FLASK_ENV") == "development":
    app.config.from_object(DEV())
else:
    app.config.from_object(PRD())

# MUST be imported after app initialization
from autostock.views import *
from autostock.models import *
