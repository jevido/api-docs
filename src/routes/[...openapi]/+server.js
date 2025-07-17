import { ScalarApiReference } from '@scalar/sveltekit';

export const GET = ({ params }) => {
	const render = ScalarApiReference({
		url: params.openapi
	});

	return render();
};
