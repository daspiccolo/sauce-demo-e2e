# Test Cases - SauceDemo

---

## 🔐 Authentication

### TC-001 - Successful login
- Steps:
  1. Enter valid username
  2. Enter valid password
  3. Click login
- Expected:
  - User is redirected to inventory page

---

### TC-002 - Invalid username
- Steps:
  1. Enter invalid username
  2. Enter valid password
  3. Click login
- Expected:
  - Error message is displayed

---

### TC-003 - Invalid password
- Steps:
  1. Enter valid username
  2. Enter invalid password
  3. Click login
- Expected:
  - Error message is displayed

---

### TC-004 - Empty credentials
- Steps:
  1. Leave username empty
  2. Leave password empty
  3. Click login
- Expected:
  - Error message is displayed

---

## 🛒 Inventory

### TC-005 - Inventory page loads correctly
- Steps:
  1. Login with valid credentials
- Expected:
  - Product list is displayed

---

### TC-006 - Product information is visible
- Steps:
  1. Login
- Expected:
  - Product name, price, and image are visible

---

## 🛍️ Cart

### TC-007 - Add product to cart
- Steps:
  1. Login
  2. Click "Add to cart"
- Expected:
  - Product is added to cart

---

### TC-008 - Navigate to cart page
- Steps:
  1. Login
  2. Click cart icon
- Expected:
  - User is redirected to cart page

---

### TC-009 - Correct product displayed in cart
- Steps:
  1. Login
  2. Add product to cart
  3. Open cart
- Expected:
  - The correct product is displayed

---

### TC-010 - Remove product from cart
- Steps:
  1. Login
  2. Add product to cart
  3. Open cart
  4. Click "Remove"
- Expected:
  - Product is removed from cart

---

## 💳 Checkout

### TC-011 - Complete checkout successfully
- Steps:
  1. Login
  2. Add product to cart
  3. Go to cart
  4. Click checkout
  5. Fill all required fields
  6. Click continue
  7. Click finish
- Expected:
  - Order confirmation message is displayed

---

### TC-012 - Checkout with missing first name
- Steps:
  1. Login
  2. Add product to cart
  3. Go to cart
  4. Click checkout
  5. Leave first name empty
  6. Fill other fields
  7. Click continue
- Expected:
  - Error message is displayed

---

### TC-013 - Checkout with missing last name
- Steps:
  1. Login
  2. Add product to cart
  3. Go to cart
  4. Click checkout
  5. Leave last name empty
  6. Fill other fields
  7. Click continue
- Expected:
  - Error message is displayed

---

### TC-014 - Checkout with missing postal code
- Steps:
  1. Login
  2. Add product to cart
  3. Go to cart
  4. Click checkout
  5. Leave postal code empty
  6. Fill other fields
  7. Click continue
- Expected:
  - Error message is displayed

---

### TC-015 - Checkout overview page validation
- Steps:
  1. Login
  2. Add product to cart
  3. Go to cart
  4. Click checkout
  5. Fill all fields
  6. Click continue
- Expected:
  - Overview page is displayed with correct product and total

---

### TC-016 - Cancel checkout process
- Steps:
  1. Login
  2. Add product to cart
  3. Go to cart
  4. Click checkout
  5. Click cancel
- Expected:
  - User is returned to inventory page