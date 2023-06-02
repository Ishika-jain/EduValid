import React from 'react';

const ChecklistItem = ({ key,item, isChecked, onCheck }) => {   
  console.log(key)
  return (
    <div className="shadow-md p-6 flex justify-between ">
      <div>
        <span>{key} </span>
      <span className="text-xl font-medium">{item}</span>
      </div>
      <input type="checkbox" className="form-checkbox w-6 h-5" checked={isChecked} onChange={onCheck} />
      
    
    </div>
  );
}

export default ChecklistItem;
