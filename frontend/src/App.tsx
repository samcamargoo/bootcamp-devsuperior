import Datatable from 'components/Datatable';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import BarChart from 'components/Barchart';
import DonutChart from 'components/Donuchart';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">Dasboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm 6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>

          <div className="col-sm 6">
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
        </div>
        <Datatable />

      </div>
      <Footer />
    </>
  );
}

export default App;
