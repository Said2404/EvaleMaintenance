interface Task {
    id: number;
    title: string;
    completed: boolean;

    
}

class TodoApp {
    private tasks: Task[] = [];
    private id = 1;

    add(title: string): void {
        this.tasks.push({
            id: this.id++,
            title,
            completed: false
        });
    }

    list(): void  {
        console.log('Taches:');
        this.tasks.forEach(t => {
            console.log(`${t.id}. [${t.completed ? 'x' : ' '}] ${t.title}`);
        });
    }

    done(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
        } else {
            console.log(`Tache avec id ${id} non trouvée.`);
        }

    }

    getTasks(): Task[] {
        return this.tasks;
    }
        
}

export default TodoApp;

const monApp = new TodoApp();
monApp.add('Apprendre TypeScript');
monApp.add('Faire les devoirs');

console.log('----début-------:');
monApp.list();
console.log ('----marquer la tache 1 comme faite-------:');
monApp.done(1);
monApp.list();

