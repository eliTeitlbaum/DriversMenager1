import json
from prices import select_all_prices


def start():
    response = {
        'streets': {},
        'prices': select_all_prices()
    }

    with open("data.json") as json_file:
        response['streets'] = json.load(json_file)

    return response


