import "./App.css";
import CustomerList from "./components/CustomerList";
import { useState } from "react";
import AddCustomer from "./components/AddCustomer";

function App() {
  // const dummyCustomer = [
  //   {
  //     feedback: "This is the feedback for the customer 1.",
  //     name: "Customer001",
  //     email: "customer001@gmail.com",
  //     tel: "546544",
  //     id: 1,
  //   },
  //   {
  //     feedback: "This is the feedback for the customer 2.",
  //     name: "Customer002",
  //     email: "customer002@gmail.com",
  //     tel: "456546",
  //     id: 2,
  //   },
  //   {
  //     feedback: "This is the feedback for the customer 3.",
  //     name: "Customer003",
  //     email: "customer003@gmail.com",
  //     tel: "575457",
  //     id: 3,
  //   },
  // ];

  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  async function fetchCustomerHandler() {
    // fetch("http://localhost:3000/customers")
    // .then(response =>
    //   {
    //     return response.json()
    //   })
    // .then(data =>
    //   {
    //     setCustomers(data)
    //   })
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/customers");
      if(!response.ok)
      {
        throw new Error("Something went wrong")
      }
      const data = await response.json();
      setCustomers(data);
    } catch (err) {
      setError(err.message)
    }
    
    setIsLoading(false);
  }

  let content = <p>No Customer found</p>
  if(customers.length>0)
  {
    content = <CustomerList customers={customers} />;
  }
  if(error)
  {
    content = <p>{error}</p>;
  }
  if(isLoading)
  {
    content = <p>Data is Loading...</p>;
  }

  async function addCustomerHandler(customer){
    const response = await fetch("http://localhost:3000/customers",
    {
      method:"POST",
      body:JSON.stringify(customer),
      headers:{
        "Content-type":"application/json"
      }
    })
    const data = await response.json()
    console.log(data)
    console.log(customer)
  }
  return (
    <>
      <section>
        <AddCustomer onAddCustomer={addCustomerHandler}/>
      </section>
      <section>
        <button onClick={fetchCustomerHandler}>Fetch Customers</button>
      </section>
      <section>
        {/* {!isLoading && error &&<p>{error}</p>}
        {!isLoading && customers.length > 0 && !error &&(
          <CustomerList customers={customers} />
        )}
        {!isLoading && customers.length === 0 && !error && <p>No Customer found</p>}
        {isLoading && <p>Data is Loading...</p>} */}
        {content}
      </section>
    </>
  );
}

export default App;
