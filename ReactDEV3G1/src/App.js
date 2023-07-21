import { Route, Routes } from 'react-router-dom';
import './App.css';
import  React, { useReducer } from 'react';
import $ from "jquery";
import "turn.js";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Developpement from './components/Services/Developpement/Developpement';
import Marketing from './components/Services/Marketing/Marketing';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import GestionPost from './components/Admin/GestionPost/GestionPost';
import FetchOneFilm from './components/FetchOneFilm/FetchOneFilm';
import FetchAllFilm from './components/FetchAllFilm/FetchAllFilm';
import NewFilm from './components/NewFilm/NewFilm';
import UpdateFilm from './components/UpdateFilm/UpdateFilm';
import Login from './components/Login/Login';
import Inscription from './components/Inscription/Inscription';
import ImageUpload from './components/ImageUpload/ImageUpload';
import FilesUploadForm from './components/FilesUploadForm/FilesUploadForm';
import MyBlog from './components/MyBlog/MyBlog';
import BlogIndex from './components/BlogIndex/BlogIndex';
import ChatApp from './components/ChatApp/ChatApp';
import IndexComponent from './components/IndexComponent';
// import styles from './app.module.css'
// import Counter from './components/Counter';
// import Message from './components/Message';
// import Hero from './components/Hero';
// import Greet from './components/Greet';
// import FunctionClick from './components/FunctionClick';
// import UserGreeting from './components/UserGreeting';
// import AdminTest from './components/AdminTest';
// import NameList from './components/NameList';
// import Person from './components/Person';
// import Inline from './components/Inline';
// import Form from './components/Form';
// import Newsletter from './components/Newsletter';
// import ComposantA from './components/ComposantA';
// import ComposantB from './components/ComposantB';
// import ComposantC from './components/ComposantC';
// import DataFetchingOne from './components/DataFetchingOne';
// import ApiFilm from './components/ApiFilm';
// import DataFetchAll from './components/DataFetchAll';
// import DataFetchTodos from './components/DataFetchTodos';
// import DataFetchReducer from './components/DataFetchReducer';
// import DataFetchProducts from './components/DataFetchProducts';

// export const CountContext =React.createContext();
// import Welcome from './components/Welcome';



const options = {
  width: 800,
  height: 600,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function (e, page) {
      console.log(page);
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

const pages = [
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg"
];


const App = () => {
  
  
  // const initialState = 0;
  // const reducer = (state, action) => {
  //   switch(action){
  //     case 'increment': return state + 1;
      
  //     case 'decrement': return state - 1;
      
  //     case 'reset': return initialState;
      
  //     default: return state;
  //   }
  // }

  // const [count, dispatch ] = useReducer(reducer, initialState);




  return (
    <div className="App">
      {/* <Greet name="Thomas" age="23 ans"> 
        Thomas est un super gars !
      </Greet>
      <Greet name="John" age="90 ans" />
      <Greet name="Will" age="33 ans" /> */}
      {/* <Welcome /> */}
{/* 
      <Hero name="Bruce" hero="Batman">
        This is children props
      </Hero>
      <Hero name="Clark" hero="Superman" />
      <Hero name="Diana" hero="Wonder Woman" /> */}

      {/* <Welcome name= "toto" age="26 ans"> 
        Ceci est un children 
      </Welcome>
      <Welcome name= "titi" age="90 ans" />
      <Welcome name= "fred" age="36 ans" /> */}

      {/* <Message /> */}
      
      {/* <Counter valeur={100} /> */}
      {/* <FunctionClick /> */}
      {/* <UserGreeting /> */}
      {/* <AdminTest /> */}

      {/* <NameList /> */}
      {/* <Person /> */}
      {/* <Inline /> */}

      {/* <h1 className={styles.successful}>Succes !</h1> */}
      {/* <Form /> */}
      {/* <Newsletter /> */}

      {/* <CountContext.Provider value= {{countState: count, countDispatch: dispatch}}>
        
        <ComposantA />
        <ComposantB />
        <ComposantC />

      </CountContext.Provider> */}

      {/* <DataFetchingOne /> */}
      {/* <ApiFilm /> */}

      {/* <DataFetchAll /> */}
      {/* <DataFetchTodos /> */}
      {/* <DataFetchReducer /> */}
      {/* <DataFetchProducts /> */}

      <IndexComponent options={options} className="magazine">
      {pages.map((page, index) => (
        
        <div key={index} className="page">
          <img src={page} alt="" />
        </div>
      ))}
    </IndexComponent>

    </div>
  );
}

export default App;
