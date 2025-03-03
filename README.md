# Time Series Data Upload & Visualization

This project is a full-stack application for uploading, processing, and visualizing time series data. The backend is built with Flask, and the frontend is built with React.

## Features

- Upload CSV or Excel files containing time series data
- Process and clean the uploaded data
- Visualize the cleaned and analyzed data
- Filter data based on time intervals (daily, weekly, monthly)

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
- React

## Prerequisites

- Python 3.9.6
- Node.js and npm
- PostgreSQL database

## Setup

### Backend

1. **Navigate to the backend directory**:
    ```sh
    cd /Users/satendra/sate99/Time-Series-Analysis-Full-Stack-App/backend
    ```

2. **Create and activate a virtual environment**:
    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```

3. **Install the dependencies**:
    ```sh
    pip install --upgrade pip setuptools wheel
    pip install -r requirements.txt
    ```

4. **Set up the database**:

    Ensure you have a PostgreSQL database set up and update the database URI in `config.py`:

    ```python
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@host:port/database_name'
    ```

5. **Run the Flask application**:
    ```sh
    python app.py
    ```

### Frontend

1. **Navigate to the frontend directory**:
    ```sh
    cd /Users/satendra/sate99/Time-Series-Analysis-Full-Stack-App/frontend
    ```

2. **Install the dependencies**:
    ```sh
    npm install
    ```

3. **Start the React application**:
    ```sh
    npm start
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

## API Endpoints

### Upload & Process Data

- **URL**: `/api/upload`
- **Method**: `POST`
- **Description**: Upload and process a CSV or Excel file containing time series data.

### Fetch Cleaned & Analyzed Data for Charts

- **URL**: `/api/cleaned-data`
- **Method**: `GET`
- **Description**: Fetch the cleaned and analyzed data for visualization.

### Filter Data Based on Time Delta (Daily, Weekly, Monthly)

- **URL**: `/api/filtered-data`
- **Method**: `GET`
- **Description**: Filter the data based on the specified time interval (daily, weekly, monthly).

## Configuration

### Flask Configuration

The Flask configuration can be set in the [config.py](http://_vscodecontentref_/1) file. You can also use environment variables to configure the application.

### Environment Variables

Create a `.env` file in the backend directory to set environment variables. For example:

```plaintext
BASE_URL=http://localhost:5000
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

This project is licensed under the MIT License.
