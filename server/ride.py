from flask_socketio import emit

from datetime import datetime

import sql.Sql_ride as Sql


def route_ride(king, data):
    if king == 'n':
        status = add_new_ride(data=data)
        emit("rideData", ("message", status))
    elif king == 'get-ride':
        data = get_rides_from_db(data=data)
        emit("rideData", ("getRidesByFilter", data))
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


def get_rides_from_db(data):

    # get all rides from db by filter
    data_from_db = Sql.select_all_rides()

    if data_from_db:
        data_to_return = {}

        # keys from data
        keys_data_from_db = (
            "numA", "numC", "numB", "cityDep", "streetDep", "cityDes", "streetDes", "dataTime", "phone", "typeOfCar"
        )

        for ride in data_from_db:
            data_to_return[ride[0]] = dict(zip(keys_data_from_db, ride[1:]))

        return data_to_return
    else:
        return {}
    

