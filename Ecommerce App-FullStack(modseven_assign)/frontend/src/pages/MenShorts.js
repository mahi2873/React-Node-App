import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"

const MenShorts = () => {

    const [data, setData] = useState([]);

    // const [price, setPrice] = useState([]);

    const [brand, setBrand] = useState([]);

    // Fetching all Men Shorts
    let fetchProducts = ()=>{


        fetch('http://localhost:5000/MenShorts',
        
        {
        method:"GET",
        mode: "cors", 
        headers: {

            accept: "application/json",
            "Access-Control-Allow-Origin": "*"
            
        }
        }
        
        )
        .then((result) => result.json())
        .then((data)=>{
            setData(data);
            // console.log(data);
        }).catch(err=>{
        
            if(err){
                console.log("")
            }

        })   


    }

    console.log(data);


    useEffect(() => {
      return () => {
        fetchProducts();
      };
    }, [])


  return (
    <>

<h1 className="text-center my-2">Men Shorts</h1>

<div className="container-fluid ms-2 my-3">

<div className="row">
    

    <div className="col-12 col-sm-2 bg-filter" style={{height:"80vh"}}>

        <div className="row my-2">

        <div className="col-12 h3">Filter</div>
        <div className="col-12 my-4">

            <label htmlFor="" className="h5">Price</label><br />

            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="0">0</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </select> 
        
        <div className="text-center my-2 h5"><i className="fa-solid fa-arrows-up-down"></i></div>
            
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
            </select>

        </div>

        <div className="col-12 my-4">

            <label htmlFor="" className="h5 my-2">Brands</label>
            
            <div className="row">
                <div className="col-12"><input type="checkbox" value={brand} onClick={()=>{setBrand('Suratiya')}} /> Suratiya</div>
                <div className="col-12"><input type="checkbox" value={brand} onClick={()=>{setBrand('Jango')}} /> Jango</div>
                <div className="col-12"><input type="checkbox" value={brand} onClick={()=>{setBrand('Gemini')}} /> Gemini</div>
                <div className="col-12"><input type="checkbox" value={brand} onClick={()=>{setBrand('Cheff')}} /> Cheff</div>
                <div className="col-12"><input type="checkbox" value={brand} onClick={()=>{setBrand('Chimnika')}} /> Chimnika</div>
                <div className="col-12"><input type="checkbox" value={brand} onClick={()=>{setBrand('Tich')}} /> Tich</div>
                <div className="col-12"><input type="checkbox" value={brand} onClick={()=>{setBrand('Chimi')}} /> Chimi</div>
                <div className="col-12"><input type="checkbox" value={brand} onClick={()=>{setBrand('Den')}} /> Den</div>
                <div className="col-12"><input type="checkbox" value={brand} onClick={()=>{setBrand('Young')}} /> Young</div>                    
            </div>

        </div>



        </div>

    </div>
    
    <div className="col ms-sm-2 bg-product">

        <div className="row">
        {data.map((data,index)=>{
            return(

            <div className="col-md-3" key={index}>

                <ProductCard
                    name = {data.name}
                    brand = {data.brand}
                    price = {data.price}
                    imgProd = {data.url}
                    rate = {data.rating}

                />

            </div>


            )


        })}
            

        </div>

    </div>
</div>
</div>

    </>
  )
}
export default MenShorts