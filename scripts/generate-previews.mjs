import { readFile, writeFile } from 'node:fs/promises';
const suppliedSymbol = await readFile(
  new URL('../brand/kade-symbol-white.svg', import.meta.url),
  'utf8'
);
const symbolArtwork = suppliedSymbol.match(/<svg[^>]*>([\s\S]*)<\/svg>/)[1];
const escape = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
const rect = (x, y, w, h, fill = '#fff', r = 14, stroke = '#dce3dd') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const text = (x, y, label, size = 20, color = '#1c2b24', weight = 400) =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-weight="${weight}">${escape(label)}</text>`;
const muted = (x, y, label, size = 17) => text(x, y, label, size, '#617168');
const button = (x, y, w, label, primary = true) =>
  rect(
    x,
    y,
    w,
    46,
    primary ? '#245746' : '#fff',
    10,
    primary ? '#245746' : '#d2ddd4'
  ) + text(x + 16, y + 29, label, 17, primary ? '#fff' : '#245746', 600);
const header = () =>
  rect(24, 22, 1152, 80) +
  rect(42, 40, 44, 44, '#245746', 12) +
  `<svg x="51" y="49" width="26" height="25.125" viewBox="0 0 208 201">${symbolArtwork}</svg>` +
  muted(101, 50, 'WILLOW & CO.', 13) +
  text(101, 77, 'Front register', 25, '#1c2b24', 600) +
  text(1000, 56, 'Maya · owner', 17, '#42584c', 500) +
  muted(1000, 79, 'Sample café', 14);
const dock = (active) =>
  rect(354, 783, 492, 60, '#f9fcfa', 20, '#fff') +
  ['Till', 'Kitchen', 'Orders', 'Manage']
    .map(
      (name, index) =>
        (name === active
          ? rect(366 + index * 119, 792, 112, 42, '#dcece1', 13, '#fff')
          : '') +
        text(
          390 + index * 119,
          819,
          name,
          17,
          name === active ? '#193f33' : '#42584c',
          600
        )
    )
    .join('');
const sidebar = (active) =>
  rect(24, 124, 205, 632, '#f9fcfa', 14, '#fff') +
  muted(43, 157, 'BUSINESS WORKSPACE', 12) +
  ['Overview', 'Close the day', 'Reports', 'Products & stock', 'Team & setup']
    .map(
      (name, index) =>
        (name === active
          ? rect(35, 178 + index * 63, 183, 50, '#dcece1', 10, '#fff')
          : '') +
        text(
          48,
          210 + index * 63,
          name,
          17,
          name === active ? '#193f33' : '#42584c',
          name === active ? 600 : 500
        )
    )
    .join('') +
  muted(43, 699, 'One shop.', 16) +
  muted(43, 724, 'A clearer day.', 16);
const metric = (x, y, w, label, value, note) =>
  rect(x, y, w, 128) +
  muted(x + 20, y + 29, label, 16) +
  text(x + 20, y + 74, value, 29, '#1c2b24', 650) +
  muted(x + 20, y + 103, note, 13);
const tableRow = (y, number, items, total) =>
  text(282, y, number, 17, '#245746', 600) +
  text(402, y, items, 17) +
  text(995, y, total, 17, '#1c2b24', 600) +
  `<path d="M280 ${y + 18}H1144" stroke="#e5ebe3"/>`;
const svg = (title, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="860" viewBox="0 0 1200 860" role="img" aria-label="${escape(title)}"><title>${escape(title)}</title><desc>Illustrative product layout based on Kade's current workspace. Fictional sample data, not a live customer account.</desc><g font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif">${rect(0, 0, 1200, 860, '#f1f3f1', 0, '#f1f3f1')}${header()}${body}</g></svg>\n`;
const overview =
  sidebar('Overview') +
  muted(257, 151, 'BUSINESS WORKSPACE / OVERVIEW', 13) +
  text(257, 190, 'Your business today', 32, '#1c2b24', 650) +
  muted(257, 223, 'The useful numbers, and the next thing to do.', 18) +
  button(816, 168, 176, 'Close the day') +
  button(1006, 168, 170, 'Sales report', false) +
  metric(
    257,
    254,
    288,
    'Gross completed sales',
    'KWD 103.500',
    'Today so far'
  ) +
  metric(561, 254, 288, 'Completed orders', '42', 'Cancelled orders excluded') +
  metric(865, 254, 311, 'Average order', 'KWD 2.464', 'Gross sales ÷ orders') +
  rect(257, 400, 444, 171) +
  text(280, 438, 'Today’s payments', 23, '#1c2b24', 600) +
  muted(280, 477, 'Cash') +
  text(550, 477, '36.000', 19, '#1c2b24', 600) +
  rect(280, 491, 396, 12, '#edf4ef', 6, '#edf4ef') +
  rect(280, 491, 138, 12, '#6e9879', 6, '#6e9879') +
  muted(280, 533, 'Card') +
  text(550, 533, '67.500', 19, '#1c2b24', 600) +
  rect(280, 544, 396, 12, '#edf4ef', 6, '#edf4ef') +
  rect(280, 544, 259, 12, '#245746', 6, '#245746') +
  rect(720, 400, 456, 171) +
  text(743, 438, 'Where sales came from', 23, '#1c2b24', 600) +
  muted(743, 477, 'Dine-in') +
  text(1017, 477, '48.000', 19, '#1c2b24', 600) +
  muted(743, 513, 'Takeaway') +
  text(1017, 513, '38.500', 19, '#1c2b24', 600) +
  muted(743, 549, 'Delivery') +
  text(1017, 549, '17.000', 19, '#1c2b24', 600) +
  rect(257, 593, 919, 163) +
  text(280, 630, 'Your next steps', 23, '#1c2b24', 600) +
  button(280, 662, 267, 'Review today’s sales', false) +
  button(564, 662, 266, 'Manage products', false) +
  button(847, 662, 305, 'Find staff & registers', false) +
  muted(281, 734, 'Completed sales use this device’s local calendar day.', 14) +
  dock('Manage');
const products = [
  ['Flat white', '1.750'],
  ['Iced vanilla latte', '2.250'],
  ['Americano', '1.400'],
  ['Almond croissant', '1.900'],
  ['Fresh orange juice', '1.800'],
  ['Banana bread', '1.650'],
];
const till =
  text(40, 146, 'Take an order', 29, '#1c2b24', 650) +
  button(634, 118, 169, 'Close register', false) +
  rect(24, 174, 778, 582) +
  rect(825, 124, 351, 632) +
  rect(43, 195, 740, 52, '#f5f7f4', 11) +
  muted(62, 228, 'Search products…', 19) +
  rect(43, 267, 88, 41, '#245746', 8, '#245746') +
  text(63, 294, 'All', 17, '#fff', 600) +
  text(152, 294, 'Coffee', 17, '#4d6556', 500) +
  text(249, 294, 'Bakery', 17, '#4d6556', 500) +
  text(43, 338, 'Coffee & bakery', 21, '#273f30', 600) +
  products
    .map(([name, price], i) => {
      const x = 43 + (i % 3) * 250,
        y = 363 + Math.floor(i / 3) * 156;
      return (
        rect(x, y, 237, 138, i % 2 ? '#fcfaf4' : '#f9fbf5', 12) +
        rect(
          x,
          y,
          237,
          4,
          i % 2 ? '#dec787' : '#b6c99e',
          2,
          i % 2 ? '#dec787' : '#b6c99e'
        ) +
        text(x + 15, y + 38, name, 18, '#253c2c', 600) +
        muted(x + 15, y + 111, `KWD ${price}`, 17)
      );
    })
    .join('') +
  muted(43, 719, 'Tap a product to add it to your order.', 16) +
  muted(849, 157, 'CURRENT ORDER', 12) +
  text(849, 193, 'Your order', 24, '#233b2b', 600) +
  text(849, 248, '2 × Flat white', 19, '#1c2b24', 600) +
  muted(849, 275, 'Oat milk · 0.250 extra', 15) +
  text(1013, 306, 'KWD 4.000', 19, '#294631', 600) +
  `<path d="M849 326H1152" stroke="#dce3dd"/>` +
  text(849, 361, '1 × Almond croissant', 18, '#1c2b24', 600) +
  text(1013, 397, 'KWD 1.900', 19, '#294631', 600) +
  muted(849, 465, 'Order type', 15) +
  rect(849, 483, 303, 46, '#f4f6f1', 10) +
  rect(854, 488, 93, 36, '#fff', 7, '#b6cbb1') +
  text(866, 512, 'Dine-in', 15, '#245746', 600) +
  text(959, 512, 'Takeaway', 15, '#556a4f') +
  text(1057, 512, 'Delivery', 15, '#556a4f') +
  muted(849, 566, 'Payment method', 15) +
  button(849, 583, 143, 'Cash', false) +
  button(1004, 583, 148, 'Card') +
  text(849, 669, 'Total', 23, '#243d2c', 600) +
  text(992, 669, 'KWD 5.900', 23, '#243d2c', 650) +
  button(849, 691, 303, 'Complete order') +
  dock('Till');
const ticket = (x, y, number, first, second, type) =>
  rect(x, y, 524, 189) +
  text(x + 22, y + 36, number, 24, '#294631', 650) +
  muted(x + 355, y + 35, type, 16) +
  text(x + 22, y + 79, first, 20, '#1c2b24', 600) +
  muted(x + 22, y + 109, second, 17) +
  button(x + 22, y + 126, 480, 'Mark ready');
const kitchen =
  text(40, 154, 'Kitchen', 32, '#1c2b24', 650) +
  muted(40, 187, 'Keep orders moving. One ticket at a time.', 18) +
  button(984, 128, 192, 'View daily log', false) +
  rect(24, 216, 565, 540, '#f8faf7') +
  rect(609, 216, 567, 540, '#f8faf7') +
  text(44, 256, 'Paid · 2', 23, '#1c2b24', 600) +
  text(629, 256, 'Ready · 1', 23, '#1c2b24', 600) +
  ticket(
    44,
    279,
    '#2418',
    '2 × Flat white',
    'Oat milk · 1 × Almond croissant',
    'Dine-in'
  ) +
  ticket(
    44,
    490,
    '#2419',
    '1 × Iced vanilla latte',
    '1 × Banana bread',
    'Takeaway'
  ) +
  rect(629, 279, 525, 187) +
  text(651, 315, '#2417', 24, '#294631', 650) +
  muted(984, 315, 'Takeaway', 16) +
  text(651, 358, '2 × Americano', 20, '#1c2b24', 600) +
  muted(651, 389, 'Ready for collection', 17) +
  rect(651, 412, 480, 34, '#edf4ef', 8) +
  text(672, 435, 'Ready', 16, '#245746', 600) +
  dock('Kitchen');
const daily = [81.5, 94.75, 90.5, 105, 116.25, 136.75, 103.5];
const reports =
  sidebar('Reports') +
  muted(257, 151, 'BUSINESS WORKSPACE / SALES REPORT', 13) +
  text(257, 190, 'Sales report', 32, '#1c2b24', 650) +
  muted(257, 220, 'Willow & Co. · Last 7 days · Sample data', 18) +
  button(904, 169, 132, 'CSV', false) +
  button(1051, 169, 125, 'Print / PDF', false) +
  metric(257, 249, 292, 'Gross sales', 'KWD 728.250', 'Completed orders only') +
  metric(565, 249, 292, 'Completed orders', '295', 'Average order: KWD 2.469') +
  metric(
    873,
    249,
    303,
    'Refunds in this period',
    'KWD 3.750',
    'Net after refunds: 724.500'
  ) +
  rect(257, 398, 919, 215) +
  text(280, 435, 'Daily sales', 23, '#1c2b24', 600) +
  muted(280, 460, 'Gross completed sales · KWD', 14) +
  daily
    .map(
      (value, index) =>
        rect(
          320 + index * 113,
          584 - value * 0.74,
          57,
          value * 0.74,
          '#527b61',
          5,
          '#527b61'
        ) +
        muted(
          323 + index * 113,
          600,
          ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index],
          13
        )
    )
    .join('') +
  rect(257, 635, 919, 121) +
  text(280, 669, 'Detailed orders', 23, '#1c2b24', 600) +
  tableRow(714, '#2418', 'Completed · Card · Dine-in', 'KWD 5.900') +
  muted(
    280,
    740,
    'Refunds may relate to older sales. Net after refunds is not profit.',
    13
  ) +
  dock('Manage');
const steps = [
  ['Count the cash', 'Count everything in the drawer.'],
  ['Approve the close', 'Owner or manager enters a PIN.'],
  ['Review the result', 'See the count after approval.'],
  ['Save your report', 'Review the day’s sales and cash.'],
];
const close =
  sidebar('Close the day') +
  muted(257, 151, 'BUSINESS WORKSPACE / CASHOUT', 13) +
  text(257, 190, 'Close the day', 32, '#1c2b24', 650) +
  muted(
    257,
    221,
    'Close each register shift, then review your daily report.',
    18
  ) +
  steps
    .map(
      ([title, note], i) =>
        rect(257 + i * 233, 250, 220, 148) +
        muted(274 + i * 233, 279, `STEP ${i + 1}`, 12) +
        text(274 + i * 233, 314, title, 19, '#1c2b24', 600) +
        muted(274 + i * 233, 346, note.split(' ').slice(0, 4).join(' '), 14) +
        muted(274 + i * 233, 367, note.split(' ').slice(4).join(' '), 14)
    )
    .join('') +
  rect(257, 422, 919, 216) +
  text(280, 459, 'Registers still open', 23, '#1c2b24', 600) +
  text(280, 506, 'Front register', 20, '#1c2b24', 600) +
  muted(280, 531, 'Maya · Opened today, 7:00 AM', 16) +
  button(921, 486, 231, 'Close this register') +
  `<path d="M280 551H1152" stroke="#dce3dd"/>` +
  text(280, 589, 'Patio register', 20, '#1c2b24', 600) +
  muted(280, 613, 'Use its assigned device to close this shift.', 16) +
  rect(257, 660, 447, 96) +
  text(280, 695, 'Review your daily report', 21, '#1c2b24', 600) +
  muted(280, 728, 'Sales, refunds, and closed-shift cash counts.', 14) +
  rect(722, 660, 454, 96) +
  text(746, 695, 'Check cash history', 21, '#1c2b24', 600) +
  muted(746, 728, 'Review previous register counts.', 14) +
  dock('Manage');
for (const [name, body] of Object.entries({
  overview,
  till,
  kitchen,
  reports,
  close,
})) {
  await writeFile(
    new URL(`../images/workspace-${name}.svg`, import.meta.url),
    svg(`Kade ${name} · sample interface`, body)
  );
}
console.log('Generated five lightweight sample workspace illustrations.');
