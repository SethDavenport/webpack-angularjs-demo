const DEFAULT_SHOW_TEXT = '+';
const DEFAULT_HIDE_TEXT = '-';
const DEFAULT_TOGGLE_WIDTH_PERCENT = 20;

export default class ExpanderEs6Controller {
  static $inject = ['$log'];
  constructor($log) {
    this.$log = $log;
  }

  $onInit() {
    this.showText = this.showText || DEFAULT_SHOW_TEXT;
    this.hideText = this.hideText || DEFAULT_HIDE_TEXT;
    this.expanded = this.expanded || false;
    this.toggleWidthPercent = this.toggleWidthPercent || DEFAULT_TOGGLE_WIDTH_PERCENT;

    this.toggleWidth = `${this.toggleWidthPercent}%`;
    this.headerContentWidth = `${100 - this.toggleWidthPercent}%`;

    this.$log.info('ES6+ Expander Initialized');
  }

  toggle() {
    this.expanded = !this.expanded;
    if (this.expanded && this.onExpand) {
      this.onExpand();
    }

    if (!this.expanded && this.onCollapse) {
      this.onCollapse();
    }
  }

  getToggleText() {
    return this.expanded ?
      this.hideText :
      this.showText;
  }

  isExpanded() {
    return this.expanded;
  }
}
