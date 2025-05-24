'use client'
import Icon from '@/components/shared/Icon/Icon'
import Input from '@/components/ui/input/Input'
import useMobile from '@/hooks/useMobile'
import Link from 'next/link'
import s from './Header.module.css'
export default function Header() {
	const { isMobile } = useMobile()
	return (
		<header className={s.header}>
			<div className={s.headerTop}>
				<div className={s.headerTopContent}>
					<p>
						Sign up and get 20% off to your first order.
						<Link href=''>Sign Up Now</Link>
					</p>
					<button>
						<Icon
							className='closeIcon'
							Iconheight='24px'
							Iconwidth='24px'
							id='icon-close'
						/>
					</button>
				</div>
			</div>
			<div className='container'>
				<div className={`flex gap-5 items-center mt-3 mb-3 ${s.headerMain}`}>
					<div className='flex gap-4'>
						{isMobile && (
							<button>
								<Icon Iconheight='24px' Iconwidth='24px' id='burger-btn' />
							</button>
						)}

						<Link href='/'>
							<Icon Iconheight='25px' Iconwidth='160px' id='icon-logo' />
						</Link>
					</div>
					<ul className='gap-3'>
						<li className='flex items-center'>
							<Link href=''>Shop</Link>
							<button className='ml-[4px] cursor-pointer'>
								<Icon Iconwidth='16px' Iconheight='16px' id='icon-arrow-down' />
							</button>
						</li>
						<li>
							<Link href=''>On Sale</Link>
						</li>
						<li>
							<Link href=''>New Arrivals</Link>
						</li>
						<li>
							<Link href=''>Brands</Link>
						</li>
					</ul>
					<Input
						inputPlaceholder='Search for products...'
						inputHeight='48px'
						inputWidth='577px'
						inputBackground='#f0f0f0'
					>
						<Icon
							className={s.searchIcon}
							Iconheight='24px'
							Iconwidth='24px'
							id='icon-search'
						/>
					</Input>
					<div className={`flex items-center gap-[14px] ${s.headerMenu}`}>
						{isMobile && (
							<Icon
								className={s.searchIconMobile}
								Iconheight='24px'
								Iconwidth='24px'
								id='icon-search-mobile'
							/>
						)}
						<Link href='/cart'>
							<Icon
								Iconheight='24px'
								Iconwidth='24px'
								id='icon-bucket-header'
							/>
						</Link>
						<Link href='/user'>
							<Icon Iconheight='24px' Iconwidth='24px' id='icon-user' />
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
