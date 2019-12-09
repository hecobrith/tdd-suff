/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

const numItems = [{ id: 0 }, { id: 1, name: 'hector' }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },
  { id: 6 }, { id: 7 }, { id: 8 }, { id: 9, name: 'juan' }, { id: 10 }, { id: 11 }];

// MATCHERS

// Here we expet the lenght of some array to be 12
test('Number to be 12', () => {
  expect(numItems.length).toBe(12);
});

// Here we expet the lenght to be a grater or equal to some number
// We need to know what we expect from an object
test('Number of items to be grater than 12', () => {
  expect(numItems.length).toBeGreaterThan(12);
});

// Here matchers are working with strings looking for only the sring he on the match
const stringWithName = numItems[1].name;
test('testing there is a hector string on that string', () => {
  expect(stringWithName).toMatch(/he/);
});

// Matchers here will look for a specific string
test('testing there is a hector string on that string', () => {
  expect(stringWithName).toContain('hector');
});

// Arrays can be set to expect an specific set of values or to contain some of the values
const newValues = ['hector', 'juan'];
test('the list have a few values', () => {
  expect(['hector', 'juan']).toEqual(expect.arrayContaining(newValues));
});

// Check for objects to have a specific property
test('the first object to have a property of id', () => {
  expect(numItems[0]).toHaveProperty('id');
});
// second arguments will spect for a specific value on property
test('the first object to have a property of id', () => {
  expect(numItems[0]).toHaveProperty('id', 0);
});

// SNAPSHOTS

// these way you can create a snapshot and take care of the dom manipulation
// With U you can uodate the snapshot to change, this is good when passing code
// similar to versioning into git
test(' App component Snapshot ', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// You can organize the code inside the describe method,
// when you need many test to be passed by the same stuff
// here a few examples on how to join into one suite the report

describe('large main testing stuff', () => {
  test('Number to be 12', () => {
    expect(numItems.length).toBe(12);
  });
  test('testing there is a hector string on that string', () => {
    expect(stringWithName).toMatch(/he/);
  });
  test('the first object to have a property of id', () => {
    expect(numItems[0]).toHaveProperty('id');
  });
});
