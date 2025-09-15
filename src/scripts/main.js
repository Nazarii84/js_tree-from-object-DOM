'use strict';

export function createTree(element, data) {
  if (!(element instanceof Element)) {
    return element;
  }

  const ul = document.createElement('ul');

  const keys =
    typeof data === 'object' && data !== null ? Object.keys(data) : [];

  for (const key of keys) {
    const li = document.createElement('li');

    li.textContent = key;

    const value = data[key];

    if (
      typeof value === 'object' &&
      value !== null &&
      Object.keys(value).length > 0
    ) {
      createTree(li, value);
    }

    ul.appendChild(li);
  }

  if (element.tagName === 'LI') {
    element.appendChild(ul);
  } else {
    element.replaceChildren(ul);
  }

  return element;
}
