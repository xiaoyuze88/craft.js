export const getDOMPadding = (dom: HTMLElement) => {
  const computedStyle = window.getComputedStyle(dom);
  return {
    left: parseInt(computedStyle.paddingLeft || '0'),
    right: parseInt(computedStyle.paddingRight || '0'),
    bottom: parseInt(computedStyle.paddingTop || '0'),
    top: parseInt(computedStyle.paddingBottom || '0'),
  };
};

export const getDOMMargin = (dom: HTMLElement) => {
  const computedStyle = window.getComputedStyle(dom);
  return {
    left: parseInt(computedStyle.marginLeft || '0'),
    right: parseInt(computedStyle.marginRight || '0'),
    bottom: parseInt(computedStyle.marginTop || '0'),
    top: parseInt(computedStyle.marginBottom || '0'),
  };
};

export const getDOMInfo = (dom: HTMLElement) => {
  const {
    x,
    y,
    top,
    left,
    bottom,
    right,
    width,
    height,
  } = dom.getBoundingClientRect() as DOMRect;
  const margin = getDOMMargin(dom),
    padding = getDOMPadding(dom);

  return {
    x: Math.round(x),
    y: Math.round(y),
    top: Math.round(top),
    left: Math.round(left),
    bottom: Math.round(bottom),
    right: Math.round(right),
    width: Math.round(width),
    height: Math.round(height),
    outerWidth: Math.round(width + margin.left + margin.right),
    outerHeight: Math.round(height + margin.top + margin.bottom),
    margin,
    padding,
    inFlow: dom && dom.parentElement && !!styleInFlow(dom, dom.parentElement),
  };
};

export const getComputedStyle = (dom: HTMLElement) => {
  return window.getComputedStyle(dom);
};

export const styleInFlow = (el: HTMLElement, parent: HTMLElement) => {
  const style: any = getComputedStyle(el);
  const parentStyle: any = getComputedStyle(parent);

  if (style.overflow && style.overflow !== 'visible') return;
  if (parentStyle.float !== 'none') return;
  if (
    parent &&
    parentStyle.display === 'flex' &&
    parentStyle['flex-direction'] !== 'column'
  )
    return;
  switch (style.position) {
    case 'static':
    case 'relative':
      break;
    default:
      return;
  }
  switch (el.tagName) {
    case 'TR':
    case 'TBODY':
    case 'THEAD':
    case 'TFOOT':
      return true;
  }
  switch (style.display) {
    case 'block':
    case 'list-item':
    case 'table':
    case 'flex':
      return true;
  }
  return;
};
