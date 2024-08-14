from sql.connectSql import insert_connect, select_connect


insert_for_all = insert_connect()
select_for_all = select_connect()


def new_price(data):
    ex = "INSERT INTO prices (from_city, to_city, price, work, office) VALUES (?, ?, ?, ?, ?)"
    return insert_for_all(ex=ex, data=data)


def edit_price(data):
    ex = "UPDATE prices SET from_city = ?, to_city = ?, price = ?, work = ? WHERE office = ? AND id_price = ? "
    return insert_for_all(ex=ex, data=data)


def delete_price(id_price, id_office):
    ex = 'DELETE FROM prices WHERE id_price = ? AND office = ?'
    return insert_for_all(ex=ex, data=(id_price, id_office))


def select_all_prices_by_office(id_office):
    ex = "SELECT * FROM prices WHERE office = ?"
    return select_for_all(ex=ex, data=(id_office, ))
