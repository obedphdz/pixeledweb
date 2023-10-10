import styles from '../../../style';
import logo from '../../assets/svg/pixecol.svg';
import { footerLinks, socialMedia } from '../../constantes/index';

const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div
			className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full mt-40`}
		>
			<div className='flex-[1] flex flex-col justify-start mr-10'>
				<img
					src={logo}
					alt='pixeled'
					className='w-[266px] h-[72.14px] object-contain mt-5 mr-60'
				/>
				<p className={`${styles.paragraph} mt-4 mr-36 max-w-[312px]`}>
					Una nueva forma de hacer los pagos fáciles, confiables y seguros.
				</p>
			</div>

			<div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 mr-58'>
				{footerLinks.map((footerlink) => (
					<div
						key={footerlink.title}
						className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
					>
						<h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
							{footerlink.title}
						</h4>
						<ul className='list-none mt-4'>
							{footerlink.links.map((link, index) => (
								<li
									key={link.name}
									className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
										index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
									}`}
								>
									{link.name}
								</li>
							))}
						</ul>
						<div className='flex flex-row md:mt-0 mt-6 bg-coffee-dark'>
							{socialMedia.map((social, index) => (
								<img
									key={social.id}
									src={social.icon}
									alt={social.id}
									className={`w-[21px] h-[21px] object-contain cursor-pointer ${
										index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
									}`}
									onClick={() => window.open(social.link)}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>

		<div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
			<p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-black'>
				Copyright Ⓒ 2023 Pixeled. All Rights Reserved.
			</p>
		</div>
	</section>
);

export default Footer;
