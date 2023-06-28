export const isBun = () => !!globalThis.Bun;
export const isDeno = () => !!globalThis.Deno;
export const isNode = () => !globalThis.Bun && !globalThis.Deno;
export const getCurrentRuntime = () => isBun() ? "bun" : isDeno() ? "deno" : "node";
export function getCurrentRuntimeVersion() {
    switch (getCurrentRuntime()) {
        case "bun": return globalThis.Bun.version;
        case "deno": return globalThis.Deno.version.deno;
        case "node": return globalThis.process.version.substring(1);
    }
}
export const dynamicValue = v => v[getCurrentRuntime()];