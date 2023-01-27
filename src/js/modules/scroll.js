/**
 * 1. Dependencies
 *
 * This section can pull in mixins, other modules, helpers, etc
 *
 * 2. Configuration
 *
 * This section defines default options for this module.
 * For settings, the order is as follows (ordered highest priority to lowest):
 *
 * Namespace - data-[namespace] key for grabbing inline options
 *
 * - data-[namespace]-key attributes on the node
 * - data-[namespace] attribute on the node
 * - user passed in settings (into the factory function)
 * - default settings
 *
 * 3. Module
 *
 * This section defines the code for your module.
 * It should always be scoped to one node.
 *
 * 4. Factory function
 *
 * This section defines the default exported function for your module.
 * This code should new up an instance of your module for each node that will consume it.
 */

// 1. Dependencies
import $ from 'jquery';
import { nodeConfig } from '@/mixins';

// 2. Configuration
const NAMESPACE = 'scroll';
const DEFAULT_SELECTOR = 'body';
const DEFAULT_SETTINGS = {
};

// 3. Module
class Scroll {
	constructor(node, config) {
		this.$node = $(node);
		this.config = config;
	}

	onScroll(event) {
		const textDimensions = $('.text_block_inner')[0].getBoundingClientRect();
		const textImageDimensions = $('.text_image_block_inner')[0].getBoundingClientRect();

		if (textDimensions.top < $(window).height() / 1.25) {
			$('.text_block_inner').addClass('show');
		} else {
			$('.text_block_inner').removeClass('show');
		}

		if (textImageDimensions.top < $(window).height() / 1.5) {
			$('.text_image_block_inner').addClass('show');
		} else {
			$('.text_image_block_inner').removeClass('show');
		}

		if ($(window).scrollTop() > 0) {
			$('.header').addClass('scrolling');
		} else {
			$('.header').removeClass('scrolling');
		}
	}

	bindUI() {
		window.addEventListener('scroll', this.onScroll.bind(this));
	}

	init() {
		this.bindUI();
	}
}

// 4. Factory Function
export default function factory(selector = DEFAULT_SELECTOR, settings = {}) {
	let listNode = document.querySelectorAll(selector);

	if (!listNode.length) return;

	return Array.from(listNode).map((node) => {
		let config = nodeConfig(node, NAMESPACE, settings, DEFAULT_SETTINGS);
		let module = new Scroll(node, config);

		module.init();

		return module;
	});
}