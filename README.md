⌨️ Typing Speed Test

A minimal yet aesthetic Typing Speed Test web application built using HTML, CSS, and JavaScript.
This project focuses on measuring typing speed, accuracy, and mistakes in real time, while maintaining a clean pastel–pixel UI and smooth user experience.

⸻

✨ Features
	•	⏱️ 60-second typing test (starts on first keystroke)
	•	📈 Live WPM & accuracy calculation
	•	❌ Real-time mistake highlighting
	•	🎯 Random paragraph selection for every test
	•	🌙 Dark mode / Light mode toggle (dark mode enabled by default)
	•	🔄 Restart & Reset options
	•	📝 Test history tracking
	•	🎨 Custom pixel-inspired pastel UI
	•	🧠 Hidden input logic for seamless typing experience
	•	📱 Responsive design for smaller screens

⸻

🛠️ Tech Stack
	•	HTML5 – Structure and layout
	•	CSS3 – Styling, theming, animations, and responsiveness
	•	JavaScript (Vanilla) – Core logic, timer, stats calculation, DOM manipulation
	•	Netlify – Deployment (Specialized PaaS for web apps)

⸻

🚀 How It Works
	1.	A random paragraph is loaded when the page opens.
	2.	The timer starts as soon as the user begins typing.
	3.	Each typed character is compared with the original text:
	•	Correct characters → highlighted in gray
	•	Incorrect characters → highlighted in red
	4.	After 60 seconds:
	•	WPM, accuracy, and mistakes are calculated
	•	A summary modal is shown
	•	The result is added to the test history
	5.	Users can restart the test or reset the history anytime.

⸻

🌗 Theme Support
	•	Dark mode is enabled by default.
	•	Theme preference is saved using localStorage.
	•	One-click toggle between light and dark themes.

⸻

📁 Project Structure
typingSpeedTest/
│
├── index.html        # Main HTML file
├── test.css          # Styling & themes
├── test.js           # Typing logic & functionality
├── logo.png          # Project logo
├── PressStart2P-Regular.ttf
├── OFL.txt           # Font license
└── typingSpeedTest.code-workspace

Live Demo
---------
👉 Live Website:
(https://kripinya.github.io/typingSpeedTest/)

📌 Deployment

The project is deployed using Netlify, a specialized PaaS platform designed for frontend applications.
Netlify handles:
	•	Automatic builds from GitHub
	•	HTTPS by default
	•	Global CDN delivery

This makes it ideal for lightweight web apps like this Typing Speed Test.

🎓 Academic Context

This project was developed as part of a PaaS comparison activity, where different platforms (Google App Engine, Azure, Salesforce, Netlify) were analyzed for suitability.
Netlify proved to be the most efficient choice for this specific frontend-focused application.


📄 License
This project uses open-source fonts licensed under the SIL Open Font License (OFL).
Feel free to fork, modify, and learn from this project.
