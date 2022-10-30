import "./newProduct.css";
import {useState, useEffect} from 'react';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {useDispatch} from 'react-redux';
import app from '../../firebase';
import {getAddProducts} from '../../redux/apiCalls';

export default function NewProduct() {

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) =>{
     setInputs(prev=>{
      return {...prev, [e.target.name]:e.target.value}
     })
  }
    const handleCate = (e) =>{
     setCategory(e.target.value.split(','));
  }
    const handleClick  = (e) =>{
      e.preventDefault();
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed',
  (snapshot) => {
   
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default:  
    }
  },
  (error) => {

  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      const product = ({ ...inputs, img: downloadURL, categories: category});      
      getAddProducts(product, dispatch);
      console.log('state');
    });
  }
);
    


    }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input name='img' type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name='title' type="text" placeholder="Apple Airpods" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Desc</label>
          <input name='desc' type="text" placeholder="Description" onChange={handleChange}/>
        </div>   
        <div className="addProductItem">
          <label>Price</label>
          <input name='price' type="number" placeholder="$0.00" onChange={handleChange}/>
        </div>        
        <div className="addProductItem">
          <label>Size</label>
          <select name='size' onChange={handleChange}>
            <option disabled selected>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <select name='color' onChange={handleChange}>
          <option disabled selected >Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Orange</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Categories</label>
            <input name='category' type="text" placeholder="Category" onChange={handleCate}/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name='inStock' onChange={handleChange}>
            <option value='true'>yes</option>
            <option value='false'>no</option> 
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
