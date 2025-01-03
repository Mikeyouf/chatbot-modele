(function () {
  const config = window.embeddedChatbotConfig;
  const domain = config.domain;

  // Charger le CSS du chatbot
  function loadStylesheet(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  // Charger le style du chatbot
  loadStylesheet(`${domain}/style.css`);

  // Charger le fichier `chatbot.js`
  function loadChatbotScript() {
    const script = document.createElement("script");
    script.src = `${domain}/chatbot.js`;
    script.type = "module"; // Si chatbot.js est un module ES6
    script.defer = true;
    document.head.appendChild(script);
  }

  // Charger `chatbot.js`
  loadChatbotScript();

  // Obtenir le conteneur du chatbot déjà présent dans le HTML
  const chatWidgetContainer = document.querySelector(".chatbot-container");
  if (!chatWidgetContainer) {
    console.error("Le conteneur du chatbot n'est pas trouvé dans le HTML.");
    return;
  }

  // Masquer le conteneur du chatbot par défaut
  chatWidgetContainer.style.display = "none";

  // Bouton pour ouvrir/fermer le chatbot
  const openButton = document.createElement("button");
  openButton.textContent = "Chat";
  openButton.className = "chat-open-button";
  document.body.appendChild(openButton);

  openButton.addEventListener("click", function () {
    // Alterner l'affichage du chatbot
    chatWidgetContainer.style.display = chatWidgetContainer.style.display === "none" ? "flex" : "none";
  });
})();

/* <script>
window.embeddedChatbotConfig = {
  chatbotId: "asst_eqEQv0PzCAGyUZACXbkStVsT",
  domain: "https://chatbot-modele.netlify.app"
};
</script>
<script src="https://chatbot-modele.netlify.app/embed.js" defer></script>
 */