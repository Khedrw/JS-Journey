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
