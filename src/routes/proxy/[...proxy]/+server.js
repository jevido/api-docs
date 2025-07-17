import { error } from '@sveltejs/kit';

export async function GET({ params }) {
	const targetUrl = params.proxy;

	if (!targetUrl) {
		throw error(400, 'Missing `url` query parameter');
	}

	if (!/^https?:\/\//.test(targetUrl)) {
		throw error(400, 'Only absolute http(s) URLs are allowed');
	}

	try {
		const response = await fetch(targetUrl);

		if (!response.ok) {
			throw error(response.status, `Upstream error: ${response.statusText}`);
		}

		const contentType = response.headers.get('content-type') || 'application/octet-stream';

		return new Response(await response.body, {
			status: response.status,
			headers: {
				'content-type': contentType
				// You may copy other headers if needed
			}
		});
	} catch (err) {
		console.error('Proxy error:', err);
		throw error(500, 'Failed to fetch target URL');
	}
}
