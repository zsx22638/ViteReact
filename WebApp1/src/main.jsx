import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store/index.js';

createRoot(document.getElementById('root')).render(
    // StrictMode 主要用于开发环境中，它可以帮助你识别潜在问题并改进代码的可维护性。在生产环境中，它不会影响应用的性能或行为，因此可以安全地移除。
  <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </StrictMode>,
)
