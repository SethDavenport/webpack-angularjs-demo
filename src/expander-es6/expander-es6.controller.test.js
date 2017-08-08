import ExpanderEs6Controller from './expander-es6.controller';

describe('ExpanderEs6 controller', () => {
  let controller;
  const mockLog = {
    info: () => null,
  };

  beforeEach(() => {
    spyOn(mockLog, 'info');

    controller = new ExpanderEs6Controller(mockLog);
    controller.$onInit();
  });

  it('logs when it has finished initialization', () => {
    expect(mockLog.info).toHaveBeenCalled();
  });

  it('has default show text', () => {
    expect(controller.getToggleText()).toEqual('+');
  });

  it('lets you use custom show/hide text', () => {
    controller.showText = 'Reveal excessive minuteae';
    controller.hideText = 'Hide inconsequential trivia';

    expect(controller.getToggleText()).toEqual('Reveal excessive minuteae');

    controller.toggle();
    expect(controller.getToggleText()).toEqual('Hide inconsequential trivia');
  });
});
