import requests

response = requests.get('http://dog-api.kinduff.com/api/facts')

print(type(response))

print( f'The status code of the response is: {response.status_code}')

print(f'The headers of our request  are: \n {response.headers}' )

print(f'The content of our request  is: \n {response.json()}')

random_fact = response.json()['facts']

print(f'Here is a random fact about dogs: {random_fact[0]}')

multiple_facts = requests.get('http://dog-api.kinduff.com/api/facts?number=5').json()['facts']

print(f'Here is a list of random facts about dogs: {multiple_facts}')