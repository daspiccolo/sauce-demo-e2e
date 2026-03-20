# SauceDemo E2E Testing (Playwright)

This project is an end-to-end (E2E) test automation suite built using Playwright.

It demonstrates a structured QA approach, covering core user flows, positive and negative scenarios, and applying fundamental testing techniques.

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js

---

## 📌 Test Coverage

The initial test suite focuses on the login functionality:

### ✅ Positive Scenario
- Successful login with valid credentials

### ❌ Negative Scenario
- Error message displayed with invalid credentials

---

## 🧠 Test Design Approach

Before implementing the tests, I analyzed the application and identified the main user flows:

- Login
- Product Inventory
- Cart
- Checkout

I prioritized the test scenarios based on:

- Business impact
- User journey criticality
- Stability for automation

The login flow was selected as the starting point since it is the entry point of the application.

---

## 🗺️ Test Strategy Map

![Test Strategy](docs/mind-map.svg)

---
## 📈 Future Improvements

- Add cart and checkout test flows
- Implement Page Object Model (POM)
- Add test data management
- Integrate CI (GitHub Actions)

## ⚙️ How to Run

Install dependencies:

```bash
npm install

Run all tests:

npx playwright test

📂 Project Structure

tests/
  auth/
    login.spec.ts

---


