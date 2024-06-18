import requests

def get_weather(city):
    api_key = 'your_api_key'
    base_url = 'http://api.openweathermap.org/data/2.5/weather'
    params = {
        'q': city,
        'appid': api_key
    }
    response = requests.get(base_url, params=params)
    return response.json()

city = input('Enter the city: ')
weather_data = get_weather(city)
print(weather_data)