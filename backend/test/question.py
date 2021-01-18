import requests
import random
import string
import time

UA = "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.13 Safari/537.36"
header = { "User-Agent" : UA, "Referer": "http://www.v2ex.com/signin"}

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
    session = requests.Session()
    # register 
    f = session.post(url, data = postdata, headers = header)
    postdata = {'studentId': userid, "password": "123"}
    url = "http://127.0.0.1:4000/api/users/login"
    # login
    f = session.post(url, data = postdata, headers = header)
    print(f.content.decode()) 
    return session, userid


def get_question():
    session, userid = add_newUser() 
    url = "http://127.0.0.1:4000/api/questions?courseId=10051"
    f = session.get(url, headers = header)
    print(f.content.decode())

def post_question():
    session, userid = add_newUser() 
    url = "http://127.0.0.1:4000/api/questions"
    postdata = {'studentId': userid, "courseId": "10051", "question": "How is the course?"}
    f = session.post(url, data = postdata, headers = header)
    print(f.content.decode())

def patch_question():
    session, userid = add_newUser() 
    url = "http://127.0.0.1:4000/api/questions?courseId=10051"
    f = session.get(url, headers = header)
    print(f.content.decode())
    #questionid = f.content.decode().content[0]._id
    questionid = "5ffd2aa8d6c27f3e1dae29f1"
    url = "http://127.0.0.1:4000/api/questions"
    postdata = {'studentId': userid, "courseId": "10051", "questionId": questionid, "answer": "good!"}
    f = session.patch(url, data = postdata, headers = header)
    print(f.content.decode())

def patch_answer():
    session, userid = add_newUser() 
    url = "http://127.0.0.1:4000/api/questions?courseId=10051"
    f = session.get(url, headers = header)
    print(f.content.decode())
    questionid = "5ffd2aa8d6c27f3e1dae29f1"
    answerid = "5ffd34ce524aff4e23041cbd"
    postdata = {'studentId': userid, "courseId": "10051", "questionId": questionid, "answerId": answerid, "rate": "true"}
    url = "http://127.0.0.1:4000/api/questions/answers"
    f = session.patch(url, data = postdata, headers = header)
    print(f.content.decode())

get_question()
#post_question()
time.sleep(1)
get_question()
#patch_question()
get_question()
patch_answer()
get_question()
