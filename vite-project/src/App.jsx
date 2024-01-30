import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './page/home/Home.jsx';
import Page1 from './components/page1.jsx';

function App() {

  const Layout = () => {
    return (
        <div className='contentContainer'>
          <Outlet></Outlet>
        </div>
    )

  };

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout></Layout>,
        children: [
          {
            path: '',
            element: <Page1></Page1>,
          },
          {
            path: ':id',
            element: <Home></Home>,
          },
        ]
      },
    
    ])
  
    return <RouterProvider router={router}/>
    

}
export default App
