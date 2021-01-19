curl -X POST "http://localhost:4000/api/users/register" -H "Content-Type:application/json" --data '{
    "username": "hello",
    "studentCname": "string",
    "studentEname": "string",
    "password": "123",
    "email": "b05902045@ntu.edu.tw",
    "studentDepartment": "string",
    "studentId": "tong",
    "studentMaj": "string",
    "studentGrad": "2",
    "studentGender": "1"
}'
curl -X POST "http://localhost:4000/api/users/login" -H "Content-Type:application/json" --data '{"studentId": "abc","password": "123"}'
curl -X POST "http://localhost:4000/api/users/login" -H "Content-Type:application/json" --data '{"studentId": "string3","password": "123"}'
curl -X POST "http://localhost:4000/api/users/login" -H "Content-Type:application/json" --data '{"studentId": "string","password": "1234"}'
curl -X POST "http://localhost:4000/api/users/logout" 


curl -X POST "http://127.0.0.1:4000/api/schedule" -H "Content-Type:application/json" --data '{ "courseId": "82737" }'

curl -X GET "http://127.0.0.1:4000/api/schedule" 