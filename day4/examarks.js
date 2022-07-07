function exams(totalmarks, exam) {
    if (exam) {
        return totalmarks >= 90;
    }
    return (totalmarks >= 89 && totalmarks <= 100);
}

console.log(exams("78", " "));
console.log(exams("89", "true "));
console.log(exams("99", "true "));