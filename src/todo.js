function validateTitle(title){
    if(typeof title !== "string" || title.trim() === ""){
        throw new TypeError("Title should be a non-empty string");
    }
}

function validateDescription(description){
    if(typeof description !== "string" || description.trim() === ""){
        throw new TypeError("Description should be a non-empty string");
    }
}

function validateDate(dueDate){
    if (typeof dueDate !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) {
        throw new Error("Date must be a string in YYYY-MM-DD format.");
    }
}
function validatePriority(priority){
    if (typeof priority !== "string" || (priority.toLowerCase() !== "high" && priority.toLowerCase() !== "medium" && priority.toLowerCase() !== "low")) {
        throw new Error("Priority should be 'high', 'medium', 'low'.");
    }
}

function validateChecklist(checklist){
    if(typeof checklist !== "boolean"){
        throw new TypeError("Checklist should be a boolean");
    }
}
export default class Todo{
    constructor(title, description, dueDate, priority, checklist = false){
        //Parameter Validation
        validateTitle(title);
        validateDescription(description);
        validateDate(dueDate);
        validatePriority(priority);
        validateChecklist(checklist);
        
        
        

        

        this.id = crypto.randomUUID();
        this.title = title; //The subject line of the todo task
        this.description = description; // Small message expanding upon the title
        this.dueDate = dueDate; // Format needs to be formatted(2020-11-10, YYYY-MM-DD)
        this.priority = priority.toLowerCase(); //Low, Medium, High
        this.checklist = checklist; //Bool
    }
    toggleChecklist(){
        this.checklist = !this.checklist;
    }
    changePriority(priority){
        validatePriority(priority);

        if (!["high", "medium", "low"].includes(priority.toLowerCase())) {
            throw new Error("Priority should be 'high', 'medium', 'low'.");
        }

        this.priority = priority.toLowerCase();
    }
    update(title, description, dueDate, priority, checklist){
        //Parameter Validation
        validateTitle(title);
        validateDescription(description);
        validateDate(dueDate);
        validatePriority(priority);
        validateChecklist(checklist);

        this.title = title; //The subject line of the todo task
        this.description = description; // Small message expanding upon the title
        this.dueDate = dueDate; // Format needs to be formatted(2020-11-10, YYYY-MM-DD)
        this.priority = priority.toLowerCase(); //Low, Medium, High
        this.checklist = checklist; //Bool
    }
    print(){
        console.log(`ID: ${this.id}, Title: ${this.title}, Description: ${this.description}, DueDate: ${this.dueDate}, Priority: ${this.priority}, Checklist: ${this.checklist}`)
    }
}