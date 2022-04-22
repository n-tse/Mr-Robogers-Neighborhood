# _Mr. Roboger's Neighborhood_

#### By _**Nick Tse**_

#### _A web application that takes a number from a user and returns a range of numbers with some substitutions_

## Technologies Used

* _HTML_
* _CSS_
* _BootStrap_
* _JavaScript_
* _jQuery_

## Description

_This [webpage](https://github.com/n-tse/Mr-Robogers-Neighborhood) is a web app that takes a number from the user and returns a range of numbers from 0 to the user inputted number with substitutions made for any numbers containing 1, 2, or 3. Any numbers containing 3 will be replaced with "Won't you be my neighbor?"; any numbers containing 2 will be replaced with "Boop!"; any numbers containing 1 will be replaced with "Beep!". 
Additionally, there is a hierarchy of substitutions - 3 having the highest priority and 1 having the lowest._

## Setup/Installation Requirements

* _Clone the repository to your device_
* _Open the newly cloned 'robogersNeighborhood' directory_
* _Click on index.html_
* _Enter a number and click submit to view the results_

## Known Bugs

* _No known bugs_

## License

_MIT_

Copyright (c) _2022_ _Nick Tse_

## TESTS

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


Describe: printResults()

Test: "It should format results with quotations around each element, followed by a comma (excluding the final element)"
Code:
Input: 4
printResults(userNum);
Expected Output: "0", "Beep!", "Boop!", "Won't you be my neighbor?", "4"


Describe: checkForSpecial()

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


Describe: printResults()

Test: "It should return the translated text with special cases accounted for"
Code:
Input: 12
printResults(userNum);
Expected Output: "0", "Beep", "Boop", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop" 

Test: "It should return the translated text with special cases accounted for (new attempt after debugging)"
Code:
Input: 12
printResults(userNum);
Expected Output: "0", "Beep", "Boop", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop"

Test: "It should return the translated text with special cases accounted for (new attempt after debugging)"
Code:
Input: 0
printResults(userNum);
Expected Output: "0"