import requests

def get_order():
    response = requests.get("https://code-challenge-i2hz6ik37a-uc.a.run.app/orders/sfg47")
    response_json = response.json()
    print(response_json)

get_order()