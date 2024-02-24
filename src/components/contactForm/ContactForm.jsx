import { useForm } from 'react-hook-form';
import {
	StyledInput,
	StyledTextarea,
	StyledForm,
	StyledInputButton,
	StyledSpanErrors
} from './styles';

const ContactForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
	} = useForm();

	return (
		<StyledForm
			onSubmit={handleSubmit((data, event) => formSubmit(data, event, reset))}
			action='/submit-form'
		>
			<StyledInput
				type='email'
				id='email'
				name='email'
				placeholder='Email'
				{...register('email', {
					required: 'El email es requerido',
					pattern: {
						value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
						message: 'El email no es válido'
					}
				})}
			/>
			{errors && errors.email && (
				<StyledSpanErrors>{errors.email.message}</StyledSpanErrors>
			)}
			<StyledTextarea
				type='text'
				id='text'
				name='text'
				placeholder='Text'
				{...register('text', {
					required: 'Introduce tu texto',
					minLength: {
						value: 10,
						message: 'El texto debe tener al menos 10 caracteres'
					}
				})}
			/>
			{errors && errors.text && (
				<StyledSpanErrors>{errors.text.message}</StyledSpanErrors>
			)}
			<StyledInputButton type='submit' value='Submit' />
		</StyledForm>
	);
};

const formSubmit = async (data, event, reset) => {
	try {
		const response = await fetch('/submit-form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const responseData = await response.text();
		console.log(responseData);
		console.log(data);

		reset();
	} catch (error) {
		console.error('Error al enviar datos del formulario:', error);
	}
};

export default ContactForm;
