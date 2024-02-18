import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './Layouts/MainLayout';
import { main_pages } from './router/MainLayouts';
import './index.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {main_pages.map((route) => (
            <Route
              index={route.path ? false : true}
              key={crypto.randomUUID()}
              path={route.path}
              element={route.component}
            />
          ))}
        
        </Route>
      
      </Routes>
    </>
  );
}

export default App;
