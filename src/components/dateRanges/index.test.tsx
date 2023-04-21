import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import DateRanges from '.';

test('renders audit text', () => {
  let start: Date | null = new Date();
  let end: Date | null = new Date();
  let show = true;
  const setStart = (val: Date | null) => (start = val);
  const setEnd = (val: Date | null) => (end = val);
  const close = () => (show = false);

  render(
    <DateRanges
      startDate={start}
      endDate={end}
      setStartDate={setStart}
      setEndDate={setEnd}
      close={close}
    />
  );
  const todayListItem = screen.getByText(/Today/i);
  const customRangeElement = screen.getByText(/Custom Range/i);

  expect(todayListItem).toBeInTheDocument();
  expect(customRangeElement).toBeInTheDocument();
});
