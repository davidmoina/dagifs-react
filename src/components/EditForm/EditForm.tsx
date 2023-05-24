import { useForm } from 'react-hook-form';
import styles from './editForm.module.scss';
import { InputsUpload } from '../../interfaces/inputsUpload';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editGif } from '../../api/gifsApi';
import { toast } from 'react-hot-toast';
import { RiDeleteBin2Fill } from 'react-icons/ri';

interface Props {
	image?: string;
	title?: string;
	description?: string;
	tags?: string[];
	source?: string;
	_id?: string;
}

export const EditForm = ({
	image,
	description,
	title,
	tags,
	source,
	_id,
}: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<InputsUpload>({
		defaultValues: {
			description: description || '',
			title: title,
			tags: tags?.join(',') || '',
			source: source || '',
		},
	});

	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: editGif,
		onSuccess: () => {
			toast.success('Gif edited');
			queryClient.invalidateQueries({ queryKey: ['oneGif'] });
		},
	});

	const onSubmit = (data: InputsUpload) => {
		console.log(data);
		if (!_id) throw new Error('No id');

		mutate({ id: _id, data });
	};

	console.log(title, description);

	return (
		<section className={styles.uploadFormSection}>
			<div className={styles.leftContainer}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<div className={styles.inputContainer}>
						<label htmlFor=''>Title</label>
						<input
							{...register('title')}
							type='text'
							placeholder='Enter a title.'
						/>
						{errors.title && <span>This field is required</span>}
					</div>
					<div className={styles.inputContainer}>
						<label htmlFor=''>Description</label>
						<input
							{...register('description')}
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
					</div>
					<div className={styles.inputContainer}>
						<label htmlFor=''>Source</label>
						<input
							{...register('source')}
							type='text'
							placeholder='Add a source url.'
						/>
					</div>
					<button type='submit' className={styles.uploadBtn}>
						Edit gif
					</button>
				</form>
			</div>
			<figure className={styles.rightContainer}>
				<img className={styles.previewImage} src={image} alt='' />
				<button>
					<span>Delete</span>
					<RiDeleteBin2Fill />
				</button>
			</figure>
		</section>
	);
};