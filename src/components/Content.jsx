import React from 'react'
import { Link } from 'react-router-dom'
import  '../style/Content.css'
import OIP from '../images/OIP.jpg'
import R from '../images/R.jpg'
import Rp from '../images/R.png'
import Rb from '../images/Rb.jpg'
import Rn from '../images/Rn.jpg'

export default function Content() {
    const data = {
        content:[
            {img:R,alt:'',title:"Amed boujem3a",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:OIP,alt:'',title:"walid bahrini",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:Rb,alt:'',title:"Asmae abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:Rp,alt:'',title:"Amin abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:Rn,alt:'',title:"Mehdi abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:OIP,alt:'',title:"Houssam abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:Rb,alt:'',title:"Johnne abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:Rp,alt:'',title:"walid amini",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:R,alt:'',title:"Amin abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:OIP,alt:'',title:"Amin abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:Rb,alt:'',title:"Amin abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:OIP,alt:'',title:"Amin abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:Rb,alt:'',title:"Amin abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:Rp,alt:'',title:"Amin abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:Rn,alt:'',title:"Amin abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:OIP,alt:'',title:"Amin abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:Rb,alt:'',title:"walid bahrini",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:OIP,alt:'',title:"Amin abdellah",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:Rb,alt:'',title:"walid bahrini",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
            {img:OIP,alt:'',title:"walid bahrini",text:"Some quick example text to build on the card title and make up the bulk of the card's content.",button:'More information'},
           
        ]
    }



  return (<>
    <div className="Content">
    <div>
    <image style={{width:"100px"}}  src="./OIP.jpg" alt="" />
  </div>
    <div style={{
    backgroundCcolor:" aqua",
    width: "90%",
    margin: "auto",
    display:" flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
}}>
    {data.content.map((item,index)=>
      <div key={index} className="card" style={{width:"18rem",marginTop:"20px"}}>
      <img width={300} height={200} src={item.img} className="card-img-top" alt="" />
      <div className="card-body">
        <h6 className="card-title"><img style={{borderRadius:"30px",width:"30px",height:"30px"}} src={item.img} className="card-img-top" alt="" /><span style={{marginLeft:"6px",fontWeight:"700"}}>{item.title}</span></h6>
        <Link to='#' style={{textDecoration:"none",color:"black",hover:{color:"green"}}}><h6 className="card-text" style={{cursour:"pointer"}}>{item.text}</h6></Link>
        <div className="raiting" style={{marginTop:"8px"}}>
        <span style={{color:"orange"}} class="fa fa-star checked"></span><span className='rating-value' style={{color:"orange",marginLeft:"7px"}}>4.5</span><span className='riting-number' style={{color:"gray",marginLeft:"7px"}}>(234)</span>
        </div>
        <hr />
        <div className="price">
        <div className="favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        </div>
        <div className="price-vlue">
          <h5>100$</h5>
        </div>
        
        </div>
      </div>
    </div>
  )}
    </div>
    </div>
    </>)
}
