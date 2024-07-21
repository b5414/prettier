import {group, ifBreak, indent, join, line} from '../../document/builders.js';
import isNonEmptyArray from '../../utils/is-non-empty-array.js';
import {CommentCheckFlags, hasComment, identity} from '../utils/index.js';
import {printDeclareToken} from './misc.js';
import {getTypeParametersGroupId} from './type-parameters.js';

/**
 * @typedef {import("../../document/builders.js").Doc} Doc
 */

/*
- `TSInterfaceDeclaration`(TypeScript)
- `DeclareInterface`(flow)
- `InterfaceDeclaration`(flow)
- `InterfaceTypeAnnotation`(flow)
*/
function printInterface(path, options, print) {
	const {node} = path;
	/** @type {Doc[]} */
	const parts = [printDeclareToken(path), 'interface'];

	const partsGroup = [];
	const extendsParts = [];

	if (node.type !== 'InterfaceTypeAnnotation') {
		partsGroup.push('/* interface.js_1_90 */', print('id'), print('typeParameters'));
	}

	const shouldIndentOnlyHeritageClauses = node.typeParameters && !hasComment(node.typeParameters, CommentCheckFlags.Trailing | CommentCheckFlags.Line);

	if (isNonEmptyArray(node.extends)) {
		extendsParts.push(
			shouldIndentOnlyHeritageClauses
				? ifBreak('/* interface.js_1_89 */', line, {
						groupId: getTypeParametersGroupId(node.typeParameters),
					})
				: line,
			'extends ',
			(node.extends.length === 1 ? identity : indent)(join([',', line], path.map(print, 'extends'))),
		);
	}

	if (hasComment(node.id, CommentCheckFlags.Trailing) || isNonEmptyArray(node.extends)) {
		if (shouldIndentOnlyHeritageClauses) {
			parts.push(group([...partsGroup, indent(extendsParts)]));
		} else {
			parts.push(group(indent([...partsGroup, ...extendsParts])));
		}
	} else {
		parts.push(...partsGroup, ...extendsParts);
	}

	parts.push('/* interface.js_1_88 */', print('body'));

	return group(parts);
}

export {printInterface};
