import sqlite3 as sql


def create():
    trip_information = "CREATE TABLE TripInformation (id_trip INTEGER PRIMARY KEY," \
                       "passengers, departure_city, departure_street, destination_city," \
                       "destination_street)"

    prices = "CREATE TABLE prices (id_price INTEGER PRIMARY KEY, from_city, to_city, price, work, office)"

    create_tables([
        prices
    ])


def create_tables(data):
    conn = sql.connect(r"C:\Users\eli\PycharmProjects\driversWeb\sql\data.db")
    cur = conn.cursor()

    for i in data:
        cur.execute(i)
        conn.commit()

    print('insert success')


create()
