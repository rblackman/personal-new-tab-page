export type IconType =
	| 'ap'
	| 'ars'
	| 'aruba'
	| 'att'
	| 'auvik'
	| 'azure'
	| 'cohesity'
	| 'devops'
	| 'fb'
	| 'jira'
	| 'mtdorg'
	| 'mtdweb'
	| 'ng'
	| 'ninja'
	| 'office'
	| 'paycom'
	| 'pocket'
	| 'polygon'
	| 'reddit'
	| 'sc'
	| 'verge'
	| 'verizon'
	| 'wirecutter'
	| 'ynab';

export type SubLinkItem = {
	href: string;
	text: string;
};

export type LinkListLink = {
	text: string;
	href: string;
	icon: IconType;
	subLinks?: SubLinkItem[];
};

type LinkListType = {
	title: string;
	links: LinkListLink[];
};

export default LinkListType;
