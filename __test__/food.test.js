'use strict';

const { db } = require('../src/models');
const app = require('../src/server');
const supertest = require('supertest');
const request = supertest(app.app);


beforeAll(async () => await db.sync());
afterAll(async () => await db.drop());

describe('Testing food model', () => {
  it('should throw a 201, if successful POST', async () => {
    const response = await request.post('/food').send({
      title:'Pizza',
      typeOfFood:'Cheese',
    });
    expect(response.body.id).toBe(1);
    expect(response.body.title).toEqual('Pizza');
    expect(response.body.typeOfFood).toEqual('Cheese');
  });

  it('should throw a 200, if successful GET', async () => {
    const response = await request.get('/food');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  });

  it('should throw a 200, if successful GET by ID', async () => {
    const response = await request.get('/food/1');
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
  });

  it('should throw a 200, if successful UPDATE', async () => {
    const response = await request.put('/food/1').send({
      title:'Pizza',
      typeOfFood:'Cheese',
    });
    expect(response.status).toEqual(200);
  });

  it('should throw a 204, if successful DESTROY', async () =>{
    let response = await request.delete('/food/1');
    expect(response.status).toBe(204);
    // expect(response.text).toBe('food deleted');
  });
});

//________________________Restaurant__________________________________


describe('Testing restaurant model', () => {
  it('should throw a 201, if successful POST', async () => {
    const response = await request.post('/restaurant').send({
      title:'Dominos',
      typeOfFood:'Pizza',
    });
    expect(response.body.id).toBe(1);
    expect(response.body.title).toEqual('Dominos');
    expect(response.body.typeOfFood).toEqual('Pizza');
  });

  it('should throw a 200, if successful GET', async () => {
    const response = await request.get('/restaurant');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  });

  it('should throw a 200, if successful GET by ID', async () => {
    const response = await request.get('/restaurant/1');
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
  });

  it('should throw a 200, if successful UPDATE', async () => {
    const response = await request.put('/restaurant/1').send({
      title:'Dominos',
      typeOfFood:'Pizza',
    });
    expect(response.status).toEqual(200);
  });

  it('should throw a 204, if successful DESTROY', async () =>{
    const response = await request.delete('/restaurant/1');
    expect(response.status).toBe(204);
  });

});