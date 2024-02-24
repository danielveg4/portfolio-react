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
		formState: { errors }
	} = useForm();

	return (
		<StyledForm onSubmit={handleSubmit(formSubmit)}>
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

const formSubmit = data => {
	console.log(data);
};

export default ContactForm;
