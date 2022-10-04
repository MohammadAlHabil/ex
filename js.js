let deferredPrompt;
const addBtn = document.querySelector("#add-button");
addBtn.style.display = "none";

if ("BeforeInstallPromptEvent" in window){
  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    // deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = "block";
  
    addBtn.addEventListener("click", (mouseEvent) => {
      // hide our user interface that shows our A2HS button
      // addBtn.style.display = "none";
      // Show the prompt
      e.prompt();
      // Wait for the user to respond to the prompt
      e.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          alert("User accepted the A2HS prompt");
        } else {
          alert("User dismissed the A2HS prompt");
        }
        // deferredPrompt = null;
      });
    });
  });
  alert("Chrome-style PWA install experience supported!");
}

if ("standalone" in navigator)
  alert("iOS Safari-style PWA Add-to-Homescreen maybe supported!");


