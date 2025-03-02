# Time-Series-Analysis-Full-Stack-App

## Overview

This is a full-stack application for time series analysis. The backend is built with Flask and provides APIs for data processing and analysis. The frontend (if applicable) can be built with any framework of your choice.

## Features

- Data ingestion and storage
- Data cleaning and preprocessing
- Time series analysis (e.g., moving average, trend analysis)
- RESTful APIs for data access and manipulation

## Technologies Used

- Flask
- Flask-CORS
- Flask-SQLAlchemy
- SQLAlchemy
- pandas
- numpy
- openpyxl
- gunicorn
- chardet
- Werkzeug
- psycopg2-binary

## Setup and Installation

### Prerequisites

- Python 3.9.7
- PostgreSQL database

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your_username/Time-Series-Analysis-Full-Stack-App.git
    cd Time-Series-Analysis-Full-Stack-App
    ```

2. Create and activate a virtual environment:

    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Install the dependencies:

    ```sh
    pip install -r requirements.txt
    ```

4. Set up the database:

    Ensure you have a PostgreSQL database set up and update the database URI in `config.py`:

    ```python
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@host:port/database_name'
    ```

5. Run the application:

    ```sh
    gunicorn -w 4 -b 0.0.0.0:8000 app:app
    ```

## Deployment

### Render

1. Create a `runtime.txt` file in the root directory with the following content:

    ```plaintext
    python-3.9.7
    ```

2. Push your changes to GitHub:

    ```sh
    git add runtime.txt requirements.txt
    git commit -m "Add runtime.txt and update requirements.txt"
    git push origin main
    ```

3. Create a new Web Service on Render and connect it to your GitHub repository. Render will automatically detect your `requirements.txt` and `runtime.txt` files and install the specified dependencies and Python version.

4. Set any required environment variables (e.g., database credentials) in the Render dashboard under the "Environment" tab for your service.

## Usage

### API Endpoints

- `GET /api/data`: Retrieve data
- `POST /api/data`: Upload data
- `GET /api/analysis`: Retrieve analysis results

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

This project is licensed under the MIT License.
