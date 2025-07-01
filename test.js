// Final test.js for overlay typing and span highlighting
window.onload = () => {
  const timerElement = document.getElementById("timer");
  const wpmElement = document.getElementById("wpm");
  const accuracyElement = document.getElementById("accuracy");
  const quoteDisplay = document.getElementById("quote-display");
  const restartBtn = document.getElementById("restart-btn");
  const history = document.getElementById("history");
  const hiddenInput = document.getElementById("hidden-input");

  const themeIconToggle = document.getElementById("theme-icon-toggle");
  const summaryModal = document.getElementById("summary-modal");
  const modalWpm = document.getElementById("modal-wpm");
  const modalAccuracy = document.getElementById("modal-accuracy");
  const modalMistakes = document.getElementById("modal-mistakes");
  const closeModalBtn = document.getElementById("close-modal");

  let startTime, timerInterval;
  let currentQuote = "";
  let isTimerRunning = false;
  const totalTime = 60;
  let mistakeCount = 0;
  let userInput = "";

  const quotes = [
  "The Earth's geography is vast and diverse, ranging from the icy tundras of Antarctica to the scorching sands of the Sahara Desert. The Amazon Rainforest, often called the 'lungs of the planet, produces around 20% of the world's oxygen'. Meanwhile, Mount Everest, standing tall at 8,848 meters above sea level, is the highest point on Earth. Beneath the ocean, the Mariana Trench dives to depths of over 11,000 meters, making it the deepest natural point on the planet. Continents shift slowly each year due to plate tectonics, reshaping the Earth over millions of years.",
  "The global population has surpassed 8 billion, with Asia being home to nearly 60% of humanity. India and China are the two most populous countries, each with over a billion people. There are more than 7,000 spoken languages across the world, but only a handful dominate in global communication. Despite our differences in culture, race, and religion, human DNA is 99.9% identical across all ethnicities. This genetic similarity highlights that diversity is a social construct more than a biological one. Urbanization is rapidly increasing, with over half the global population now living in cities.",
  "Climate change is a pressing global issue caused by rising greenhouse gas emissions. Since the industrial revolution, Earth's average temperature has increased by over 1°C, leading to extreme weather events, melting glaciers, and rising sea levels. The Arctic is warming nearly four times faster than the rest of the planet. Deforestation, especially in tropical regions like the Amazon and Congo Basin, is reducing Earth's ability to absorb carbon dioxide. Despite these challenges, renewable energy sources like solar and wind are becoming more widespread, offering hope for a more sustainable future.",
  "The human brain, though weighing just about 1.4 kilograms, is the most complex organ in the known universe. It contains roughly 86 billion neurons, each forming thousands of connections, resulting in trillions of neural pathways. This complexity allows humans to innovate, create art, and develop technologies like the internet, which connects over 5 billion users worldwide. Artificial Intelligence, once science fiction, is now embedded in daily life — from smart assistants to self-driving cars. Despite this, no AI has come close to fully replicating the brain's creativity and emotional intelligence.",
  "Space exploration has transformed our understanding of the universe. In 1969, NASA's Apollo 11 mission made history when humans first walked on the Moon. Today, multiple countries and private companies are planning missions to Mars. The Hubble Space Telescope and James Webb Space Telescope have revealed galaxies billions of light-years away, offering a glimpse into the early universe. The International Space Station (ISS), orbiting 400 km above Earth, serves as a laboratory for zero-gravity research. Scientists have even discovered over 5,000 exoplanets, some of which may have conditions suitable for life.",
  "Oceans cover about 71% of Earth's surface and hold over 96% of the planet's water. They are home to millions of species, many still undiscovered. The Great Barrier Reef, stretching over 2,300 kilometers, is the largest coral reef system and can even be seen from space. Marine plants like phytoplankton produce at least 50% of the oxygen we breathe. Oceans also regulate Earth's climate by absorbing heat and carbon dioxide. However, they're threatened by plastic pollution, acidification, and overfishing. Protecting marine ecosystems is crucial, as they support biodiversity and billions of people's livelihoods globally.",
  "The internet, invented in the late 20th century, has revolutionized communication, education, and commerce. Today, over 5.5 billion people use it, with social media platforms connecting people across the globe in real time. The World Wide Web, developed by Tim Berners-Lee in 1989, made accessing information faster and more democratic. Online education, remote work, and digital currencies are transforming how society operates. While it brings immense benefits, the internet also poses challenges like privacy loss, misinformation, and digital addiction. As technology grows, balancing innovation with ethical responsibility is more important than ever.",
  "Physics explains how the universe works — from the tiniest atoms to massive galaxies. Light travels at 299,792 kilometers per second, the fastest known speed. Gravity, discovered by Isaac Newton and expanded by Einstein's theory of relativity, governs planetary motion. Quantum mechanics reveals that particles can exist in multiple states until observed. Black holes have such intense gravity that not even light can escape them. The Higgs boson, discovered in 2012, confirms why particles have mass. Despite these breakthroughs, much of the universe — including dark matter and dark energy — remains a mystery to scientists.",
  "Every human shares about 99.9% of their DNA with every other person, proving how closely related we all are. DNA, the blueprint of life, is made of four bases: A, T, C, and G. These sequences determine traits and are passed from generation to generation. Charles Darwin's theory of evolution explains how species change over time through natural selection. Genetic mutations, though rare, can lead to adaptations or diseases. Modern breakthroughs like CRISPR now allow scientists to edit genes, offering hope for curing inherited conditions. The study of genetics helps us understand ancestry, health, and the very essence of life.",
  "Volcanoes are openings in Earth's crust that allow molten rock, gases, and ash to escape. The Earth's core generates immense heat, forming magma that rises through the mantle. Eruptions can be explosive or slow-flowing, depending on magma composition. Famous volcanoes like Mount Vesuvius and Krakatoa have reshaped history with their catastrophic eruptions. Despite their danger, volcanoes enrich soil with nutrients and form new landmasses. About 80% of Earth's surface is volcanic in origin. Even underwater, volcanoes exist along mid-ocean ridges. Studying them helps scientists predict eruptions and understand plate tectonics — the engine behind earthquakes and continental drift.",
  "Humans have always gazed at the stars, but only recently began reaching them. The launch of Sputnik by the Soviet Union in 1957 marked the start of the space age. In 1969, Neil Armstrong became the first human to walk on the Moon. The International Space Station (ISS), orbiting Earth since 1998, hosts astronauts conducting vital research. NASA's Voyager probes have entered interstellar space, while telescopes like Hubble reveal distant galaxies. In recent years, private companies like SpaceX have made space more accessible. Missions to Mars and plans for Moon bases hint that interplanetary living may soon become reality.",
  "The human brain weighs just about 1.4 kilograms, yet it controls everything — thoughts, movements, emotions, and memories. With over 86 billion neurons, it processes information faster than any supercomputer. The brain consumes about 20% of the body's energy, even while at rest. Neuroplasticity allows it to adapt and rewire based on experiences and learning. Short-term memory lasts only about 20-30 seconds, while long-term memories can last a lifetime. Sleep and nutrition play crucial roles in brain function. Despite centuries of study, the brain still holds many mysteries, especially about consciousness, dreams, and the origins of thought.",,
  "Rainforests, like the Amazon and Congo, are home to more than half of the world's plant and animal species. These lush ecosystems receive over 200 cm of rainfall annually and are vital for regulating global temperatures. Trees absorb carbon dioxide and release oxygen, making rainforests essential for Earth's climate balance. Many life-saving medicines have been discovered in rainforest plants. However, deforestation for agriculture and mining threatens their survival. Every minute, acres of forest are lost, disrupting habitats and contributing to climate change. Protecting rainforests ensures biodiversity, clean air, and a sustainable future for the planet.",
  "Earth is a planet of extremes. Mount Everest, at 8,848 meters, is the tallest peak, while the Mariana Trench plunges nearly 11,000 meters below sea level. The hottest place on Earth is Death Valley, USA, with temperatures soaring above 56°C. The coldest, Antarctica, has recorded -89.2°C. The longest river, the Nile, stretches over 6,600 kilometers. Deserts like the Sahara are vast and dry, while rainforests are wet and dense. Earth has seven continents and five oceans, all shaped by tectonic activity, erosion, and climate. Understanding geography helps us appreciate natural wonders and the forces that shape our living world."
];


  function renderQuote() {
    quoteDisplay.innerHTML = "";
    currentQuote.split("").forEach(char => {
      const span = document.createElement("span");
      span.innerText = char;
      quoteDisplay.appendChild(span);
    });
  }

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    renderQuote();
    timerElement.innerText = totalTime;
    wpmElement.innerText = "0";
    accuracyElement.innerText = "0%";
    clearInterval(timerInterval);
    isTimerRunning = false;
    mistakeCount = 0;
    userInput = "";
    hiddenInput.value = "";
    hiddenInput.focus();
  }

  function startTimer() {
    let timeLeft = totalTime;
    startTime = new Date();
    timerElement.innerText = timeLeft;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.innerText = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        calculateFinalStats();
        hiddenInput.blur();
      }
    }, 1000);
  }

  function calculateFinalStats() {
    const wordsTyped = userInput.trim().split(/\s+/).filter(Boolean).length;
    const wpm = Math.round((wordsTyped / totalTime) * 60);
    const correctChars = userInput.split("").filter((ch, i) => ch === currentQuote[i]).length;
    const accuracy = Math.round((correctChars / userInput.length) * 100) || 0;
    wpmElement.innerText = wpm;
    accuracyElement.innerText = accuracy + "%";

    modalWpm.innerText = wpm;
    modalAccuracy.innerText = accuracy + "%";
    modalMistakes.innerText = mistakeCount;
    summaryModal.classList.remove("hidden");

    const li = document.createElement("li");
    li.textContent = `WPM: ${wpm}, Accuracy: ${accuracy}%, Mistakes: ${mistakeCount}`;
    history.prepend(li);
  }

  hiddenInput.addEventListener("input", () => {
    if (!isTimerRunning) {
      startTimer();
      isTimerRunning = true;
    }

    userInput = hiddenInput.value;
    const quoteSpans = quoteDisplay.querySelectorAll("span");
    let correctChars = 0;

    quoteSpans.forEach((span, i) => {
      const char = userInput[i];
      if (!char) {
        span.classList.remove("correct", "incorrect", "active");
      } else if (char === span.innerText) {
        span.classList.add("correct");
        span.classList.remove("incorrect", "active");
        correctChars++;
      } else {
        if (!span.classList.contains("incorrect")) mistakeCount++;
        span.classList.add("incorrect");
        span.classList.remove("correct", "active");
      }
    });

    const timeElapsed = ((new Date() - startTime) / 1000) / 60;
    const wordsTyped = userInput.trim().split(/\s+/).filter(Boolean).length;
    wpmElement.innerText = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;

    const accuracy = Math.round((correctChars / userInput.length) * 100) || 0;
    accuracyElement.innerText = accuracy + "%";
  });

  restartBtn.addEventListener("click", getRandomQuote);
  closeModalBtn.addEventListener("click", () => {
    summaryModal.classList.add("hidden");
    getRandomQuote();
  });
  document.getElementById("reset-btn").addEventListener("click", function () {
  const historyList = document.getElementById("history");
  historyList.innerHTML = "";  // Clear all history
  localStorage.removeItem("typingHistory");  // Optional: clear saved history if stored
});

  function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    themeIconToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

const savedTheme = localStorage.getItem("theme");

// Set dark mode as default if nothing is saved
const isDark = savedTheme === "dark" || savedTheme === null;
applyTheme(isDark);

  themeIconToggle.addEventListener("click", () => {
    const currentlyDark = document.body.classList.contains("dark-mode");
    applyTheme(!currentlyDark);
  });

  getRandomQuote();

  // Automatically focus the hidden input on load and on click
function focusHiddenInput() {
  document.getElementById("hidden-input").focus();
}



window.addEventListener("load", focusHiddenInput);
document.addEventListener("click", focusHiddenInput);



};