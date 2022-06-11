// import logo from './logo.svg';
import './App.css';
import { Router, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import { HomePage } from './pages/HomePage/HomePage';
import { createBrowserHistory } from 'history';
import Register from './pages/Register/Register';
import Courses from './pages/Courses/Courses';
import CourseList from './pages/CourseList/CourseList';
import CourseDetail from './pages/CourseDetail/CourseDetail';


export const history = createBrowserHistory()
function App() {
  return (
  <Router history={history}>
    <Switch>
      <LoginPage exact path='/login' component='LoginPage'/>
      <HomePage exact path='/' component='HomePage'/>
      <Register exact path='/register' component='Register'/>
      <Courses exact path='/courses' component='Courses'/>
      <CourseList exact path='/courselist' component='CourseList'/>
      <CourseDetail exact path='/coursedetail' component='CourseDetail'/>
   
    </Switch>
  </Router>
  );
}

export default App;
