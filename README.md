# Playwright-learning
This is a repository for the study of the Playwright language  

To execute this project, please clone it and open on Visual Studio Code. After it is open on VS Code, open the integrated terminal and type:  
`npm i`

to run the tests please run on your terminal:  
`npx playwright test {test name here}`

If you want to see  the UI version of its execution, please type:  
`npx playwright test --ui`

To optimze runtime, you can add the command "--workers" and the number of browser to use:  
`npx playwright test "test name here" --workers 3`

Node version used for this project: v20.18.0  
NPM version used for this project: 6.14.8  

Future improvements that weren't done due to lack of time but were noted:  
-- create the Fixtures file/folder that keeps all the locators for better code practice  
-- create the other test cases that were discovered and described on the file but not implemented  
-- implement Data-Driven Testing using Postman with mock data provided by the website and not the arraylist used on this learning process  