// import React, { useState, useEffect } from 'react';

// Props: 
// Initial values in state: form values
// Callback
// Validation

// export const ReusableForm = (props) => {
//   const [ initialFormValues, setInitialFormValues ] = useState({});
//   const [ error, setError ] = useState(null);

//   const renderForm = () => {

//   }

//   return (
//     <form>

//     </form>
//   )
// }

// const ReusableForm = (type = 'add') => {
//   const [ goal, setGoal ] = useState({});
//   const [ error, setError ] = useState(null);

//   useEffect(() => {
//     if(type === 'edit') {
//       // Make an async call to fetch the goal
//       // Store the goal in state
//       // Populate form fields with goal
//     }
//   });

//   const handleSubmitForm = (e) => {
//     e.preventDefault();

//   }

//   return (
//     <form
//       onSubmit={(e) =>
//         handleSubmitForm(e)
//       }
//     >
//       <label
//         htmlFor='name'
//       >
//         Name: 
//       </label>
//       <input
//         defaultValue={
//           (type === 'edit')
//           ? goal.name
//           : ''
//         }
//         id='name'
//         onChange={}
//         type='text'
//       />

//       <label
//         htmlFor='goal_amount'
//       >
//         Amount: 
//       </label>
//       <input
//         defaultValue={
//           (type === 'edit')
//           ? goal.name
//           : ''
//         }
//         id='goal_amount'
//         type='text'
//       />

//       <label
//         htmlFor='end_date'
//       >
//         End Date: 
//       </label>
//       <input
//         id='end_date'
//         type='text'
//       />

//       <button>
//         Submit
//       </button>
//     </form>
//   )
// }