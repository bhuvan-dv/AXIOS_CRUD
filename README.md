# AXIOS_CRUD
fake server in backend folder run command 
# for backend server use the following command

json-server --watch employee.json --port=5000 \

# steps to make your own fake backend server

Npm install -g json-server \
Create fake backend servers \
Step1: in root folder create a folder called backend or db in root \
Step2: inside backend create a file called employee.json \
Step3: create entries \

{ \
  "employess": [{ "id": 1, "title": "json-server", "author": "bhuvan" }] \
} \

Step 4: use the command in backend folder through cmd \

command =>json-server --watch filename.json (in backend folder) --port=portnumber \
Command==>json-server --watch employee.json --port=5000 \
