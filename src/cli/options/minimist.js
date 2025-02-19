import minimist from 'minimist';

const PLACEHOLDER = null;

/**
 * unspecified boolean flag without default value is parsed as `undefined` instead of `false`
 */
export default function minimistParse(args, options) {
	/* c8 ignore next */
	const boolean = options.boolean ?? [];
	/* c8 ignore next */
	const defaults = options.default ?? {};

	const booleanWithoutDefault = boolean.filter((key) => !(key in defaults));
	const newDefaults = {
		...defaults,
		...Object.fromEntries(booleanWithoutDefault.map((key) => [key, PLACEHOLDER])),
	};

	const parsed = minimist(args, {...options, default: newDefaults});

	return Object.fromEntries(Object.entries(parsed).filter(([, value]) => value !== PLACEHOLDER));
}
