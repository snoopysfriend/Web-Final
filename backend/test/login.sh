curl -X POST "http://localhost:4000/api/users/login?name=1" 
curl -X POST "http://localhost:4000/api/users/login" -H "Content-Type:application/json" --data '{"email": "abc","password": "123"}'
curl -X POST "http://localhost:4000/api/users/login" -H "Content-Type:application/json" --data '{"email": "abc","password": "12"}'
