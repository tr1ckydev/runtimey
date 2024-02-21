// @ts-nocheck
export const isBun: boolean = !!globalThis.Bun;
export const isDeno: boolean = !!globalThis.Deno;
export const isNode: boolean = globalThis.process?.versions?.node && !isBun;
export const isBrowser: boolean = globalThis.window && !isDeno;
export let currentRuntime: "bun" | "deno" | "node" | "browser" | "unknown";
switch (true) {
    case isBun: currentRuntime = "bun"; break;
    case isDeno: currentRuntime = "deno"; break;
    case isNode: currentRuntime = "node"; break;
    case isBrowser: currentRuntime = "browser"; break;
    default: currentRuntime = "unknown"; break;
}
export const runtimeValue = <T>(v: Partial<{ bun: T, deno: T, node: T, browser: T, default: T; }>): T | undefined => v[currentRuntime] ?? v.default;
export const isServiceWorker: boolean = !!globalThis.importScripts;