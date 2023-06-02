import React from 'react';

const ChecklistItem = ({ item, isChecked, onCheck }) => {

    // const click = () => {
    //     localStorage.setItem('data', item);
    //     console.log("first")
    //     }
        

        
  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={onCheck} />
      
      <span>{item}</span>
    
    </div>
  );
}

export default ChecklistItem;
