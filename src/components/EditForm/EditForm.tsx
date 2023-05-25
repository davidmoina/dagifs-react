import { useForm } from 'react-hook-form';
import styles from './editForm.module.scss';
import { InputsUpload } from '../../interfaces/inputsUpload';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteGif, editGif } from '../../api/gifsApi';
import { toast } from 'react-hot-toast';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

interface Props {
	image?: string;
	title?: string;
	description?: string;
	tags?: string[];
	source?: string;
	_id?: string;
	closeModal: () => void;
}

export const EditForm = ({
	image,
	description,
	title,
	tags,
	source,
	_id,
	closeModal,
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

	const navigate = useNavigate();

	const { mutate } = useMutation({
		mutationFn: editGif,
		onSuccess: () => {
			toast.success('Gif updated');
			queryClient.invalidateQueries({ queryKey: ['oneGif'] });
		},
	});

	const { mutate: deleteMutate } = useMutation({
		mutationFn: deleteGif,
		onSuccess: () => {
			toast.success('Gif removed');
			queryClient.invalidateQueries({ queryKey: ['oneGif'] });
			queryClient.invalidateQueries({ queryKey: ['userGifs'] });
		},
	});

	const onSubmit = (data: InputsUpload) => {
		if (!_id) throw new Error('No id');

		mutate({ id: _id, data });
		closeModal();
	};

	const onDelete = () => {
		if (!_id) throw new Error('No id');

		deleteMutate(_id);

		navigate('/user');
	};

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
				<button onClick={onDelete}>
					<span>Delete</span>
					<RiDeleteBin2Fill />
				</button>
			</figure>
		</section>
	);
};
