import styles from '../../../style';
import imgHome from '../../assets/img/imgPixeled/logoblack.svg';
import imgBehind from '../../assets/svg/circ_mor-ros.svg';
import GetStarted from './GetStarted';

const Hero = () => {
	return (
		<section
			id='home'
			className={`flex md:flex-row flex-col ${styles.paddingY}`}
		>
			<div
				className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  mt-1`}
			>
				<div className='flex flex-row justify-between items-center w-full'>
					<h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]'>
						Impresión gran
						<br className='sm:block hidden' />{' '}
						<span className='text-gradient'>formato.</span>{' '}
					</h1>
					<div className='ss:flex hidden md:mr-4 mr-0'>
						<GetStarted />
					</div>
				</div>

				<h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-gradient2 ss:leading-[100.8px] leading-[75px] w-full'>
					Diseños que dan vida a las ideas.
				</h1>
				<p className={`${styles.paragraph} max-w-[370px] mt-10`}>
					Armonizamos elementos visuales, texto y emociones para una impresión
					duradera, elevando marcas a través de un diseño reflexivo.
				</p>
			</div>

			<div
				className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
			>
				<img
					src={imgBehind}
					alt='Back Image'
					className='absolute inset-20 mb-14 ml-30 w-full h-full'
				/>
				<img
					src={imgHome}
					alt='pixLogo'
					className='w-[75%] h-[80%] relative z-[5] mt-10'
				/>

				{/* gradient start */}
				<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
				<div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
				<div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
				{/* gradient end */}
			</div>

			<div className={`ss:hidden ${styles.flexCenter}`}>
				<GetStarted />
			</div>
		</section>
	);
};

export default Hero;
