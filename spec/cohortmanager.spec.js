// Note: you shouldn't need to change anything in this file.
const CohortManager = require('../src/cohortmanager');

describe('CohortManager', () => {
  let test;

  beforeEach(() => {
    test = new CohortManager();
  });
  // test 1 - create first todo: todo 1
  it('creates a new cohort: cohort 1', () => {
    // set up
    let expected = 'cohort1';
    // execute
    let result = test.createCohort('cohort1');
    let resultName = result.name;
    expect(resultName).toEqual(expected);
  });

  // describe('CohortManager', () => {
  //   let cohortmanagement;
  //   beforeEach(() => {
  //     cohortmanagement = new CohortManager();
  //   });
  //   // ---TEST 1-???: Create one cohort called cohort1 ---
  //   // ---TEST 1---
  //   fit('', () => {
  //     let expected = 'cohort1'
  //   }
  //   cohortmanagement.createCohort('cohort1');

  //     let result = cohortmanagement.createCohort('cohort1')

  //     expect(result.name).toEqual(expected);
  //   // ---TEST 2---
  //   beforeEach(() => {
  //     basket = new Basket();
  //   });
  //   it('createBasketOfSize: number < 0', () => {
  //     const ErrInputTypeBasketSize =
  //       'You have not entered a number or number < 0';
  //     basket.createBasketOfSize(-1);
  //     expect(basket.createBasketOfSize(-1)).toEqual(ErrInputTypeBasketSize);
  //   });
  //   // ---TEST 3---
  //   beforeEach(() => {
  //     basket = new Basket();
  //   });
  //   it('createBasketOfSize: input 1', () => {
  //     basket.createBasketOfSize(1);
  //     expect(basket.createBasketOfSize(1)).toEqual([undefined]);
  //   });
  //   // ---TEST 4---
  //   beforeEach(() => {
  //     basket = new Basket();
  //   });
  //   it('createBasketOfSize: input 2', () => {
  //     basket.createBasketOfSize(2);
  //     expect(basket.createBasketOfSize(2)).toEqual([undefined, undefined]);
  //   });
  //   // ---TEST 5-6: selectItems: shopper selects one item at a time from STOCK for consideration to add to basket ---
  //   // ---TEST 5---
  //   beforeEach(() => {
  //     basket = new Basket();
  //   });
  //   it('selectItems: item at index 0', () => {
  //     const expected = [
  //       { sku: 'BGLO', price: '0.49', name: 'Bagel', variant: 'Onion' },
  //     ];
  //     const actualResult = basket.selectItems(0);
  //     expect(actualResult).toEqual(expected);
  //   });
  //   // ---TEST 6---
  //   beforeEach(() => {
  //     basket = new Basket();
  //   });
  //   it('selectItems: item at index 1', () => {
  //     const expected = [
  //       { sku: 'BGLP', price: '0.39', name: 'Bagel', variant: 'Plain' },
  //     ];
  //     const actualResult = basket.selectItems(1);
  //     expect(actualResult).toEqual(expected);
  //   });
});
