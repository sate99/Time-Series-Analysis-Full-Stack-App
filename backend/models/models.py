from config import db

# Define Tables
class RawData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    number_of_sales = db.Column(db.Integer, nullable=False)
    region = db.Column(db.String(50), nullable=False)
    uploaded_at = db.Column(db.DateTime, server_default=db.func.current_timestamp())

class CleanedData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    number_of_sales = db.Column(db.Integer, nullable=False)
    region = db.Column(db.String(50), nullable=False)
    cleaned_at = db.Column(db.DateTime, server_default=db.func.current_timestamp())

class AnalysisData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    region = db.Column(db.String(50), nullable=False)
    moving_average = db.Column(db.Float)
    trend = db.Column(db.Float)
    mean_sales = db.Column(db.Float)
    median_sales = db.Column(db.Float)
    analyzed_at = db.Column(db.DateTime, server_default=db.func.current_timestamp())