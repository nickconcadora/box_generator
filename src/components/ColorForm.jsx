import React, {useState} from 'react';

const ColorForm = (props) => {
    const {inputs, handleFormChange, handleSubmit} = props;


    return (
        <>
        <form onSubmit={handleSubmit} className="col-m5 mx-auto my-5" >
            <label>Color:</label>
            <input type = "text" className = "form-control" name="color" value = {inputs.color} onChange = {handleFormChange}/>
            <button className="btn-warning">Add</button>
            


        </form>
        
        </>
    );
        }

export default ColorForm;