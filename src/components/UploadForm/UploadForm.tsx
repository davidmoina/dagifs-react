import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './uploadForm.module.scss';
import { AiOutlineLeft } from 'react-icons/ai';
import { InputsUpload } from '../../interfaces/inputsUpload';

interface Props {
	image: string | null;
	handleBack: () => void;
	currentFile?: File;
}

export const UploadForm = ({ image, handleBack, currentFile }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<InputsUpload>();

	const onSubmit: SubmitHandler<InputsUpload> = async data => {
		console.log(data);
		const newFormData = new FormData();
		newFormData.append('data', JSON.stringify(data));
		if (currentFile) {
			newFormData.append('file', currentFile);
		} else {
			newFormData.append('url', image || '');
		}

		console.log(newFormData);
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
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h2>Add info</h2>
				<div className={styles.inputContainer}>
					<label htmlFor=''>Title</label>
					<input {...register('title', { required: true })} type='text' />
					{errors.title && <span>This field is required</span>}
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor=''>Description</label>
					<input {...register('description', { required: true })} type='text' />
					{errors.title && <span>This field is required</span>}
				</div>
				<button type='submit' className={styles.uploadBtn}>
					Upload to DAGIFS
				</button>
			</form>
		</section>
	);
};
