DEFAULT_SHOW_TEXT = '+'
DEFAULT_HIDE_TEXT = '-'
DEFAULT_TOGGLE_WIDTH_PERCENT = 20

export class ExpanderRubyishController
  @$inject: ['$log']
  constructor: (@$log) ->

  $onInit: () =>
    @showText = @showText || DEFAULT_SHOW_TEXT
    @hideText = @hideText || DEFAULT_HIDE_TEXT
    @expanded = @expanded || false
    @toggleWidthPercent = @toggleWidthPercent || DEFAULT_TOGGLE_WIDTH_PERCENT
    @toggleWidth = "#{@toggleWidthPercent}%"
    @headerContentWidth = "#{100 - @toggleWidthPercent}%"
    @$log.info 'Rubyish Expander Initialized'

  toggle: () =>
    @expanded = !@expanded;
    @onExpand() if @expanded && @onExpand
    @onCollapse() if !@expanded && @onCollapse

  getToggleText: () => if @expanded then @hideText else @showText

  isExpanded: () => @expanded
