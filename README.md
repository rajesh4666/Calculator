![caculator](https://github.com/user-attachments/assets/0f0b8194-02ab-4686-b4e8-8add1cd1f2eb)
To create a calculator using HTML, CSS, and Javascript, we need to have basic understanding of working of HTML, CSS and JavaScript. Calculator is a simple tool which performs basic arithmetic calculations like Addition, Subtraction, Multiplication and Division. In this article, we are going to discuss how to create a Calculator using HTML, CSS, and JavaScript. Usually, if we observe any real-time calculator we know that it has:
A grid of numbers (0-9 and 00).
Basic arithmetic operators (+, -, /, x, %).
Some symbols for special operations such as (clear, backspace and equal)

#Use of HTML:
      In this article, to create a calculator, we are using HTML to create basic structure. By using HTML, we are creating an input field, display area and buttons.

#Use of CSS:
      We are using CSS for designing the basic structure of calculator created using HTML to make it user friendly and to make it look better. Css helps in positioning and arrangement of buttons, display area and input field in organized manner and is responsible for fonts, colors, background color, padding, margins, etc.

#Use of JavaScript:
      In this article for creating calculator, we have used JavaScript to add functionality to each buttons, be responsive to user input. We have added click events and keyboard inputs using Javascript, so that each component can perform their respective function.

---->>Creating a Calculator using HTML, CSS, and JS<<----------
Given below are the complete example codes of HTML, CSS and JavaScript which we have used to create calculator. It provides step-wise explaination of function they are performing.
1.HTML Code
This is the HTML file for our calculator. Here, we are using the HTML to create the content of the calculator UI. We are including the buttons of a calculator, input fields, display area.
In the HTML code, we have used onclick event, which means that whenever user clicks on any of the buttons then the corresponding operation is performed at the backend of the calculator using javascript.

2.CSS code
It is the style.css file implementing CSS for our calculator which is linked to HTML code. By this CSS code we have placed our calculator in the centre of the page using flex, gave a dark themed background to our calculator, added different color for 'c' and '←' button and resized the display input box and changed the font-size, padding of the elements.

3.JavaScript Code
It is the index.js file implementing Javaccript for our calculator which is linked to HTML code. This code has major functionalities like: appending values using solve function, calculating result using result function which calculates the result using 'eval' and displays an error message if there is any error in arithmetic expression, clearing the display using clear function, deleting a number using back function and at the end we have added keyboard functionalities using addEventListener.
