import Datatable from 'components/Datatable';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">Dasboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm 6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
          </div>
          </div>  

        <Datatable />
        
      </div>
      <Footer />
    </>
  );
}

export default App;
