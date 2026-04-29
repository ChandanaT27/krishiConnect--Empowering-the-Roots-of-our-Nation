# 🌾 KrishiConnect – Smart Agriculture Platform

> Empowering farmers through technology by connecting them directly with markets, knowledge, and government support.

---

## 📌 Overview

**KrishiConnect** is a full-stack web application built to modernize the agricultural ecosystem.
It enables farmers to sell products directly, track real-time market prices, access government subsidies, learn from expert tutorials, and identify crop diseases — all in one platform.

This project aims to reduce middlemen dependency, increase transparency, and improve farmers' income through digital empowerment.

---

## 🚀 Key Features

### 🛒 Marketplace

* Browse and purchase farm products directly from farmers
* Product categories (Vegetables, Fruits, Grains, Dairy & more)
* Farmer details included for transparency

### 💰 Market Prices

* Real-time agricultural commodity prices
* Unit-based pricing (kg, liter, dozen)
* Trend indicators (Up / Down / Stable)

### 📚 Tutorials

* Educational farming videos and guides
* Covers modern and sustainable agriculture practices

### 🌱 Crop Diseases

* Detailed disease information
* Causes and symptoms
* Recommended medicines and treatments

### 🏛 Government Subsidies

* List of available agricultural schemes
* Eligibility and benefits
* Easy “Apply” interface

### 🔐 Authentication System

* Role-based login:

  * Admin
  * Farmer
  * User
* Secure login handling

---

## 🖼️ Application Screenshots

> <img width="942" height="481" alt="image" src="https://github.com/user-attachments/assets/be690400-c23d-4484-afbe-1334ddacf51a" />


### 🏠 Home Page

<img width="959" height="446" alt="image" src="https://github.com/user-attachments/assets/a2ada7d8-7ba0-48ab-accf-5b299f5c63c4" />


### 🛒 Marketplace

<img width="949" height="452" alt="image" src="https://github.com/user-attachments/assets/dea43337-2772-4884-a357-aab862b85c4c" />


### 💰 Market Prices

<img width="917" height="437" alt="image" src="https://github.com/user-attachments/assets/9019ac28-0f91-4791-aa3a-59b348738f6c" />


### 📚 Tutorials

<img width="958" height="440" alt="image" src="https://github.com/user-attachments/assets/764be039-dcb3-44c6-aad8-33a002b5df0f" />


### 🏛 Subsidies

<img width="960" height="444" alt="image" src="https://github.com/user-attachments/assets/423a201f-bd48-4f18-9d95-47cd5aa18d74" />


### 🌱 Crop Diseases

<img width="959" height="445" alt="image" src="https://github.com/user-attachments/assets/9731d6c6-bdf2-4b1d-8846-397691fd81b6" />


### 🔐 Login Page

<img width="959" height="442" alt="image" src="https://github.com/user-attachments/assets/f16434cf-a0eb-4ff4-a5f6-0de4539bb44f" />


---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React.js (Vite)
* 📡 Axios
* 🎨 CSS (Modern UI Design)

### Backend

* ☕ Spring Boot
* 🔄 REST APIs
* 🗄️ Spring Data JPA (Hibernate)

### Database

* 🐬 MySQL

---

## 📂 Project Structure

```
krishiconnect/
│
├── backend/
│   ├── src/main/java/com/krishiconnect/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── model/
│   │   └── KrishiConnectApplication.java
│   └── application.properties
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 Prerequisites

* Node.js (v16+)
* Java (JDK 17+)
* Maven
* MySQL

---

### 🔹 Backend Setup

```bash
cd backend
```

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/krishi_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
server.port=8081
```

Run backend:

```bash
mvnd spring-boot:run
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

| Feature       | Endpoint       |
| ------------- | -------------- |
| Products      | /api/products  |
| Market Prices | /api/prices    |
| Subsidies     | /api/subsidies |
| Diseases      | /api/diseases  |
| Tutorials     | /api/tutorials |

---

## 🔑 Demo Credentials

| Role   | Email                                         | Password  |
| ------ | --------------------------------------------- | --------- |
| Admin  | [admin@krishi.com](mailto:admin@krishi.com)   | admin123  |
| Farmer | [farmer@krishi.com](mailto:farmer@krishi.com) | farmer123 |
| User   | [user@krishi.com](mailto:user@krishi.com)     | user123   |

---

## 🚀 Deployment

### Frontend (Netlify)

* Build command: `npm run build`
* Publish folder: `dist`

### Backend (Render / Railway)

* Build: `mvn clean install`
* Start: `mvn spring-boot:run`

---

## 🔧 Future Enhancements

* 💳 Online Payment Integration
* 📱 Mobile Application
* 🤖 AI-based Crop Recommendation
* 📊 Analytics Dashboard
* 🔔 Real-time Notifications

---

## 🎯 Project Objective

KrishiConnect is built to:

* Improve farmers' income
* Provide direct market access
* Increase transparency
* Digitize agriculture services

---

## 👩‍💻 Author

**Chandana T**
📍 India
💼 Software Developer (Aspiring)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it!

---
