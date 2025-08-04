export interface valueLabel {
	value: string;
	label: string;
}

export const mockOptions: valueLabel[] = [
	{ label: 'Adobe Experience Manager', value: 'adobe-experience-manager' },
	{ label: 'JavaScript', value: 'javascript' },
	{ label: 'TypeScript', value: 'typescript' },
	{ label: 'Python', value: 'python' },
	{ label: 'Java', value: 'java' },
	{ label: 'C#', value: 'c#' },
	{ label: 'C++', value: 'c++' },
	{ label: 'React', value: 'react' },
	{ label: 'Angular', value: 'angular' },
	{ label: 'Vue.js', value: 'vue.js' },
	{ label: 'Node.js', value: 'node.js' },
	{ label: 'HTML', value: 'html' },
	{ label: 'CSS', value: 'css' },
	{ label: 'SQL', value: 'sql' },
	{ label: 'MongoDB', value: 'mongodb' },
	{ label: 'Docker', value: 'docker' },
	{ label: 'Kubernetes', value: 'kubernetes' },
	{ label: 'AWS', value: 'aws' },
	{ label: 'Azure', value: 'azure' },
	{ label: 'GCP', value: 'gcp' },
	{ label: 'Git', value: 'git' },
] as const;
