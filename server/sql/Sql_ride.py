from sql.connectSql import insert_connect, select_connect

insert_for_all = insert_connect()
select_for_all = select_connect()


def new_ride(data):
    ex = "INSERT INTO TripInformation (numAdults, numChildren, numBabies, departure_city, departure_street, " \
         "destination_city, destination_street, dataTime, phone, typeOfCar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

    return insert_for_all(ex=ex, fr=True, data=data)


def select_all_rides():
    ex = "SELECT * FROM TripInformation"

    return select_for_all(ex=ex)
