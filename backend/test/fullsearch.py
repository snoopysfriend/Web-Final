import requests
import random
import string
import time
import json

def add_newUser():
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
    # register 
    f = session.post(url, data = postdata, headers = header)
    postdata = {'studentId': userid, "password": "123"}
    url = "http://127.0.0.1:4000/api/users/login"
    # login
    f = session.post(url, data = postdata, headers = header)
    # print(f.content.decode()) 
    return session, userid

def test_fullText():
    session, userid = add_newUser()
    url= "http://127.0.0.1:4000/api/fullsearch?type=Course&text=中華民國"
    f = session.get(url) # get schedule
    print(len(json.loads(f.content.decode())['content']))
    # postdata = { "courseId": "93001" }
    # f = session.post(url, data = postdata) # get schedule
    # print(f.content.decode()) 
    # postdata = { "courseId": "82737" }
    # f = session.patch(url, data = postdata) # get schedule
    # f = session.get(url) # get schedule
    # print(f.content.decode()) 

test_fullText()
