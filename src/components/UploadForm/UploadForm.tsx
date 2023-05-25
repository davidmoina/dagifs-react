import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './uploadForm.module.scss';
import { AiOutlineLeft } from 'react-icons/ai';
import { InputsUpload } from '../../interfaces/inputsUpload';
import { useMutation } from '@tanstack/react-query';
import { addGif } from '../../api/gifsApi';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';

interface Props {
	image: string | null;
	handleBack: () => void;
	currentFile?: File | null;
}

export const UploadForm = ({ image, handleBack, currentFile }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<InputsUpload>();

	const { mutateAsync } = useMutation({
		mutationFn: addGif,
	});

	const formRef = useRef<HTMLFormElement>(null);

	const onSubmit: SubmitHandler<InputsUpload> = async () => {
		const toastId = toast.loading('Saving gif');
		if (!formRef.current) {
			throw new Error('No Data');
		}

		const newFormData = new FormData(formRef.current);
		newFormData.append('user', '646cfc7f4ce2a456edc9e0ec');
		newFormData.append('username', 'davidmoina');

		if (currentFile) {
			newFormData.append('image', currentFile);
		} else {
			newFormData.append('image_url', image || '');
		}

		try {
			await mutateAsync(newFormData);
			toast.success('Done', {
				id: toastId,
			});
			reset();
			handleBack();
		} catch (error) {
			toast.error('Error', {
				id: toastId,
			});
		}
	};

	return (
		<section className={styles.uploadFormSection}>
			<div className={styles.leftContainer}>
				<div onClick={handleBack} className={styles.back}>
					<AiOutlineLeft />
					<span>Back</span>
				</div>
				{image && (
					<img className={styles.previewImage} width={460} src={image} alt='' />
				)}
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				ref={formRef}
				className={styles.form}
				encType='multipart/form-data'
			>
				<h2>Add info</h2>
				<div className={styles.inputContainer}>
					<label htmlFor=''>Title</label>
					<input
						{...register('title', { required: true })}
						type='text'
						placeholder='Enter a title.'
					/>
					{errors.title && <span>This field is required</span>}
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor=''>Description</label>
					<input
						{...register('description', { required: true })}
						type='text'
						placeholder='Enter a description.'
					/>
					{errors.title && <span>This field is required</span>}
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor=''>Tags</label>
					<input
						{...register('tags')}
						type='text'
						placeholder='Separate with commas to add multiple tags.'
					/>
					{errors.tags && <span>This field is required</span>}
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor=''>Source</label>
					<input
						{...register('source')}
						type='text'
						placeholder='Add a source url.'
					/>
					{errors.source && <span>This field is required</span>}
				</div>
				<button type='submit' className={styles.uploadBtn}>
					Upload to DAGIFS
				</button>
			</form>
		</section>
	);
};
