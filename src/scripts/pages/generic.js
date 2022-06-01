import { registerSearchEntries } from "../search";
export function genericScript(root, docname) {
    const el = Array.from(root.querySelectorAll("div.mw-headline-cont[id][data-name]"));
    // Init fuzzy search with headlines
    registerSearchEntries(el.map((element, id) => ({
        id,
        page: docname,
        name: element.dataset.name.trim(),
        element,
        alignment: "start",
    })));
}
export default { genericScript };
