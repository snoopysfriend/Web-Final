import requests
import random
import string
url = "http://127.0.0.1:4000/api/users/register"

userid = ''.join(random.choices(string.ascii_uppercase + string.digits, k=5))
postdata = {
    "username": "hello",
    "studentCname": "string",
    "studentEname": "string",
    "password": "123",
    "email": "b05902045@ntu.edu.tw",
    "studentDepartment": "string",
    "studentId": userid,
    "studentMaj": "string",
    "studentGrad": "2",
    "studentGender": "1"
}

UA = "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.13 Safari/537.36"
header = { "User-Agent" : UA,
"Referer": "http://www.v2ex.com/signin"
}

session = requests.Session()

f = session.post(url, data = postdata, headers = header)
f2 = session.post(url, data = postdata, headers = header)
print(f.content.decode())
print(f2.content.decode())
