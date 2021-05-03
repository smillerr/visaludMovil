(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
