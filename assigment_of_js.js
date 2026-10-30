
// Student marks analyzer 

 
// Task 1: student details stored in variables
let name = "Rahul Kumar";        
let rollNo = 101;                
let department = "CSE";          
 
// marks of five subjects (numbers)
let subject1 = 78;
let subject2 = 85;
let subject3 = 62;
let subject4 = 91;
let subject5 = 34;
 
// Task 2: storing the five marks in an array
let marks = [subject1, subject2, subject3, subject4, subject5];
 
 
// Task 3: function to calculate total marks
function calculateTotal(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
  }
  return total;
}
 
// Task 4: function to calculate percentage

function calculatePercentage(marks) {
  let total = calculateTotal(marks);
  let percentage = (total / (marks.length * 100)) * 100;
  return percentage;
}
 
// Task 5: function to find the highest mark
function findHighest(marks) {
  let highest = marks[0];
  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }
  return highest;
}
 
// Task 6: function to find the lowest mark
function findLowest(marks) {
  let lowest = marks[0];
  for (let i = 1; i < marks.length; i++) {
    if (marks[i] < lowest) {
      lowest = marks[i];
    }
  }
  return lowest;
}
 
// Task 7: count subjects with marks >= 40
function countPassed(marks) {
  let count = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {
      count++;
    }
  }
  return count;
}
 
// Bonus: give a grade based on percentage
function getPerformance(marks) {
  let percentage = calculatePercentage(marks);
 
  if (percentage >= 80) {
    return "Excellent";
  } else if (percentage >= 60) {
    return "Good";
  } else if (percentage >= 40) {
    return "Average";
  } else {
    return "Needs Improvement";
  }
}
 
 
// calling the functions and saving the answers
let total = calculateTotal(marks);
let percentage = calculatePercentage(marks);
let highest = findHighest(marks);
let lowest = findLowest(marks);
let passed = countPassed(marks);
 
// Task 8: name in uppercase and number of characters
let upperName = name.toUpperCase();
let nameLength = name.length;   
 
// Task 9: final report
console.log("Student: " + upperName);
console.log("Characters in name: " + nameLength);
console.log("Roll Number: " + rollNo);
console.log("Department: " + department);
console.log("Total Marks: " + total);
console.log("Percentage: " + percentage + "%");
console.log("Highest Marks: " + highest);
console.log("Lowest Marks: " + lowest);
console.log("Subjects Passed: " + passed);
console.log("Performance: " + getPerformance(marks));
 


