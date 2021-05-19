var app = new Vue(
    {
        el: "#root",
        data: {
            tasks: [
                "Fare la spesa",
                "Andare in palestra",
                "Portare a spasso il cane"
            ],
            newTask: ""
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
            }
        }
    }
)