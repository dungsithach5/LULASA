# 🌿 LULASA — Herbal Soap E-commerce Platform

**Lulasa** is a beautifully designed e-commerce platform focused on *natural herbal soaps*, crafted with care for **Vietnamese skin**. From smooth user experience to secure transactions, Lulasa offers everything needed for a modern and healthy online shopping experience.

> 🛒 **“Nature in every drop – Lulasa brings herbs to your skin.”**

---

## ✨ Highlights

✅ **Responsive & Intuitive UI**  
Beautiful, mobile-first interface built with **ReactJS + TailwindCSS**. Lightning-fast thanks to **Vite**.

✅ **Rich Product Experience**  
High-quality images, full ingredients list, customer reviews, and filters help customers shop confidently.

✅ **Smooth Cart & Checkout**  
Effortless add-to-cart, quantity updates, and secure order placement.

✅ **Safe & Secure Authentication**  
JWT-based login/registration with hashed passwords (**bcrypt**) and cookie-based sessions.

✅ **Powerful Admin Dashboard**  
Manage users, orders, and product inventory from a clean, functional backend.

✅ **Customer Reviews & Ratings**  
Build trust through real user feedback and star ratings.

✅ **Email Notifications**  
Automatic order confirmation via **Nodemailer** — customers stay informed.

---

## 🛠 Tech Stack

| Layer      | Tools Used                             |
|------------|----------------------------------------|
| Frontend   | ReactJS, Vite, TailwindCSS, Axios      |
| Backend    | Node.js, Express, Sequelize            |
| Auth       | JWT, bcrypt, cookie-parser             |
| Email      | Nodemailer                             |
| Database   | MySQL                                  |
| Utilities  | dotenv, ESLint                         |

---

## 🎯 Project Goal

To empower users with a **safe, green, and convenient** online platform for buying herbal soap — promoting a **sustainable lifestyle** and **community health**.

---

## 🧪 Features at a Glance

- 📦 Product listing, details, and filtering  
- 🛍️ Add to cart, update quantity, easy checkout  
- 🔐 User registration, login, JWT auth  
- 🧾 Order history and admin management  
- 🌟 Product reviews and ratings  
- 📧 Email confirmation after order placed  

---

## 🚀 Get Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/lulasa-herbal-soap.git
cd lulasa-herbal-soap

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env

# 4. Start frontend & backend
npm run dev     # For Vite (frontend)
npm run server  # For Node.js backend
