import Inject from '../utils/inject.decorator';

const DEFAULT_SHOW_TEXT = '+';
const DEFAULT_HIDE_TEXT = '-';
const DEFAULT_TOGGLE_WIDTH_PERCENT = 20;

@Inject('$log')
export default class ExpanderTsController {
  public showText: string;
  public hideText: string;
  public expanded: boolean;
  public toggleWidthPercent: number;
  public onExpand: Function | undefined;
  public onCollapse: Function | undefined;

  private toggleWidth: string;
  private headerContentWidth: string;

  constructor(private $log: ng.ILogService) {}

  $onInit(): void {
    this.showText = this.showText || DEFAULT_SHOW_TEXT;
    this.hideText = this.hideText || DEFAULT_HIDE_TEXT;
    this.expanded = this.expanded || false;
    this.toggleWidthPercent = this.toggleWidthPercent || DEFAULT_TOGGLE_WIDTH_PERCENT;

    this.toggleWidth = `${this.toggleWidthPercent}%`;
    this.headerContentWidth = `${100 - this.toggleWidthPercent}%`;

    this.$log.info('Typescript Expander Initialized');
  }

  toggle(): void {
    this.expanded = !this.expanded;
    if (this.expanded && this.onExpand) {
      this.onExpand();
    }

    if (!this.expanded && this.onCollapse) {
      this.onCollapse();
    }
  }

  getToggleText(): string {
    return this.expanded ?
      this.hideText :
      this.showText;
  }

  isExpanded(): boolean {
    return this.expanded;
  }
}
