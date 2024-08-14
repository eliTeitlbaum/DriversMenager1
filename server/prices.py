import sql.Sql_prices as Sql


def app_price(data):
    print(data)

    if not True:
        return 422

    if data['f'] == 'nu':
        data_sql = [data['from'], data['to'], data['price'], 'eli', 1]
        id_price = data['num']

        if data['num'] == 0:
            id_price = Sql.new_price(data_sql)
        else:
            Sql.edit_price([*data_sql, id_price])

        if id_price:
            return {id_price: data_sql, 0: 'success'}
        else:
            return {0: 'error'}

    elif data['f'] == 'd':
        num = Sql.delete_price(data['num'], 1)

        if num:
            return {data['num']: 'd', 0: 'success'}
        else:
            return {0: 'error'}
    else:
        return 400


def select_all_prices():
    data = Sql.select_all_prices_by_office(id_office=1)

    result_dict = {i[0]: i[1:-1] for i in data}

    return result_dict
