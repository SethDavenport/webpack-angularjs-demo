import template from './expander-rubyish.haml';
import { ExpanderRubyishController } from './expander-rubyish.controller';
import './expander-rubyish.sass';

export ExpanderRubyishComponent =
  template: template
  controller: ExpanderRubyishController
  bindings:
    showText: '@?'
    hideText: '@?'
    toggleWidthPercent: '@?'
    expanded: '<?'
    onExpand: '&?'
    onCollapse: '&?'
  transclude:
    header: '?expanderHeader'
    body: 'expanderBody'
