import Template from '@templates/Template.js';
import '@styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
