import { ChangeEvent, useRef, useState } from 'react';
import { LoggedButton } from '../../components/LoggedButton/LoggedButton';
import styles from './uploadPage.module.scss';

export const UploadPage = () => {
	const [fileName, setFileName] = useState<string>('Upload a gif');

	const inputFile: any = useRef();

	const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		const selectedFiles = files as FileList;
		setFileName(selectedFiles?.[0].name);
	};

	const handleClick = () => {
		inputFile.current.click();
	};

	return (
		<main className={styles.uploadPage}>
			<nav className={styles.nav}>
				<h1>DAGIFS</h1>
				<LoggedButton />
			</nav>
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
						className={styles.inputText}
						type='text'
						placeholder='Enter a GIF URL'
					/>
				</div>
			</section>
		</main>
	);
};
