
import axios from "axios";
import React, {useEffect, useState} from 'react'; 
const Index = () => {
    const data = [];
    const [ditem, setDitem] = useState([]);
   
 
    const[libelle,setLibelle]=useState("");
    const[description,setDescription]=useState("");
    const[prix,setPrix]=useState("");
    const[date,setDate]=useState("");
    async function add(e) {
        e.preventDefault();
        console.log('ok');
        let item = {libelle,description,prix,date};
        data.push(item);
        localStorage.setItem('data', JSON.stringify(data));
        //console.log(data);
        findAllItem();
    }
   async function findAllItem(){
     //  const AllData = await JSON.parse(String(localStorage('data'))); 
    }
    return(
         <div>
             <div class="container mt-5">
                <div class="row">
                     <div class="col-md-4">
                         <div className="card card-primary">
                            <div className="card-header">
                                    <h3 className="card-title">Ajouter un produit </h3>
                            </div>
                            <form onSubmit={add}>
                                 <div className="card-body">
                                 <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Libelle</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Entre libelle" onChange={(e)=>setLibelle(e.target.value)}   required />
                                 </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Prix</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter prix" onChange={(e)=>setPrix(e.target.value)}  required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Description</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)}   required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Date</label>
                                        <input type="Date" className="form-control" id="exampleInputEmail1" placeholder="Enter Date" onChange={(e)=>setDate(e.target.value)}  required />
                                    </div>
                                 </div>
                                 <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                 </div>
                            </form>
                         </div>
                     </div>
                     <div class="col-md-6">
                        <div class="row mt-3">
                                        <div class="col-md-6"></div>
                                        <div class="col-md-6">
                                            <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Libelle</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="RECHERCHER PAR LE LIBELLE " onChange={(e)=>setLibelle(e.target.value)}   required />
                                            </div>
                                        </div>
                                    </div>
                        <div className="card card-primary">
                          <table class="table table-bordered">
                              <tr>
                                <td class="table-primary">Libelle</td>
                                <td class="table-secondary">Prix</td>
                                <td class="table-success">Description</td>
                                <td class="table-danger">Date</td>
                                <td class="table-danger">Action</td>
                              </tr>
                              
                                 {
                                    data.map((item) => 
                                    <tr>
                                      <td class="table-warning">{item.libelle}</td>
                                      <td class="table-warning">{item.prix}</td>
                                      <td class="table-warning">{item.description}</td>
                                      <td class="table-warning">{item.date}</td>
                                      <td class="table-warning">Action</td>
                                    </tr>  
                                    )
                                 }
                             
                            </table>
                        </div>
                     </div>
                </div>
             </div>
         </div>
    )
}

export default Index;