# runtimey
Easily detect which JavaScript runtime is being used. [Bun](https://bun.sh/), [Deno](https://deno.com/runtime), [Node.JS](https://nodejs.org/) or browser.

Useful for packages or scripts to customize functionality of their code depending on the runtime being executed.



## Usage

*index.js*

```javascript
import { currentRuntime } from "runtimey";
console.log(currentRuntime);
```

*shell*

```bash
$ bun index.js && deno run index.js && node index.js
bun
deno
node
```



## Documentation

- ### `isBun`

  `true` if the Bun runtime is being used.

- ### `isDeno`

  `true` if the Deno runtime is being used.

- ### `isNode`

  `true` if the Node.JS runtime is being used.

- ### `isBrowser`

  `true` if running inside a browser.

- ### `currentRuntime`: `"bun"` | `"deno"` | `"node"` | `"browser"` | `"unknown"`

  The name of the current runtime being used.

- ### `runtimeValue({ bun, deno, node, browser, default })`

  Returns the value according to the runtime being used.
  
  *index.js*
  
  ```javascript
  import { runtimeValue } from "runtimey";
  const val = runtimeValue({ bun: "RUNTIME_BUN", deno: "RUNTIME_DENO", node: "RUNTIME_NODE" });
  console.log("Current runtime:", val);
  ```
  
  *shell*
  
  ```bash
  $ bun index.js && deno run index.js && node index.js
  Current runtime: RUNTIME_BUN
  Current runtime: RUNTIME_DENO
  Current runtime: RUNTIME_NODE
  ```
  
- ### `isServiceWorker`

  `true` if running in a worker environment.



## License

This repository uses MIT License. See [LICENSE](https://github.com/tr1ckydev/runtimey/blob/main/LICENSE) for full license text.
