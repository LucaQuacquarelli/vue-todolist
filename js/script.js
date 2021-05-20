var app = new Vue(
    {
        el: "#root",
        data: {
            tasks: [
                {
                    text: "Fare la spesa",
                    complete: false
                },
                {
                    text: "Andare in palestra",
                    complete: false
                },
                {
                    text: "Portare a spasso il cane",
                    complete: false
                }
            ],
            newTask: "",
            completedTasks: []
        },
        methods: {
            addNewTask: function() {
                let newObject = {
                    text: this.newTask,
                    complete: false
                };

                if (this.newTask.trim().length > 0) {
                    this.tasks.push(newObject);
                };
                this.newTask = ""
            },
            removeTask: function(indexToRemove) {
                this.tasks.splice(indexToRemove, 1)
            },
            completeTask: function(completed, indexToRemove) {
                this.removeTask(indexToRemove);
                return this.completedTasks.push(completed)   
            },
            repeatTask: function(repeated, indexToRemove) {
                this.completedTasks.splice(indexToRemove, 1);
                return this.tasks.push(repeated)   
            }
        }
    }
)