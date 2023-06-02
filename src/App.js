import React from 'react';
import Checklist from './checklist';
import ChecklistItem from './checklistItem';


const App = () => {
  return (
    <div>
      <h1>Checklist</h1>
      <Checklist>
        <ChecklistItem item="Task 1" isChecked={true} />
        <ChecklistItem item="Task 2" isChecked={false} />
        {/* Add more checklist items */}
      </Checklist>
    </div>
  );
}

export default App;
