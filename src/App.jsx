import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import Overview from "./components/Overview"
import Transactions from "./components/Transactions"
import Table from "./components/Table"
import Footer from "./components/Footer"



function App() {

  return (
    <div className="flex">
      <div className="w-full min-h-screen bg-white-50">
      <Sidebar />

      <div className="border-b border-black-150 sm:pl-64 bg-white-500">
        <Topbar />
      </div>
      
      <div className=" m-5 mb-0 sm:ml-64 grid gap-8">
        <Overview />
        <div className="grid gap-6">
          <Transactions />
          <Table />
        </div>
        <Footer/>
      </div>

    </div>
    </div>
    
  )
}

export default App
