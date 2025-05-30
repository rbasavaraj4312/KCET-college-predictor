# 🎓 KCET College Predictor

**KCET College Predictor** is a user-friendly web-based tool designed specifically for students in Karnataka who are preparing for or have taken the Karnataka Common Entrance Test (KCET). The purpose of this application is to help students make informed decisions about their college preferences based on their **KCET rank, reservation category,** and **preferred engineering branch**.

The application leverages **historical cutoff data from the past five years** to analyze trends and estimate the likelihood of securing admission to various engineering colleges across Karnataka. By applying statistical analysis and pattern recognition to this data, the predictor provides students with a **personalized list of colleges** along with the **estimated percentage probability** of admission to each college and branch.

---

## 🚀 Live Demo

🔗 [kcet-college-predictor-red.vercel.app](https://kcet-college-predictor-ten.vercel.app/)

---

## 🧠 Features

- ✅ Rank-Based Predictions: Accurately evaluates your chances based on your input KCET rank.
- 📅 Multi-Year Analysis: Uses cutoff data from the last five years for reliable forecasting.
- 🧮 Probability Scoring: Shows a percentage chance of getting into each college-branch combination.
- 🎯 Category Awareness: Adjusts predictions based on the user's caste/category reservation.
- ⚡ Instant Results: Quickly processes inputs and delivers suggestions without delays.
- 📊 Data-Driven Insights: Helps students prioritize realistic college options, saving time and effort.

---

## 🛠️ Tech Stack

**Frontend:**

- HTML5  
- CSS3  
- JavaScript
- React.js
- Tailwind(styling)

**Backend:**

- Node.js  
- Express.js  

---


## 🔐 Environment Variables

Before running the backend, create a `.env` file in the `Backend/` directory with the following variables:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

- Replace `your_mongodb_connection_string` with your actual MongoDB URI.
- You can use services like MongoDB Atlas or your local MongoDB setup.

---

## 🔌 Backend Setup

Follow these steps to set up and run the backend server:

1. Navigate to the backend directory:

   ```bash
   cd Backend
   ```

2. Install required packages:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

4. The backend will start on `http://localhost:5000` (unless a different port is configured).

---

## 🌐 Frontend Setup

To run the frontend locally:
1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install required packages:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

> ✅ If you're deploying to platforms like Vercel (frontend) and Render (backend), update the API URLs in `script.js` to your deployed backend domain.

---

## 📈 Future Improvements

- Update to support latest KCET cutoffs annually  
- Add filters for district, college type, fee range, etc. 
- Add user login and rank history tracking  

---

## 🤝 Contributing

We welcome contributions! Feel free to:

- ⭐ Star the repository  
- 🍴 Fork the project  
- 📥 Open issues or suggestions  
- 🔧 Submit pull requests  

---


## 📢 Disclaimer

This predictor is intended for educational and guidance purposes only. It uses past data and should not be considered as official admission advice. Always consult the [KEA official website](http://kea.kar.nic.in) for authoritative information.
