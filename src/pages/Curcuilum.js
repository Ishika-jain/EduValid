import React, { useState, useEffect } from 'react';
import ChecklistItem from '../checklistItem';
// import ChecklistItem from '../checklistItem';

const Curcuilum = () => {
    const List=[
        {id:0,item : "React Components", isChecked:false},
        {id:1,item : "React Sates", isChecked:false},
        {id:2,item : "Routing", isChecked:false},
        {id:3,item : "Virtual DOM", isChecked:false},
        {id:4,item : "Fetching Data", isChecked:false},
        {id:5,item : "Page Navigation", isChecked:false},
        {id:6,item : "React Hooks", isChecked:false},
        {id:7,item : "Redux", isChecked:false},
    ]
    const [items, setItems] = useState(List);
    useEffect(() => {
      try {
        const storedItems = JSON.parse(localStorage.getItem('checklistItems'));
  
        if (storedItems) {
          setItems(storedItems);
          console.log("getting from local storage")
        }
      } catch (error) {
        console.error('Error loading checklist items from local storage:', error);
      }
    }, []);
  
    useEffect(() => {
      try {
        localStorage.setItem('checklistItems', JSON.stringify(items));
        console.log("set in local storage")
      } catch (error) {
        console.error('Error saving checklist items to local storage:', error);
      }
    }, [items]);
  
    const handleCheck = (id) => {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isChecked: !item.isChecked,
          };
        }
        return item;
      });
      setItems(updatedItems);
    };
  
    const progress = (items.filter((item) => item.isChecked).length / items.length) * 100;
  
    useEffect(() => {
      try {
        localStorage.setItem('checklistProgress', progress.toFixed(2));
      } catch (error) {
        console.error('Error saving checklist progress to local storage:', error);
      }
    }, [progress]);
  
    return (
     <div className='px-8 pt-4 rounded-lg bg-gradient-to-r from-pinky to-bluey '>
        <div className="text-4xl font-bold text-center">React Curiculum</div>
         <div className="shadow-md p-4 mt-8  w-5/12 bg-bpink">
        <h2>Progress: {progress.toFixed(2)}%</h2>
        
       {items.map((item) => (
          <ChecklistItem
            key={item.id}
            item={item.item}
            isChecked={item.isChecked}
            onCheck={() => handleCheck(item.id)}
          />
        ))}
      </div>
     </div>
    );
  };

export default Curcuilum