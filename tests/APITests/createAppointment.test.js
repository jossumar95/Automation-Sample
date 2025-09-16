import { test, expect } from '@playwright/test';
import { generateFutureDatetimeString } from '../../utils/function-helpers.js';

const AUTH_TOKEN = process.env.AUTH_TOKEN;

function buildAuthHeaders(token) {
  return {
    'Content-Type': 'application/json',
    'Authorization': `${token}`,
  };
}

const formattedDate = generateFutureDatetimeString();

test.describe('@API POST /api/appointments', () => {
  test('Book new appointment (201) with valid auth and payload', async ({ request, baseURL }) => {
    const payload = {
      doctorId: 'cmew3e86i0003113ranlhddm8',
      dateTime: formattedDate,
      notes: 'Optional notes - API e2e',
    };

    
    // console.log('🔐 AUTH_TOKEN:', AUTH_TOKEN?.slice(0, 40) + '...');
    // console.log('📨 Request payload:', payload);
    // console.log('📨 Headers:', buildAuthHeaders(AUTH_TOKEN));

    const res = await request.post(`${baseURL}/api/appointments`, {
      headers: buildAuthHeaders(AUTH_TOKEN),
      data: payload,
    });

    const status = res.status();
    console.log('📬 Response status:', status);

    const bodyText = await res.text();


   
    expect([201, 200]).toContain(status);

    const body = JSON.parse(bodyText);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('doctorId', payload.doctorId);

    if (payload.notes) {
      expect(body).toHaveProperty('notes');
      expect(String(body.notes)).toContain('Optional notes');
    }

    expect(String(body.dateTime)).toContain(payload.dateTime.slice(0, 16));
  });
});
