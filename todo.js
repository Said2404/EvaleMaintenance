"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoApp = /** @class */ (function () {
    function TodoApp() {
        this.tasks = [];
        this.id = 1;
    }
    TodoApp.prototype.add = function (title) {
        this.tasks.push({
            id: this.id++,
            title: title,
            completed: false
        });
    };
    TodoApp.prototype.list = function () {
        console.log('Taches:');
        this.tasks.forEach(function (t) {
            console.log("".concat(t.id, ". [").concat(t.completed ? 'x' : ' ', "] ").concat(t.title));
        });
    };
    TodoApp.prototype.done = function (id) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task) {
            task.completed = true;
        }
        else {
            console.log("Tache avec id ".concat(id, " non trouv\u00E9e."));
        }
    };
    return TodoApp;
}());
exports.default = TodoApp;
var monApp = new TodoApp();
monApp.add('Apprendre TypeScript');
monApp.add('Faire les devoirs');
console.log('----début-------:');
monApp.list();
console.log('----marquer la tache 1 comme faite-------:');
monApp.done(1);
monApp.list();
