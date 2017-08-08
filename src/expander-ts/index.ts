import ExpanderTsController from './expander-ts.controller';
import './expander-ts.scss';
const template = require('./expander-ts.html');

const ExpanderTsComponent: ng.IComponentOptions = {
  template,
  controller: ExpanderTsController,
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

export default ExpanderTsComponent;
