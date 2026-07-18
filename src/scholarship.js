// CLASS CHALLENGE: SCHOLARSHIP CALCULATOR
// INSTRUCTIONS: Fill in the missing function logic to calculate discounts!


// 1. CREATE FUNCTION HERE
// This function takes two parameters: the original fee amount and the student's test score.

    
    // Step A: Convert parameters to numbers to prevent math bugs
    

    // TASK 1: Build the conditional logic based on the test score
    // - If score is 90 or above, they get a 50% discount (Subtract fee * 0.50)
    // - If score is 75 or above, they get a 20% discount (Subtract fee * 0.20)
    // - If score is below 75, they get 0% discount (Fee stays the same)

   

    // TASK 2: Use string interpolation backticks (``) to alert the final result to the screen.
    // Example message: "Based on your score of 95%, your final discounted fee is $500!"
    // Put your message here ...



// 2. LIVE TESTING CODE (Runs automatically when the page loads - Prompting the user for inputs)
// Collect real-time user inputs using prompts


// TASK 3: Call your function below and pass the two prompt variables as arguments!
// Your function call here...


let originalFeeAmount = prompt("Please enter your fees:")
let studentTestScores = prompt("Please enter your test scores:")
function getScholarship(originalFeeAmount,studentTestScores){
    originalFeeAmount = Number(originalFeeAmount);
    studentTestScores = Number(studentTestScores);
    if (studentTestScores >= 90){
        let discountedFee = originalFeeAmount - (originalFeeAmount * 0.5)
        alert(`After a 50% discount.your new fees is: ${discountedFee} `);
    }else if (studentTestScores >= 75){
        let discountedFee = originalFeeAmount - (originalFeeAmount * 0.2);
        alert (`After a 20% discount,your new fees is ${discountedFee}`);
    } else {
        alert(`Your school fees stays the same: ${originalFeeAmount} since you scored less than 75% in your test score.`);
    }
} getScholarship (originalFeeAmount,studentTestScores)