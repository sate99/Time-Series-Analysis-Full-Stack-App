from flask import Flask
from config import create_app, db
from routes import register_blueprints

# Create the Flask application using the factory function
app = create_app()

# Register Blueprints
register_blueprints(app)

# Run the application
if __name__ == '__main__':
    # Create database tables within the application context
    with app.app_context():
        db.create_all()
    # Start the Flask development server
    app.run(debug=True)
