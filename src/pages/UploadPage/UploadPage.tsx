import { ChangeEvent, useRef, useState } from 'react';
import { LoggedButton } from '../../components/LoggedButton/LoggedButton';
import styles from './uploadPage.module.scss';
import { UploadForm } from '../../components/UploadForm/UploadForm';
import { useNavigate } from 'react-router-dom';

export const UploadPage = () => {
	const [fileName, setFileName] = useState<string>('Upload a gif');
	const [image, setImage] = useState<string | null>(null);
	const [currentFile, setCurrentFile] = useState<File | null>(null);
	const [showForm, setShowForm] = useState<boolean>(true);

	const navigate = useNavigate();

	const inputFile = useRef<HTMLInputElement>(null);

	const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		const selectedFiles = files as FileList;
		if (files) {
			setFileName(selectedFiles?.[0].name);
			setCurrentFile(selectedFiles?.[0]);
			setImage(URL.createObjectURL(files[0]));
			setShowForm(true);
		}
	};

	const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
		const regexUrl = new RegExp(/https?:\/\/[\w\-.]+\.\w{2,5}\/?\S*/);

		if (regexUrl.test(e.target.value)) {
			setImage(e.target.value);
			setShowForm(true);
		} else {
			console.log('url no valida');
		}
	};

	const handleClick = () => {
		if (!inputFile.current) {
			return;
		}
		inputFile.current.click();
	};

	const handleBack = () => {
		setShowForm(false);
		setImage(null);
		setFileName('Upload a gif');
		setCurrentFile(null);
	};

	return (
		<main className={styles.uploadPage}>
			<nav className={styles.nav}>
				<h1 onClick={() => navigate('/')}>DAGIFS</h1>
				<LoggedButton />
			</nav>
			{showForm && image ? (
				<UploadForm
					handleBack={handleBack}
					image={image}
					currentFile={currentFile}
				/>
			) : (
				<section className={styles.uploadContainer}>
					<h2 className={styles.title}>GIF Upload</h2>
					<p className={styles.textUpload}>
						Upload your collection to share everywhere else.
					</p>
					<div className={styles.uploadFile}>
						<div className={styles.gifIcon}>
							<span>GIF</span>
						</div>
						<p>{fileName}</p>
						<button className={styles.selectButton} onClick={handleClick}>
							Choose a file
						</button>
						<input
							ref={inputFile}
							onChange={handleFile}
							type='file'
							accept='.gif'
							hidden
						/>
					</div>
					<div className={styles.uploadFile}>
						<h4 className={styles.textUpload}>Any url</h4>
						<p>We support media URLs</p>
						<input
							onChange={handleUrl}
							className={styles.inputText}
							type='text'
							placeholder='Enter a GIF URL'
							// pattern='^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$'
						/>
					</div>
				</section>
			)}
		</main>
	);
};
