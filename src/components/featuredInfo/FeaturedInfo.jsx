import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import {useState, useEffect} from 'react';
import {useRequest} from '../../requestMethod';

export default function FeaturedInfo() {

  const [icome, setIcome] = useState([]);

  const [perc, setPerc] = useState(0);

  useEffect(() =>{
      
     const getIcome = async () =>{
       try{
        const res = await useRequest.get('orders/income')
        setIcome(res.data[0].total)
       }
       catch(err){
        console.log(err)
       }
     }
       getIcome();
    },[])

useEffect(() =>{
     
     const getIcome = async () =>{
       try{
        const res = await useRequest.get('orders')
        setPerc((res.data[1].amount*100)/ res.data[0].amount -100) 

       }
       catch(err){
        console.log(err)
       }
     }
       getIcome();
    },[])
      console.log(icome);
      console.log(perc)

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${icome}</span>
          <span className="featuredMoneyRate">
          {perc > 0 ? '%+' : '%'}{Math.floor(perc)}{' '}
          {perc < 0 ? (
            <ArrowDownward  className="featuredIcon negative"/>
            ) : (
            <ArrowUpward className="featuredIcon"/>
          )}
          
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
