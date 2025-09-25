import React,{useState}from'react';
function RestaurantMenu(){
const[order,setOrder]=useState([]);
const menuitems=[
{id:1,name:'Dum Biriyani',price:180},
{id:2,name:'special biriyani',price:200},
{id:3,name:'hyderabadi biriyani',price:260}
];
const addToOrder=(item)=>setOrder([...order,item]);
const total=order.reduce((sum,item)=>sum+item.price,0);
return(
<div style={{
minHeight:'100vh',
background:'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),
url(https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
backgroundSize:'cover',
color:'white',padding:'40px'
}}>
<div style={{maxWidth:'600px',margin:'0 auto'}}>
<h1 style={{fontFamily:'georgia',borderBottom:'1px solid goldenrod'}}>Biriyani House</h1>
<div style={{display:'grid',gap:'20px',margin:'30px 0'}}>
{menuitems.map(item=>(
<div key={item.id} style={{
display:'flex',
justifyContent:'space-between',
alignitems:'center',
background:'rgba(255,255,255,0.1)',
padding:'15px',
borderRdius:'5px'}}>
<div>
<h3 style={{margin:0}}>{item.name}</h3>
<p style={{color:'goldenrod',margin:'5px 00'}}>${item.price}</p>
</div>
<button onClick={()=>addToOrder(item)}style={{
background:'goldenrod',
border:'none',
padding:'8px 15px',borderRadius:'3px',
cursor:'pointer+Add</button>
</div>
))}
</div>
{order.length>0&&(
<div style={{
background:'rgba(0,0,0,0.7)',
padding:'20px',
borderRadius:'5px'
}}>
<h2>your Order</h2>
{order.map((item,i)=>(
<pkey={i} style={{disply:'flex',justifyContent:'space-between'}}>
<spam>{item.name}</span>
<span>${ITEM.PRICE}</SPAN>
</P>
<P style={{
BorderTop:'1px solid goldenrod',
paddingTop:'10PX',
fontWeight:'bold',
display:'flex',
justifyContent:'space-between'
}}>
<span>total:</span>
<span>${total}</span>
</p>
</div>
)}
</div>
</div>
);
}
export default RestaurantMenu;