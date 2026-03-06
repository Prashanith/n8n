import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { StreamForgeV1 } from './V1/StreamForgeV1.node';
import { StreamForgeV2 } from './V2/StreamForgeV2.node';
import { StreamForgeV3 } from './V3/StreamForgeV3.node';

export class StreamForge extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'StreamForge HTTP Request',
			name: 'streamForgeHttpRequest',
			icon: { light: 'file:streamforge.svg', dark: 'file:streamforge.dark.svg' },
			group: ['output'],
			subtitle: '={{$parameter["requestMethod"] + ": " + $parameter["url"]}}',
			description: 'Makes an HTTP request to the StreamForge API',
			defaultVersion: 4.4,
			builderHint: {
				message:
					'Prefer dedicated integration nodes over StreamForge HTTP Request — customize as needed.',
			},
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new StreamForgeV1(baseDescription),
			2: new StreamForgeV2(baseDescription),
			3: new StreamForgeV3(baseDescription),
			4: new StreamForgeV3(baseDescription),
			4.1: new StreamForgeV3(baseDescription),
			4.2: new StreamForgeV3(baseDescription),
			4.3: new StreamForgeV3(baseDescription),
			4.4: new StreamForgeV3(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
