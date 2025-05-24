
import Brands from '../brands/Brands'
import Title from '../shared/Title/Title'
import Button from '../ui/button/Button'
import s from './Hero.module.css'


export default function Hero() {
	return (
		<>
		<div className={s.hero}>
			<div className='container'>
				<div className={s.content}>
					<Title style={{ maxWidth: '577px', lineHeight: '100%' }} size='64px'>
						FIND CLOTHES THAT MATCHES YOUR STYLE
					</Title>
					<p className={s.desc}>
						Browse through our diverse range of meticulously crafted garments,
						designed to bring out your individuality and cater to your sense of
						style.
					</p>
					<Button btnWidth='210px' btnHeight='52px' variant='black'>
						Shop Now
					</Button>
					<ul className={s.heroQuality}>
						<li>
							<p>200+</p>
							<span>International Brands</span>
						</li>
						<li>
							<p>2,000+</p>
							<span>High-Quality Products</span>
						</li>
						<li>
							<p>30,000+</p>
							<span>Happy Customers</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<Brands/>
		</>
	)
}
