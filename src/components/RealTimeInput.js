import React, { useState } from 'react';

function RealTimeInput() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

  return (
    
    <form>
  <label for="fname">First name:</label><br/>
  <input type="text" value={firstname} onChange={function(e) {setFirstname(e.target.value);}}
      /><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" value={lastname} onChange={function(e) {setLastname(e.target.value);}}
      />
  <p>You can see the FirstName: {firstname}</p>
  <p>You can see the LastName: {lastname}</p>
</form>

      
    
  );
}

export default RealTimeInput;
