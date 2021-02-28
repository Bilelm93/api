import React from 'react';


const GetList = ({listOfUSer}) => {
    
    return (
        <div  style={{margin:50}}>
        
         
              {
                  
  listOfUSer.map(el=>
    
    <table  key={el.id} >
<td  >
     
      <tr> Name : {el.name} </tr>
      <tr> UserName: {el.username}</tr>
      <tr>Email: {el.email} </tr>
      <tr>Addrese : {el.address.street} 
      {el.address.suite} {" "}
      {el.address.city} {" "}
     {el.address.zipcode} </tr>
       {/* <tr>{el.geo.lat} </tr> */}
      {/* <td>{el.geo.lng} </td> */}
      <tr>Phone : {el.phone} </tr>
      <tr>Website : {el.website} </tr>
      <tr>Company Name : {el.company.name} </tr>
      <tr>Catch Phrase : {el.company.catchPhrase} </tr>
      <tr>Company BS : {el.company.bs} </tr>
      
    </td>
   
  </table>

 


    
    )
              }  

            
        </div>
    );

}

export default GetList;
