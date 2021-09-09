import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Category from '../components/Category';

describe('tests for category UI component', () => {
  const name = 'categorya';
  const mockSubmit = jest.fn();
  const { queryAllByText } = render(
    <>
      <BrowserRouter>
        <Category name={name} handleSubmit={() => mockSubmit()} />
      </BrowserRouter>
      ,
    </>,
  );
  test('should have categories and see-questions link', () => {
    queryAllByText(name);
    queryAllByText('See questions');
    expect(screen.getByText('See questions').closest('a'))
      .toHaveAttribute('href', `/categories/${name}`);
  });

  fireEvent.click(screen.getByText('See questions').closest('a'));
  expect(mockSubmit).toHaveBeenCalledTimes(1);
});
