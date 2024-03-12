// Images
import steveJobs from '$lib/images/steve-jobs.png';
import deskSetup from '$lib/images/desk-setup.jpg';
import neoTokyo from '$lib/images/neo-tokyo.png';
import samAltman from '$lib/images/sam-altman.png';
import duggupLogo from '$lib/images/duggup-logo.png';
import betterUpLogo from '$lib/images/better-up.png';

// Types
import type { TimelineCheckpoints } from '$lib/containers/Timeline/Timeline.types';

export const timelineCheckpoints: TimelineCheckpoints = [
	{
		type: 'secondary',
		config: {
			date: 'Dec 2023',
			cardConfig: [
				{
					image: {
						src: steveJobs,
						alt: 'Steve Jobs'
					},
					description: 'No amount of technology can convert a bad story into a good story.'
				},
				{
					image: {
						src: samAltman,
						alt: 'Sam Altman'
					},
					description:
						"Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas. He also claims that the best ideas are the ones that seem bad but are actually good."
				}
			]
		}
	},
	{
		type: 'primary',
		config: {
			company: {
				name: 'Duggup',
				image: {
					src: duggupLogo,
					alt: 'Duggup'
				},
				location: 'San Francisco Bay Area',
				joiningDate: 'Nov 2023',
				role: 'Co-Founder and CEO',
				employmentType: 'Full-time · Remote'
			}
		}
	},
	{
		type: 'secondary',
		config: {
			date: 'April 2023',
			cardConfig: [
				{
					image: {
						src: deskSetup,
						alt: 'Desk Setup'
					},
					description: 'Startup Lesson I am reflecting. Don\'t build for the "average person".'
				},
				{
					image: {
						src: neoTokyo,
						alt: 'Neo Tokyo Map'
					},
					description: 'Your biggest regrets at 80 will be acts of omission.'
				}
			]
		}
	},
	{
		type: 'primary',
		config: {
			company: {
				name: 'BetterUp',
				image: {
					src: betterUpLogo,
					alt: 'BetterUp'
				},
				location: 'San Francisco Bay Area',
				joiningDate: 'Sep 2022',
				role: 'VP Engineering',
				employmentType: 'Full-time'
			}
		}
	}
];
