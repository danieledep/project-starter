# project-starter

A starter template for projects that doesn't make you worry about maintaining dependencies and frameworks on the long run. It uses modern JavaScript features and Web Components. Each component or functionality is a separate file that can be imported if needed or commented out if not. All external dependencies are included from CDN links.

## Features

- [Tweakpane](https://github.com/cocopon/tweakpane) for GUI controls
- [PrismJS](https://prismjs.com/) for code highlighting
- [md-block](https://github.com/leaverou/md-block) for importing and rendering markdown files on the client side using web components
- Basic custom Reactive State Management Using Proxy, storing values in Local storage and two-way data-binding with Tweakpane
- Automatic light/dark mode based on system preferences
- [Tailwind Play CDN](https://tailwindcss.com/docs/installation/play-cdn) for styling
- Web components for modularity
- A fork of [code-sandbox](https://gist.github.com/cferdinandi/df9c95ae5f5ebcddf2ab85bb2805ff07) web component from Chris Ferdinandi for displaying an interactive code sandbox for html, css and javascript, similar to what CodePen does. My fork adds the possibility to fetch a file from a URL and run it in the sandbox, by just adding an attribute `src="css/component.css"` to the web component. My idea is to use this to keep the code snippets in a separate file and include them on page load. This way, the code snippets can be updated without changing the main page. I've also added a `name` attribute to the web component, which makes only one open at the time, similar to the &lt;details&gt; element.

| Attribute | Description                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| `name`    | The name attribute to be attached to the &lt;details&gt; elements, which makes only one open at the time (Optional) |
| `src`     | The URL of the file to fetch and run in the sandbox. Can be on the same origin or a remote file (Optional)          |

## Setup build tools

This starter template is meant to leverage native ES modules imports and web components. Therefore it is possible to start working without any build tools.

However, if you need to use build tools, add npm-installed dependencies, add hot-reloading, etc, Vite is the recommended build tool.

Install Vite

```bash
npm install -D vite
```

Run Vite

```bash
npx vite
```

### Resources

- [Tweakpane](https://github.com/cocopon/tweakpane)
- [PrismJS](https://prismjs.com/)
- [Tailwind Play CDN](https://tailwindcss.com/docs/installation/play-cdn)
- [leaverou/md-block](https://github.com/leaverou/md-block)
- [cferdinandi/code-sandbox](https://gist.github.com/cferdinandi/df9c95ae5f5ebcddf2ab85bb2805ff07)
- [@celine/celine](https://maxbo.me/celine/)
- [MaxwellBo/celine](https://github.com/MaxwellBo/celine)
- [mattdesl/canvas-sketch](https://github.com/mattdesl/canvas-sketch)
- [File over app](https://stephango.com/file-over-app)
