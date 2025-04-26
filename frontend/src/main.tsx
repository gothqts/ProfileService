import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import 'styles/ui-kit.css'
import './styles/sanitize.css'
import './styles/text.css'
import './styles/variables.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
