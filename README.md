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

The test suite currently covers the main user journey:

### 🔐 Authentication
- Successful login with valid credentials  
- Error handling with invalid credentials  

### 🛒 Inventory & Cart
- Product visibility validation  
- Add product to cart  
- Navigate to cart page  
- Validate correct product in cart  

### 💳 Checkout
- Fill checkout information  
- Complete purchase flow  
- Validate confirmation message  

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

Test scenarios were designed using fundamental QA techniques such as equivalence partitioning and negative testing.

---
## 💡 Notes

- Tests use `data-test` selectors for better stability  
- `beforeEach` is used to handle common setup steps  
- Page Object Model (POM) is used to improve maintainability  
- Test data is separated from test logic  

---

## 📈 Future Improvements

1. Add negative checkout scenarios  
2. Improve cart validations  
3. Introduce dynamic test data generation  
4. Integrate CI pipeline using GitHub Actions  

## 🗺️ Test Strategy Map

![Test Strategy](docs/mind-map.svg)

---

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



