import ListPage from "./components/ListPage"
import {Route,Routes,Link} from 'react-router-dom'

function App() {
  return <>
  <nav>
    <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/favorite">Favorite</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
  </nav>
  <Routes>
    <Route path="/" element={<ListPage/>}/>
  </Routes>
  </>
}

export default App
