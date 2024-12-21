# project-starter

A starter template for projects that doesn't make you worry about maintaining dependencies and frameworks on the long run. It uses modern JavaScript features and Web Components. Each component or functionality is a separate file that can be imported if needed or commented out if not.

## Features

- Tweakpane for GUI controls
- PrismJS for code highlighting
- md-block for including markdown files
- A fork of Code sandbox web component from [Chris Ferdinandi](https://github.com/cferdinandi) for running code snippets. My fork adds the possibility to fetch a file from a URL and run it in the sandbox, by just adding an attribute `src="css/component.css"`. My idea is to use this to keep the code snippets in a separate file and include them on page load. 
- Basic custom Reactive State Management Using Proxy, storing values in Local storage and syncing to Tweakpane
- Tailwind CSS for styling
- Web components for modularity

## Setup build tools

This starter template is meant to leverage native ES modules import and web components. Therefore it is possible to start working without any build tools.

However, if you need to use build tools, add npm-installed dependencies, add hot-reloading, etc, Vite is the recommended build tool.

Install Vite

```bash
npm install -D vite
```

Run Vite

```bash
npx vite
```

## Libraries

- Tweakpane
- PrismJS
- md-block
- Code sandbox
- Tailwind CSS

### Resources

- [@celine/celine](https://maxbo.me/celine/)
- [MaxwellBo/celine](https://github.com/MaxwellBo/celine)
- [leaverou/md-block](https://github.com/leaverou/md-block)
- [cferdinandi/code-sandbox](https://gist.github.com/cferdinandi/df9c95ae5f5ebcddf2ab85bb2805ff07)
- [mattdesl/canvas-sketch](https://github.com/mattdesl/canvas-sketch)
