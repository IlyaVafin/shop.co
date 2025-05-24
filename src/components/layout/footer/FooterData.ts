interface IfooterMenu {
	id: number
	title: string
	links: string[]
}

interface IsocialFooter {
	id: string
	width?: string
	height?: string
	isBlack?: boolean
}

export const footerData: IfooterMenu[] = [
	{
		id: 1,
		title: 'Company',
		links: ['About', 'Features', 'Works', 'Career'],
	},
	{
		id: 2,
		title: 'Help',
		links: [
			'Customer Support',
			'Delivery Details',
			'Terms & Conditions',
			'Privacy Policy',
		],
	},
	{
		id: 3,
		title: 'FAQ',
		links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
	},
	{
		id: 4,
		title: 'Resources',
		links: [
			'Free eBooks',
			'Development Tutorial',
			'How to - Blog',
			'Youtube Playlist',
		],
	},
]

export const socialFooter: IsocialFooter[] = [
	{
		width: '12px',
		height: '10px',
		id: 'icon-twitter',
		isBlack: false,
	},
	{
		width: '8px',
		height: '13px',
		id: 'icon-facebook',
		isBlack: true,
	},
	{
		width: '14px',
		height: '14px',
		id: 'icon-instagram',
		isBlack: false,
	},
	{
		width: '14px',
		height: '13px',
		id: 'icon-github',
		isBlack: false,
	},
]

export const footerPayData: Pick<IsocialFooter, 'id' | 'height' | 'width'>[] = [
	{
		id: 'icon-visa',
		width: '34px',
		height: '12px'
	},
	{
		id: 'icon-mastercard',
		width: '26px',
		height: '16px'
	},
	{
		id: 'icon-paypal',
		width: '35px',
		height: '10px'
	},
	{
		id: 'icon-apple-pay',
		width: '28px',
		height: '12px'
	},
	{
		id: 'icon-google-pay',
		width: '29px',
		height: '13px'
	},
]
