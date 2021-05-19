var app = new Vue(
    {
        el: "#root",
        data: {
            tasks: [
                "Fare la spesa",
                "Andare in palestra",
                "Portare a spasso il cane"
            ],
            newTask: "",
            completedTasks: []
        },
        methods: {
            addNewTask: function() {
                if (this.newTask.trim().length > 0) {
                    this.tasks.push(this.newTask);
                    this.newTask = ""
                }
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