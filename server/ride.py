from flask_socketio import emit


def route_ride(king, data):
    if king == 'n':
        add_new_ride(data=data)


def add_new_ride(data):
    # check data
    if False:
        emit("message", 422)

    # add to dataBase

    # return message
    emit("message", 200)

    # send to whatsapp
    # send to all users connected


