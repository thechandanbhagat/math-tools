import AppFooter from './comp/appfooter/appfooter';
import AppHeader from './comp/appheader/appheader';
import AppMenu from './comp/appmenu/appmenu';
import Content from './comp/content/content';
 

function App() {
  return (
    <div className="wrapper">
      <AppHeader />
      <AppMenu />
      <Content />
      <AppFooter />
  </div>
  );
}

export default App;
