import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from './components/Header.tsx'
import {PageTitle} from './components/PageTitle.jsx'
import { TasksList } from './components/TasksList.tsx'
import { TaskDetails } from './components/TaskDetails.tsx'
import { Footer } from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(<MainPage />)

function MainPage(){
    return<>
        <Header />
        <PageTitle />
            <div className="container">
                <TasksList />
                <TaskDetails />
            </div>
        <Footer />
    </>
}
