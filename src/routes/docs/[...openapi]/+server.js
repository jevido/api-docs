import { ScalarApiReference } from '@scalar/sveltekit';

export const GET = ({ params }) => {
	const render = ScalarApiReference({
		url: '/proxy/' + params.openapi
	});

	return render();
};
