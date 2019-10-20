import { configure } from '@storybook/react';
import '../src/index.css';
import requireContext from 'require-context.macro';
// babel-plugin-macros defines a standard interface for libraries that want to use compile-time code
// transformation without requiring the user to add a babel plugin to their build system
// (other than babel-plugin-macros, which is ideally already in place).

// automatically import all files ending in *.stories.js
// configure(require.context('../src/stories', true, /\.stories\.js$/), module);

const req = requireContext('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
