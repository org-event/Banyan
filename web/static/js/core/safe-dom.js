/** DOM helpers that avoid injecting untrusted strings via innerHTML. */

export function escHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

export function clearChildren(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

export function statusSpan(colorVar, text) {
  const span = document.createElement('span');
  span.style.color = colorVar;
  span.textContent = text;
  return span;
}

export function setStatus(el, colorVar, text) {
  if (!el) return;
  clearChildren(el);
  el.appendChild(statusSpan(colorVar, text));
}

/** @param {{ color: string, text: string }[]} lines */
export function setStatusLines(el, lines) {
  if (!el) return;
  clearChildren(el);
  lines.forEach((line, i) => {
    if (i > 0) el.appendChild(document.createElement('br'));
    el.appendChild(statusSpan(line.color, line.text));
  });
}

export function renderProgress(parent, idPrefix, label) {
  clearChildren(parent);
  const wrap = document.createElement('div');
  wrap.className = 'sp-progress';
  const bar = document.createElement('div');
  bar.className = 'sp-progress-bar';
  bar.id = `pb-${idPrefix}`;
  const txt = document.createElement('div');
  txt.className = 'sp-progress-text';
  txt.id = `pt-${idPrefix}`;
  txt.textContent = label;
  wrap.appendChild(bar);
  wrap.appendChild(txt);
  parent.appendChild(wrap);
  return { bar, txt };
}
