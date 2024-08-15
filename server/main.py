from flask import Flask
from flask_socketio import SocketIO, send, emit
import flask_cors
from start import start
from prices import app_price

from ride import route_ride

HOST = '0.0.0.0'
PORT = 8080
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
flask_cors.CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")


@app.route('/')
def index():
    return 'Hello world'


@socketio.on("start")
def start():
    emit("start", {})


@socketio.on("prices")
def s_prices(data):
    r = app_price(data=data)
    emit("prices", r)


@socketio.on("ride")
def ride(king, data):
    return route_ride(king=king, data=data)


if __name__ == '__main__':
    socketio.run(app, host=HOST, port=PORT, allow_unsafe_werkzeug=True)
