export const isUnderClass = (element: any, className: string): boolean =>
  element != null && (element.className == className || isUnderClass(element.parentElement, className));
