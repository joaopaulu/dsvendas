import DataTable from 'core/components/DataTable';
import Footer from 'core/components/Footer';
import NavBar from 'core/components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
