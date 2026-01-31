# IT23695566
ITPM Assignment 1

# Singlish ↔ English Translator – Playwright Test Automation

## Project Overview

This repository contains an automated testing project for the *Singlish ↔ English Translator* web application using *Playwright*. The project covers Functional, Negative Functional, and UI test cases to evaluate correctness, stability, and user interface behavior.

---

## Tools & Technologies

* Playwright – End-to-end test automation framework
* Node.js – JavaScript runtime environment
* JavaScript / TypeScript – Test scripting languages
* Git & GitHub – Version control and repository hosting

---

## Project Structure


playwright-project/
│
├── tests/
│   ├── negative.spec.js      # Contains negative test cases (error handling, invalid inputs)
│   └── positive.spec.js      # Contains positive test cases (valid inputs, expected behavior)
│
├── screenshots/
│   └── (auto-generated screenshots)  # Screenshots captured automatically on test failures
│
├── playwright.config.js      # Playwright configuration file
├── package.json              # Project dependencies and npm scripts
├── README.md    


---

## Prerequisites

Ensure the following are installed on your system:

* Node.js (v18 or later recommended)
* Git
* A modern web browser (Chrome / Edge)

---

## Installation

1. Clone the repository

bash
git clone https://github.com/DinushaShashini/IT23695566


2. Navigate to the project directory

bash
cd playwright-project


3. Install dependencies

bash
npm install


4. Install Playwright browsers

bash
npx playwright install


---

## Running the Tests

Run all tests:

bash
npx playwright test


Run a specific test file:

bash
npx playwright test negative.spec.js
npx playwright test positive.spec.js


---

## Screenshots

* Screenshots are automatically captured for each test case
* Saved inside the screenshots/ directory

---

## Test Coverage

### Positive Functional Tests

* Standard Singlish to Sinhala translations
* Common daily conversation scenarios

### Negative Functional Tests

* Ambiguous English and Singlish inputs
* Extremely long input handling
* Invalid characters and spelling errors

### UI Tests

* Empty input handling
* Real-time translation updates

---

## Author

* Name: D.W.D.S.Dharmadasa
* Registration Number: IT23695566
---

This project follows Playwright best practices and is suitable for academic evaluation