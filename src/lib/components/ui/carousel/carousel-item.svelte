<script>
	import { getEmblaContext } from "./context.js";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	} = $props();

	const emblaCtx = getEmblaContext("<Carousel.Item/>");
</script>

<div
	bind:this={ref}
	data-slot="carousel-item"
	role="group"
	aria-roledescription="slide"
	class={cn(
		"min-w-0 shrink-0 grow-0 basis-full",
		emblaCtx.orientation === "horizontal" ? "pl-4" : "pt-4",
		className
	)}
	data-embla-slide=""
	{...restProps}
>
	{@render children?.()}
</div>