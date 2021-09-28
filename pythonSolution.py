import requests

def get_order():
    order_id = input('Please enter an order id:\n')
    order_response = requests.get(f'https://code-challenge-i2hz6ik37a-uc.a.run.app/orders/{order_id}')
    order_json = order_response.json()
    order_zip = order_json['zip_code']
    tax_response = requests.get(f'https://code-challenge-i2hz6ik37a-uc.a.run.app/cities/{order_zip}')
    tax_json = tax_response.json()

get_order()