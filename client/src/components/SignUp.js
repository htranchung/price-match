// import React, { useState } from 'react';

// import { useMutation } from '@apollo/client';
// import { ADD_PROFILE } from '../utils/mutations';

// import Auth from '../utils/auth';

// const Signup = () => {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [addProfile] = useMutation(ADD_PROFILE);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addProfile({
//         variables: { ...formState },
//       });

//       Auth.login(data.addProfile.token);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formState.name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formState.email}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           name="password"
//           value={formState.password}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default Signup;
