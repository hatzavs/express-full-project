
const tasks = [];
let counter = 1;

class Tasks {
    static getAll(req, res) {
        res.json(tasks);
    }

    static create(req, res) {
        const title = req.body;
        if (!title) {
            res.status(400).send('No title entered');
            return;
        }
        const newTask = {
            id: counter,
            title: title
        }
        counter++;
        tasks.push(newTask);
        res.sendStatus(201);
    }
    static delete(req, res) {
        const taskId = parseInt(req.params.id);
        const indexToDelete = Tasks.find(taskId);
        if (indexToDelete < 0) {
            res.sendStatus(404);
            return;
        }
        tasks.splice(indexToDelete, 1);
        res.sendStatus(204);
    }

    static find(taskId) {
        return tasks.findIndex(task => task.id === taskId);
    }
}


module.exports = Tasks;