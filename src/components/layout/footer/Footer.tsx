
import Icon from '@/components/shared/Icon/Icon'
import s from './Footer.module.css'
import { footerData, socialFooter, footerPayData } from './FooterData'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className={s.footer}>
			<div className='container'>
				<div className={s.mainFooter}>
					<div className={s.footerLogo}>
						<Icon Iconheight='25px' Iconwidth='167' id='icon-logo' />
						<p>
							We have clothes that suits your style and which you’re proud to
							wear. From women to men.
						</p>
						<ul className={s.socialList}>
							{socialFooter.map((social, index) => (
								<li
									style={{
										background: social.isBlack ? '#000' : '#fff',
										border: !social.isBlack
											? '1px solid rgba(0, 0, 0, 0.2)'
											: 'none',
									}}
									key={index}
								>
									<Link href=''>
										<Icon
											Iconheight={social.height}
											Iconwidth={social.width}
											id={social.id}
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className={s.footerMenuListWrap}>
						{footerData.map(i => (
							<ul className={s.footerMenuList} key={i.id}>
								<p className={s.listTitle}>{i.title}</p>
								{i.links.map((link, index) => (
									<li key={index}>
										<Link href=''>{link}</Link>
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
				<div className={s.footerBottom}>
					<span>Shop.co © 2000-2023, All Rights Reserved</span>
					<ul className={s.footerPay}>
						{footerPayData.map((pay, index) => (
							<li key={index}>
								<Link href=''>
									<Icon
										Iconwidth={pay.width}
										Iconheight={pay.height}
										id={pay.id}
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}
