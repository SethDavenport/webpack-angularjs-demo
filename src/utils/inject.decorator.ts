/**
 * Convenience function for setting $inject on a class.
 */
export default function Inject(...injectableNames: string[]): ClassDecorator {
  return function decorate(constructor: Function): void {
    constructor.$inject = injectableNames;
  }
}
