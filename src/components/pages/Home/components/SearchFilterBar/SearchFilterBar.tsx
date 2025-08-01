'use client';

import { LocationInput } from './components/LocationInput/LocationInput';
import { SkillAutocomplete } from './components/SkillAutocomplete/SkillAutocomplete';
import { StyledRoot } from './styles';

export function SearchFilterBar() {
	return (
		<StyledRoot>
			<SkillAutocomplete />
			<LocationInput />
		</StyledRoot>
	);
}
