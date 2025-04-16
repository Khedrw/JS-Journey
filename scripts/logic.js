// Question 1
console.log(' Question 1 ')

function generateReports(students) {
    return students.map(student => {
        const total = student.scores.reduce((sum, score) => sum + score, 0);
        const average = Math.round(total / student.scores.length);
        let grade;
        if (average >= 90) grade = "A";
        else if (average >= 80) grade = "B";
        else if (average >= 70) grade = "C";
        else if (average >= 60) grade = "D";
        else grade = "F";
        return { name: student.name, average, grade };
    });
}

const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
];

console.log(generateReports(students));

console.log('')
// Question 2
console.log(' Question 2 ')


class BankAccount {
    constructor(ownerName, initialBalance) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
        this.history = [`Account opened with $${initialBalance}`];
    }

    deposit(amount) {
        this.balance += amount;
        this.history.push(`Deposited $${amount}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Withdrew $${amount}`);
        } else {
            console.log("Insufficient funds");
        }
    }

    transferTo(anotherAccount, amount) {
        if (amount <= this.balance) {
            this.withdraw(amount);
            anotherAccount.deposit(amount);
            this.history.push(`Transferred $${amount} to ${anotherAccount.ownerName}`);
        } else {
            console.log("Transfer failed due to insufficient funds");
        }
    }

    getSummary() {
        return `${this.ownerName}'s balance is $${this.balance}`;
    }

    printHistory() {
        this.history.forEach(line => console.log(line));
    }
}

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300);
acc1.transferTo(acc2, 200);
console.log(acc1.getSummary());
console.log(acc2.getSummary());
acc1.printHistory();

console.log('')
// Question 3
console.log(' Question 3 ')

document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.querySelector('.task-input');
    const addBtn = document.querySelector('.add-btn');
    const taskList = document.querySelector('.task-list');

    addBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            li.addEventListener('click', function () {
                li.classList.toggle('completed');
            });

            taskList.appendChild(li);

            taskInput.value = '';
        }
    });
});

console.log('')
// Question 4
console.log(' Question 4 ')

/*
FOR QUERSTION 1

function generateReports:
    This function uses the map() method to iterate over each student in the array.
    Within the map() callback, the reduce() method is used to sum up the scores for each student.
    if n is the number of students and m is the number of scores per student.
    the the TIME COMPLEXITY for this function is O(n*m)

FOR QUESTION 2

functions deposit, withdraw, and getSummary:
    These methods all operate in constant time then then TIME COMPLEXITY for them O(1)

function transferTo:
    This function calls both the withdraw and deposit methods, each of which is O(1).
    Thus, the overall TIME COMPLEXITY of transferTo is also O(1)

function printHistory:
    if k is the number of logged operations 
    then The time complexity of this function is O(k) */