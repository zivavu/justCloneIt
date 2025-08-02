'use client';

import { LocationInput } from './components/LocationInput/LocationInput';
import { SkillAutocomplete } from './components/SkillAutocomplete/SkillAutocomplete';
import { TechnologiesFilterBar } from './components/TechnologiesFilterBar/TechnologiesFilterBar';
import { StyledRoot } from './style';

export function SearchFilterBar() {
	return (
		<StyledRoot>
			<SkillAutocomplete />
			<LocationInput />
			<TechnologiesFilterBar />
		</StyledRoot>
	);
}
