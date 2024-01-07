from flask import Flask, jsonify
import mysql.connector
from dotenv import load_dotenv
import os

app = Flask(__name__)

env_path = os.path.join('db_config.env')
load_dotenv(dotenv_path=env_path)

#? MySQL configuration for RDS
mysql_config = {
    'host': os.getenv('MYSQL_HOST'),
    'port': os.getenv('MYSQL_PORT'),
    'user': os.getenv('MYSQL_USER'),
    'password': os.getenv('MYSQL_PASSWORD'),
    'database': os.getenv('MYSQL_DATABASE')
}


@app.route('/get_data')
def get_data():
    try:

        with mysql.connector.connect(**mysql_config) as connection:
            with connection.cursor() as cursor:
                query = 'SELECT * FROM tbl_user'
                cursor.execute(query)
                results = cursor.fetchall()
                
                data = [{'id': row[0], 'first_name': row[1], 'last_name': row[2]} for row in results]

        return jsonify({'data': data})

    except mysql.connector.Error as err:
        return jsonify({'error': f'Database Error: {err}'}), 500  

if __name__ == "__main__":
    app.run(debug=True, port=5000)
