import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline} from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import { useDispatch, useSelector, } from "react-redux";
import { getProducts, getDeleteProducts} from "../../redux/apiCalls";
import { publicRequest, useRequest } from '../../requestMethod';

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.product.products);
  const [query, setQuery] = useState('');

  useEffect(()=>{
    getProducts(dispatch);
  },[dispatch])

  const handleDelete = (id) => {
    getDeleteProducts(id, dispatch); 
    console.log(id);
  };
  

  const search = () => {
    return products.filter(product=>
      product.title.toLowerCase().includes(query) || 
      product._id.toLowerCase().includes(query) || 
      product.size.toLowerCase().includes(query) 
      );
  }


  const columns = [
    { field: "_id", headerName: "ID", width: 120 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row._id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      }, 
    },
  ];

  return (
    <div className="productList">
      <div className='babel'>
       <input className='input' type='text' placeHolder='Search...' onChange={(e)=>setQuery(e.target.value)}/> 
      </div>
      <DataGrid
        rows={search(products)}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
