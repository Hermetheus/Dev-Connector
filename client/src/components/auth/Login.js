import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();
		console.log('SUCCESS');
	};

	//  Changing this to redux, example of a request to MONGODB

	// const onSubmit = async e => {
	// 	e.preventDefault();
	// 	if (password !== password2) {
	// 		console.log('Passwords do not match.');
	// 	} else {
	// 		const newUser = {
	// 			name,
	// 			email,
	// 			password
	// 		};

	// 		try {
	// 			const config = {
	// 				headers: {
	// 					'Content-Type': 'application/json'
	// 				}
	// 			};

	// 			const body = JSON.stringify(newUser);

	// 			const res = await axios.post('/api/users', body, config);

	// 			console.log(res.data);
	// 		} catch (err) {
	// 			console.error(err.response.data);
	// 		}
	// 	}
	// };

	// state = {
	//     formData: {

	//     }
	// }

	// this.setState

	return (
		<Fragment>
			<h1 className='large text-primary'>Sign In</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Sign Into Your Account
			</p>
			<form className='form' onSubmit={e => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						value={email}
						onChange={e => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						minLength='6'
						value={password}
						onChange={e => onChange(e)}
					/>
				</div>
				<input type='submit' className='btn btn-primary' value='Login' />
			</form>
			<p className='my-1'>
				Dont have an account? <Link to='/register'>Sign Up</Link>
			</p>
		</Fragment>
	);
};

export default Login;
