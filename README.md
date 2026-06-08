# 🛡️ SafeSteps

### Every Move Protected.

SafeSteps is a modern safety and assistance platform designed to provide immediate support during emergencies and daily safety situations. The application empowers both children and adults with quick access to help, family communication, and real-time location sharing through a clean, intuitive, and responsive interface.

---

## 🌟 Project Overview

In today's fast-paced world, personal safety is more important than ever. SafeSteps bridges the gap between emergency response and family connectivity by providing a simple yet powerful platform for users of all ages.

The application offers dedicated experiences for:

* 👶 **Children** – Simple and accessible emergency assistance features.
* 👨‍👩‍👧 **Adults & Guardians** – Enhanced monitoring, communication, and location-based safety tools.

Whether it's requesting immediate help, sharing a live location, or connecting with trusted family members, SafeSteps ensures that help is always just one tap away.

---

## ✨ Key Features

### 🎤 Voice Help Assistance

* One-tap voice-based help request.
* Interactive microphone-style emergency button.
* Fast and intuitive emergency triggering.

### 📍 Live Location Sharing

* Real-time location tracking.
* Secure location sharing with guardians and family members.
* Quick access during emergency situations.

### 👨‍👩‍👧 Family Connections

* Store and manage trusted contacts.
* Quick communication with family members.
* Simplified emergency outreach.

### 👶 Child Dashboard

* Kid-friendly interface.
* Large, easy-to-use controls.
* Focused emergency assistance tools.

### 👨 Adult Dashboard

* Advanced safety management.
* Emergency contact monitoring.
* Alert tracking and history.

### 🚨 SOS Emergency System

* Rapid SOS activation.
* Emergency response workflow.
* Location-aware alert generation.

### 📜 Alert History

* View previously triggered alerts.
* Track emergency activities.
* Maintain safety records.

### 🎨 Modern User Experience

* Responsive design.
* Glassmorphism-inspired components.
* Smooth animations and transitions.
* Mobile-friendly interface.

---

## 🏗️ System Architecture

```text
User
 │
 ▼
React Frontend (Vite)
 │
 ├── Child Dashboard
 ├── Adult Dashboard
 ├── Voice Help
 ├── SOS System
 ├── Location Services
 │
 ▼
Node.js / Express Backend
 │
 ├── Alert Management
 ├── Emergency Requests
 ├── Contact Handling
 └── Location Processing
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM v6+
* Tailwind CSS
* Framer Motion

### Backend

* Node.js
* Express.js
* EJS Templates

### Styling

* CSS3
* Tailwind CSS
* Responsive Design Principles

### Development Tools

* Git
* GitHub
* VS Code

---

## 📂 Project Structure

```text
SafeSteps/
│
├── Backend/
│   ├── public/
│   │   ├── alert.css
│   │   └── confirm.css
│   │
│   ├── views/
│   │   ├── alert.ejs
│   │   └── confirm.ejs
│   │
│   ├── index.js
│   └── package.json
│
├── public/
│   ├── adultsafe.jpg
│   ├── childsafe.png
│   └── safestepslogo.png
│
├── src/
│   ├── components/
│   │   ├── adult/
│   │   ├── child/
│   │   └── shared/
│   │
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/codemasteryash/women-safety-app.git
```

### Navigate to Project Directory

```bash
cd women-safety-app
```

### Install Frontend Dependencies

```bash
npm install
```

### Install Backend Dependencies

```bash
cd Backend
npm install
```

---

## ▶️ Running the Application

### Start Frontend

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

### Start Backend

```bash
cd Backend
node index.js
```

Backend will run on:

```text
http://localhost:3000
```

---

## 📱 User Modules

### 👶 Child Module

* SOS Button
* Voice Help
* Live Location Access
* Simple Navigation
* Emergency Contact Support

### 👨 Adult Module

* Emergency Contact Management
* Alert Monitoring
* Family Tracking
* Safety Dashboard
* Alert History

---

## 🎯 Future Enhancements

* 📞 Automatic emergency calling
* 🤖 AI-powered risk detection
* 🎙️ Voice command activation
* 📹 Emergency audio/video recording
* 🚔 Nearby police station locator
* 🗺️ Safe route recommendations
* 📲 Push notifications
* ☁️ Cloud data synchronization

---

## 💡 Why SafeSteps?

SafeSteps is more than just an emergency application. It is a family-focused safety ecosystem that combines accessibility, communication, and location intelligence into a single platform.

The goal is simple:

> **Make safety immediate, accessible, and reliable for everyone.**

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 👨‍💻 Developer

**Yash Gupta**

Full Stack Java Developer | React Developer

GitHub: https://github.com/codemasteryash

---

## ⭐ Show Your Support

If you found this project useful:

⭐ Star this repository

🍴 Fork the project

📢 Share it with others

Your support helps improve and grow SafeSteps.

---

## 📄 License

This project is licensed under the MIT License.
