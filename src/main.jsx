import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TodoContextProvider } from './context/TodoContext.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
  </>

)

