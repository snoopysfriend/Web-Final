import requests
import time

url = "http://127.0.0.1:4000/api/users/login"
UA = "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.13 Safari/537.36"
header = { "User-Agent" : UA,
"Referer": "http://www.v2ex.com/signin"
}

session = requests.Session()
postdata = {'studentId': "string", "password": "123"}

f = session.post(url, data = postdata, headers = header)
print(f.content.decode())
time.sleep(1)
f2 = session.post(url, headers = header)
print(f2.content.decode())
time.sleep(1)
f3 = session.post(url, headers = header)
print(f3.content.decode())

