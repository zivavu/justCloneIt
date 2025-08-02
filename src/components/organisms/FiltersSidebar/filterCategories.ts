import { valueLabel } from '../SearchFilterBar/mockOptions';

export const workModes: valueLabel[] = [
	{
		value: 'remote',
		label: 'Remote',
	},
	{
		value: 'hybrid',
		label: 'Hybrid',
	},
	{
		value: 'office',
		label: 'Office',
	},
];
export const contractTypes: valueLabel[] = [
	{
		value: 'b2b',
		label: 'B2B',
	},
	{
		value: 'permanent',
		label: 'Permanent',
	},
	{
		value: 'internship',
		label: 'Internship',
	},
	{
		value: 'mandate_contract',
		label: 'Mandate contract',
	},
	{
		value: 'specific_task_contract',
		label: 'Specific-task contract',
	},
];

export const workTypes: valueLabel[] = [
	{
		value: 'full_time',
		label: 'Full-time',
	},
	{
		value: 'part_time',
		label: 'Part-time',
	},
	{
		value: 'practice_internship',
		label: 'Practice / Internship',
	},
	{
		value: 'freelance',
		label: 'Freelance',
	},
];

export const experienceLevels: valueLabel[] = [
	{
		value: 'junior',
		label: 'Junior',
	},
	{
		value: 'mid',
		label: 'Mid',
	},
	{
		value: 'senior',
		label: 'Senior',
	},
	{
		value: 'manager_c_level',
		label: 'Manager / C-level',
	},
];

export const sidebarFilters = [
	{
		value: 'work_mode',
		label: 'Work mode',
		options: workModes,
	},
	{
		value: 'contract_type',
		label: 'Contract type',
		options: contractTypes,
	},
	{
		value: 'work_type',
		label: 'Work type',
		options: workTypes,
	},
	{
		value: 'experience_level',
		label: 'Experience level',
		options: experienceLevels,
	},
];
