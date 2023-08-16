const TopSales = () => {


  return (
    <>
    {/* Top 5 Sales design */}
    <div className="sales-container d-flex flex-column justify-content-center align-items-center">

    <div className="sales-heading text-center h3 my-3">
      TOP 5 SALES
    </div>

    <div className="sales-table my-4">

    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Sales Id:</th>
      <th scope="col">Product Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Sale Amount</th>
    </tr>
  </thead>
  <tbody>

      <tr>
      <th scope="row">1</th>
      <td>SI100</td>
      <td>Mobile</td>
      <td>2</td>
      <td>$30000</td>
      </tr>
      <tr>
      <th scope="row">2</th>
      <td>SI101</td>
      <td>Watch</td>
      <td>3</td>
      <td>$5000</td>
      </tr>
      <tr>
      <th scope="row">3</th>
      <td>SI102</td>
      <td>Laptop</td>
      <td>5</td>
      <td>$200000</td>
      </tr>
  </tbody>
</table>

    </div>

    </div>

    </>
  )
}
export default TopSales