from flask_socketio import emit

from datetime import datetime

import sql.Sql_ride as Sql


def route_ride(king, data):
    if king == 'n':
        add_new_ride(data=data)


def add_new_ride(data):

    # check data
    if False:
        emit("message", 422)

    # get a timestamp from %Y-%m-%dT%H:%M
    format_datetime = '%Y-%m-%dT%H:%M'
    dt = int(datetime.strptime(data["time"], format_datetime).timestamp())

    # add to dataBase
    data_to_insert = [
        data["numAdult"], data["numChildren"], data["numBaby"], data["fromCity"], data["fromS"], data["toCity"],
        data["toS"], dt, data["phone"], data["typeCar"]
    ]

    num_of_trip = Sql.new_ride(data=data_to_insert)

    # return message
    emit("message", 200)

    # send to whatsapp
    # send to all users connected


