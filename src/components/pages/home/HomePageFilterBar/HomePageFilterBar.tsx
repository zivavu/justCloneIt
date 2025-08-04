'use client';

import { LocationInput } from './components/LocationInput/LocationInput';
import { SkillAutocomplete } from './components/SkillAutocomplete/SkillAutocomplete';
import { TechnologiesFilterBar } from './components/TechnologiesFilterBar/TechnologiesFilterBar';
import { StyledRoot } from './styles';

export function HomePageFilterBar() {
	return (
		<StyledRoot>
			<SkillAutocomplete />
			<LocationInput />
			<TechnologiesFilterBar />
		</StyledRoot>
	);
}
