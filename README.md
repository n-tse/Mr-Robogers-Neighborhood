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