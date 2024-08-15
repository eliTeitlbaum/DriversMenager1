from flask_socketio import emit

from datetime import datetime

import sql.Sql_ride as Sql


def route_ride(king, data):
    if king == 'n':
        status = add_new_ride(data=data)
        emit("message", status)
    elif king == 'get-ride':
        data = get_ride_from_db(data=data)
        emit("rideData", ("initData", data))
    else:
        emit("message", 404)


def add_new_ride(data):

    # check data
    if False:
        return 422

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
    return 200

    # send to whatsapp
    # send to all users connected


def get_ride_from_db(data):
    print(data)
    return "hello mt name is eli"

