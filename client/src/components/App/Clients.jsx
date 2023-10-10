import { clients } from '../../constantes/index';
import styles from '../../../style';

const Clients = () => (
	<section className={`${styles.flexCenter} my-4`}>
		<div className={`${styles.flexCenter} flex-wrap w-full`}>
			{clients.map((client) => (
				<div
					key={client.id}
					className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-2`}
				>
					<img
						src={client.logo}
						alt='client_logo'
						className='sm:w-[170px] w-[100px] object-contain'
					/>
				</div>
			))}
		</div>
	</section>
);

export default Clients;
