from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Create an instance of SQLAlchemy
db = SQLAlchemy()

def create_app():
    # Create a Flask application instance
    app = Flask(__name__)
    
    # Enable Cross-Origin Resource Sharing (CORS)
    CORS(app)

    # Configure the SQLAlchemy database URI
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://satendra:rACjLUK5Pa7Ria6EO09XVmbPoQKOU75T@dpg-cv2635dds78s73e63ja0-a.oregon-postgres.render.com/timeseries_db'
    
    # Disable SQLAlchemy track modifications to save resources
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize the database with the Flask app
    db.init_app(app)

    return app