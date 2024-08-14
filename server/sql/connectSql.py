from sqlite3 import connect


DB = r"C:\Users\eli\PycharmProjects\driversWeb\sql\data.db"


def insert_connect():
    conn = connect(DB, check_same_thread=False)

    def insert_for_all(ex, fr=False, data: list = ()):
        if data is None:
            data = []

        try:
            cursor = conn.cursor()

            if fr:
                cursor.execute('PRAGMA foreign_keys=ON')
            if len(data):
                cursor.execute(ex, data)
            else:
                cursor.execute(ex)

            conn.commit()
            cursor.close()

            return cursor.lastrowid
        except Exception as e:
            print(e, 'error Sql')
            return False

    return insert_for_all


def select_connect():
    conn = connect(DB, check_same_thread=False)

    def select_for_all(ex, num='*', data=False):
        try:
            cursor = conn.cursor()

            if data:
                re = cursor.execute(ex, data)
            else:
                re = cursor.execute(ex)

            if num == '1':
                response = re.fetchone()
            else:
                response = re.fetchall()

            return response
        except Exception as e:
            print('errror sql', e)

    return select_for_all
