import ReactDOM from 'react-dom/client'
import LandingScreen from './screens/LandingScreen'
import './index.css'
import DataContextProvider from './context/DataContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <DataContextProvider>
        <LandingScreen />
    </DataContextProvider>
)
