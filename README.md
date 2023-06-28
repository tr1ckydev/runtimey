# runtimey
Easily detect which JavaScript runtime is being used. [Bun](https://bun.sh/), [Deno](https://deno.com/runtime) or [NodeJS](https://nodejs.org/).

Useful for packages or scripts to customize functionality of their code depending on the runtime being used.



## Usage

*index.js*

```javascript
import { getCurrentRuntime } from "runtimey";
console.log(getCurrentRuntime());
```

*shell*

```bash
$ bun index.js && deno run index.js && node index.js
bun
deno
node
```



## Documentation

- ### `isBun()`

  Returns `true` if the Bun runtime is being used.

- ### `isDeno()`

  Returns `true` if the Deno runtime is being used.

- ### `isNode()`

  Returns `true` if the NodeJS runtime is being used.

- ### `getCurrentRuntime()`: `"bun"` | `"deno"` | `"node"`

  Returns the name of the current runtime being used.

- ### `getCurrentRuntimeVersion()`

  Returns the version of the current runtime being used.

- ### `dynamicValue<T>({ bun: T, deno: T, node: T })`: `T`

  Returns the value according to the runtime being used.
  
  *index.js*
  
  ```javascript
  import { dynamicValue } from "runtimey";
  const val = dynamicValue({ bun: "RUNTIME_BUN", deno: "RUNTIME_DENO", node: "RUNTIME_NODE" });
  console.log("Current runtime: " + val);
  ```
  
  shell
  
  ```bash
  $ bun index.js && deno run index.js && node index.js
  Current runtime: RUNTIME_BUN
  Current runtime: RUNTIME_DENO
  Current runtime: RUNTIME_NODE
  ```
  
  

## License

This repository uses MIT License. See [LICENSE](https://github.com/tr1ckydev/runtimey/blob/main/LICENSE) for full license text.
