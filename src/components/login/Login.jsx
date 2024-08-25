// import React, { useContext, useRef, useState } from 'react';
// import { FaRegUser } from "react-icons/fa";
// import { IoIosLock } from "react-icons/io";
// import { Link, useNavigate } from 'react-router-dom';
// import createcontext from '../../store/CreateStore';

// const Login = () => {
//   const context = useContext(createcontext);
//   const navigate = useNavigate();
//   const usernameRef = useRef();
//   const passwordRef = useRef();
//   const [role, setRole] = useState('');

//   const handleRoleSelection =async (selectedRole) => {
//     // selectedRole.preventDefault();
//     let defaultUsername = selectedRole;
//     let defaultPassword = '1234567';
//     usernameRef.current.value = defaultUsername;
//     passwordRef.current.value = defaultPassword;
//     setRole(selectedRole);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     let apiEndpoint = '';
//     let obj = {
//       email: usernameRef.current.value,
//       password: passwordRef.current.value
//     };

//     if (role === 'superadmin') {
//       obj = {
//         Super_Admin: usernameRef.current.value,
//         Password: passwordRef.current.value
//       };
//       apiEndpoint = 'http://localhost:8080/api/findsuperadmin';
//     } else {
//       switch(role) {
//         case 'admin':
//           apiEndpoint = 'http://localhost:8080/user/admin/login';
//           break;
//         case 'marchendiser':
//           apiEndpoint = 'http://localhost:8080/user/merch/login';
//           break;
//         case 'accountant':
//           apiEndpoint = 'http://localhost:8080/user/account/login';
//           break;
//         case 'production':
//           apiEndpoint = 'http://localhost:8080/user/prod/login';
//           break;
//         default:
//           return;
//       }
//     }

//     const res = await fetch(apiEndpoint, {
//       method: 'post',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(obj)
//     });

//     const data = await res.json();
//     console.log('res data', data);

//     if (data.success) {
//       context.setsuperadmin(role === 'Super_Admin');
//       context.setadmin(role === 'admin');
//       context.setmarchendiser(role === 'marchendiser');
//       context.setaccountant(role === 'accountant');
//       context.setproduction(role === 'production');

//       navigate('/home');
//     }
//   };

//   return (
//     <div className='w-full absolute top-0 right-0 bottom-0 left-0 login-page p-3 gap-5 bg-purple-400' style={{height:"100vh"}}>
//       <form className='w-1/2 h-fit bg-white rounded-3xl p-10 m-auto mt-5 pt-5'>
//         <h1 className='fw-bold text-center' style={{fontSize:"2rem"}}>
//           Welcome to <span className='text-purple-500 fw-bold'>Garments ERP</span>
//         </h1>
//         <p className='text-center mb-4'>Please login in to your account</p>
//         <div className="mb-3 w-auto d-flex">
//           <div className='w-12 bg-gray-50 p-3'><FaRegUser /></div>
//           <input type="text" ref={usernameRef} className="form-control" placeholder='Enter your Username' />
//         </div>
//         <div className="mb-3 w-auto d-flex">
//           <div className='w-12 bg-gray-50 p-3'><IoIosLock /></div>
//           <input type="password" ref={passwordRef} className="form-control" placeholder='Enter Password' />
//         </div>
//         <div className="mb-3 mt-3 w-auto d-flex form-check">
//           <input type="checkbox" className="form-check-input" />
//           <p className="ms-2">Remember me</p>
//           <p className="ms-auto"><Link to='/forgot'>Forgot Password?</Link></p>
//         </div>
     
//         <button onClick={handleLogin } className="btn btn-primary w-full">
//           Login
//         </button>

//         <div className="row mt-4">
//           <div className="col-3">
//             <div
//              onClick={() => handleRoleSelection('superadmin')}
//               // onClick={handleadmin}
             
//              style={{fontSize:"14px"}}
//               className="btn btn-outline-primary w-100 mb-2"
//             >
//               Super Admin
//             </div>
//           </div>
//           <div className="col-3">
//             <div
//              onClick={() => handleRoleSelection('admin')}
//               // onClick={adminhandle}
             
//              style={{fontSize:"14px"}}
//               className="btn btn-outline-secondary w-100 mb-2"
//             >
//               Admin
//             </div>
//           </div>
//           <div className="col-3">
//             <div
//             style={{fontSize:"14px"}}
//             className="btn btn-outline-success w-100 mb-2">
//               Manager
//             </div>
//           </div>
//           <div className="col-3">
//             <div
//              onClick={() => handleRoleSelection('marchendiser')}
//               // onClick={marchendiser}
             
//              style={{fontSize:"14px"}}
//               className="btn btn-outline-danger w-100 mb-2"
//             >
//               Merchandiser
//             </div>
//           </div>
//           <div className="col-3">
//             <div
//             style={{fontSize:"14px"}}
//             className="btn btn-outline-warning w-100 mb-2">
//               Commercial
//             </div>
//           </div>
//           <div className="col-3">
//             <div
//              onClick={() => handleRoleSelection('accountent')}
//               // onClick={accountent}
             
//              style={{fontSize:"14px"}}
//               className="btn btn-outline-info w-100 mb-2"
//             >
//               Accountant
//             </div>
//           </div>
//           <div className="col-3">
//             <div
//              onClick={() => handleRoleSelection('production')}
//               // onClick={production}
             
//              style={{fontSize:"14px"}}
//               className="btn btn-outline-dark w-100 mb-2"
//             >
//               Production
//             </div>
//           </div>
//           <div className="col-3">
//             <div
//             style={{fontSize:"14px"}}
//             className="btn btn-outline-success w-100 mb-2">
//               Buyer
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useContext, useRef, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import createcontext from '../../store/CreateStore';

const Login = () => {
  const context = useContext(createcontext);
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [role, setRole] = useState('');

  const credentials = {
    superadmin: { email: 'superadmin@gmail.com', password: '1234567' },
    admin: { email: 'admin@gmail.com', password: '1234567' },
    merchandiser: { email: 'merch@gmail.com', password: '1234567' },
    accountant: { email: 'accountant@example.com', password: 'accountantpass' },
    production: { email: 'prod@gmail.com', password: '1234567' },
    manager: { email: 'manager@example.com', password: 'managerpass' },
    commercial: { email: 'commercial@example.com', password: 'commercialpass' },
    buyer: { email: 'buyer@example.com', password: 'buyerpass' }
  };

  const handleRoleSelection = (selectedRole) => {
    const selectedCredentials = credentials[selectedRole];
    usernameRef.current.value = selectedCredentials.email;
    passwordRef.current.value = selectedCredentials.password;
    setRole(selectedRole);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let apiEndpoint = '';
    let obj = {
      email: usernameRef.current.value,
      password: passwordRef.current.value
    };
console.log('obj',obj)
    switch(role) {
      case 'superadmin':
        // obj = {
        //   Super_Admin: usernameRef.current.value,
        //   Password: passwordRef.current.value
        // };
        apiEndpoint = 'http://localhost:8080/api/findsuperadmin';
        break;
      case 'admin':
        apiEndpoint = 'http://localhost:8080/user/admin/login';
        break;
      case 'merchandiser':
        apiEndpoint = 'http://localhost:8080/user/merch/login';
        break;
      case 'accountant':
        apiEndpoint = 'http://localhost:8080/user/account/login';
        break;
      case 'production':
        apiEndpoint = 'http://localhost:8080/user/prod/login';
        break;
      case 'manager':
        apiEndpoint = 'http://localhost:8080/user/manager/login';
        break;
      case 'commercial':
        apiEndpoint = 'http://localhost:8080/user/commercial/login';
        break;
      case 'buyer':
        apiEndpoint = 'http://localhost:8080/user/buyer/login';
        break;
      default:
        return;
    }

    const res = await fetch(apiEndpoint, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    });

    const data = await res.json();
    console.log('res data', data);

    if (data.success) {
      context.setsuperadmin(role === 'superadmin');
      context.setadmin(role === 'admin');
      context.setmarchendiser(role === 'merchandiser');
      context.setaccountant(role === 'accountant');
      context.setproduction(role === 'production');
      context.setmanager(role === 'manager');
      context.setcommercial(role === 'commercial');
      context.setbuyer(role === 'buyer');

      navigate('/home');
    }
  };

  return (
    <div className='w-full absolute top-0 right-0 bottom-0 left-0 login-page p-3 gap-5 bg-purple-400' style={{height:"100vh"}}>
      <form className='w-1/2 h-fit bg-white rounded-3xl p-10 m-auto mt-5 pt-5'>
        <h1 className='fw-bold text-center' style={{fontSize:"2rem"}}>
          Welcome to <span className='text-purple-500 fw-bold'>Garments ERP</span>
        </h1>
        <p className='text-center mb-4'>Please login in to your account</p>
        <div className="mb-3 w-auto d-flex">
          <div className='w-12 bg-gray-50 p-3'><FaRegUser /></div>
          <input type="text" ref={usernameRef} className="form-control" placeholder='Enter your Username' />
        </div>
        <div className="mb-3 w-auto d-flex">
          <div className='w-12 bg-gray-50 p-3'><IoIosLock /></div>
          <input type="password" ref={passwordRef} className="form-control" placeholder='Enter Password' />
        </div>
        <div className="mb-3 mt-3 w-auto d-flex form-check">
          <input type="checkbox" className="form-check-input" />
          <p className="ms-2">Remember me</p>
          <p className="ms-auto"><Link to='/forgot'>Forgot Password?</Link></p>
        </div>
     
        <button onClick={handleLogin} className="btn btn-primary w-full">
          Login
        </button>

        <div className="row mt-4">
          <div className="col-3">
            <div
              onClick={() => handleRoleSelection('superadmin')}
              style={{fontSize:"14px"}}
              className="btn btn-outline-primary w-100 mb-2"
            >
              Super Admin
            </div>
          </div>
          <div className="col-3">
            <div
              onClick={() => handleRoleSelection('admin')}
              style={{fontSize:"14px"}}
              className="btn btn-outline-secondary w-100 mb-2"
            >
              Admin
            </div>
          </div>
          <div className="col-3">
            <div
              onClick={() => handleRoleSelection('manager')}
              style={{fontSize:"14px"}}
              className="btn btn-outline-success w-100 mb-2"
            >
              Manager
            </div>
          </div>
          <div className="col-3">
            <div
              onClick={() => handleRoleSelection('merchandiser')}
              style={{fontSize:"14px"}}
              className="btn btn-outline-danger w-100 mb-2"
            >
              Merchandiser
            </div>
          </div>
          <div className="col-3">
            <div
              onClick={() => handleRoleSelection('commercial')}
              style={{fontSize:"14px"}}
              className="btn btn-outline-warning w-100 mb-2"
            >
              Commercial
            </div>
          </div>
          <div className="col-3">
            <div
              onClick={() => handleRoleSelection('accountant')}
              style={{fontSize:"14px"}}
              className="btn btn-outline-info w-100 mb-2"
            >
              Accountant
            </div>
          </div>
          <div className="col-3">
            <div
              onClick={() => handleRoleSelection('production')}
              style={{fontSize:"14px"}}
              className="btn btn-outline-dark w-100 mb-2"
            >
              Production
            </div>
          </div>
          <div className="col-3">
            <div
              onClick={() => handleRoleSelection('buyer')}
              style={{fontSize:"14px"}}
              className="btn btn-outline-success w-100 mb-2"
            >
              Buyer
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
