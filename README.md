TESTS

Describe: translator()

Test: "It should return the number the user inputs."
Code:
Input: 5
translator(userNum);
Expected Output: 5

Test: "It should return 'Won't you be my neighbor?' if the user input is 3"
Code:
Input: 3
translator(userNum);
Expected Output: Won't you be my neighbor?

Test: "It should return 'Boop!' if the user input is 2"
Code:
Input: 2
translator(userNum);
Expected Output: Boop!

Test: "It should return 'Beep!' if the user input is 1"
Code:
Input: 1
translator(userNum);
Expected Output: Beep!

Test: "It should return, in ascending order, numbers up to the user input number along with the corresponding substitutions"
Code:
Input: 4
translator(userNum);
Expected Output: "0", "Beep!", "Boop!", "Won't you be my neighbor?", "4"

Test: "It should format results with quotations around each element, followed by a comma (excluding the final element)"
Code:
Input: 4
printResults(userNum);
Expected Output: "0", "Beep!", "Boop!", "Won't you be my neighbor?", "4"

Test: "It should split a mulitple digit number into individual digits"
Code:
Input: 12
checkForSpecial(userNum);
Expected Output: "1", "2"

Test: "It should scan the user number for special cases, and if a special case is found, it should return the corresponding text"
Code:
Input: 32
checkForSpecial(userNum);
Expected Output: "Won't you be my neighbor?"

Test: "It should return the same number if a special case trigger is not found"
Code:
Input: 45
checkforSpecial(userNum);
Expected Output: 45