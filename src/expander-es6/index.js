import template from './expander-es6.html';
import ExpanderEs6Controller from './expander-es6.controller';
import './expander-es6.scss';

const ExpanderEs6Component = {
  template,
  controller: ExpanderEs6Controller,
  bindings: {
    showText: '@?',
    hideText: '@?',
    toggleWidthPercent: '@?',
    expanded: '<?',
    onExpand: '&?',
    onCollapse: '&?',
  },
  transclude: {
    header: '?expanderHeader',
    body: 'expanderBody',
  },
};

export default ExpanderEs6Component;
