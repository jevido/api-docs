<script>
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	} = $props();
</script>

<div
	bind:this={ref}
	data-slot="input-otp-group"
	class={cn("flex items-center", className)}
	{...restProps}
>
	{@render children?.()}
</div>