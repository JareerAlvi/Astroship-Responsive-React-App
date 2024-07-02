
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Pricing from './Pricing/Pricing.jsx'
import About from './About/About.jsx'
import Blog from './Blog/Blog.jsx'
import Contact from './Contact/Contact.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
     <>
<Router>
<Header/>
<Routes>
     <Route path='/' element={<App></App>}/>
     <Route path='/Pricing' element={<Pricing/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/Blog' element={<Blog/>}/>
     <Route path='/Contact' element={<Contact/>}/>
</Routes>
</Router>



   
      <Footer/>
     </>
   
)
