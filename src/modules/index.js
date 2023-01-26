import { autoClick } from "./autoClick"

const fps = 30
// option: {
// 	autoClick: {
// 		perSec: number
// 	}
// }
function initialize(fn, option) {
	let perSec = option?.perSec
	if (!Number.isSafeInteger(perSec)) perSec = fps
	setInterval(fn, 1000 / perSec)
	if (typeof fn.onLoad === "function") fn.onLoad()
}
const modules = {
	autoClick: {
		fn: autoClick
	},
}
// option: {
// 	autoClick: {
// 		perSec: number
// 	}
// }
export function loadModules(option) {
	Object.entries(modules).forEach(([k, v]) =>
		initialize(v.fn, option[k])
	)
}