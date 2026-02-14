import TodoApp  from '../src/todo';

describe('TodoApp', () => {
    let app: TodoApp;

    beforeEach(() => {
        app = new TodoApp();
    });

    //TEST 1 : cas nominal
    test('ajouter une tache', () => {
        app.add('Apprendre TypeScript');
        app.done(1); // Marquer la tache comme terminée
        let tasks = app.getTasks();
        expect(tasks[0].completed).toBe(true);
    });

    //TEST 2 : CAS d'erreur
    test('tenter de terminer un ID intexistant', () => {
        app.add("Tache existante");
        app.done(999); // ID qui n'existe pas
        let tasks = app.getTasks();
        expect(tasks[0].completed).toBe(false); // La tache ne doit pas être marquée comme terminée 
        
    });
});