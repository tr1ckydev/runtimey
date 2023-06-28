export declare function isBun(): boolean;
export declare function isDeno(): boolean;
export declare function isNode(): boolean;
export declare function getCurrentRuntime(): "bun" | "deno" | "node";
export declare function getCurrentRuntimeVersion(): string;
export declare function dynamicValue<T>(values: { bun: T, deno: T, node: T; }): T;