
const Fields= ({name, email, index,removeItem})=>{
    return(
         <div className = "data_val">
          <h4>{name}</h4>
          <h4>{email}</h4>
          <button  className="delButton" onClick = {()=>removeItem(index)}>Delete</button>
        </div>
    );
};
export default Fields;