import type { Image } from '$lib/common/types';

export interface SecondaryCheckpointConfig {
	date: string;
	cardConfig: {
		image: Image;
		description: string;
	}[];
}

export interface PrimaryCheckpointConfig {
	company: {
		name: string;
		image: Image;
		location: string;
		joiningDate: string;
		role: string;
		employmentType: string;
	};
}

interface TimelinePrimaryCheckpoint {
	type: 'primary';
	config: PrimaryCheckpointConfig;
}

interface TimelineSecondaryCheckpoint {
	type: 'secondary';
	config: SecondaryCheckpointConfig;
}

export type TimelineCheckpoints = (TimelinePrimaryCheckpoint | TimelineSecondaryCheckpoint)[];
