import { test, expect } from '@playwright/test';

test.describe('@API GET available doctors list', () => {

  test('should return array of doctors with required details', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/api/doctors`);
    
    expect(response.status()).toBe(200);

    const data = await response.json();

    expect(Array.isArray(data)).toBe(true);

    for (const doctor of data) {
      expect(doctor).toHaveProperty('id');
      expect(doctor).toHaveProperty('firstName');
      expect(doctor).toHaveProperty('lastName');
      expect(doctor).toHaveProperty('email');
      expect(doctor).toHaveProperty('specialty');
      expect(doctor).toHaveProperty('available');
    }
  });

});



