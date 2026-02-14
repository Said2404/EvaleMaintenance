# EvaleMaintenanceApplicative

url github : https://github.com/Said2404/EvaleMaintenance


# Lancer le projet : 

git clone https://github.com/Said2404/EvaleMaintenance

npm install -g typescript ts-node

npm install -D @types/node

terminal : npx ts-node .ts
Lancer l'application : ts-node todo.ts


Tests : 

npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init

Si besoin : 
npm i --save-dev @types/jest
npm i --save-dev @types/mocha

Sinon lancer directement les tests : npx jest

<img width="616" height="457" alt="image" src="https://github.com/user-attachments/assets/d365f549-b5b7-4aaf-a6a6-c76d29a41e3a" />


# Structure projet : 

src : code source de l'application
src/todo.ts : Classe TodoApp
test/ : Logique tests
test/todo.test.ts : Tests

.json : configuration

README.md : Documentation
TMA.md : Documentation maintenance future