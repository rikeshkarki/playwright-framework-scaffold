import { NewUser } from '../pages/SignupPage';

/** Builds a unique throwaway user for a single test run, so re-runs never collide. */
export function buildNewUser(): NewUser {
  const unique = Date.now();
  return {
    name: `QA Tester ${unique}`,
    email: `qa.tester.${unique}@example.com`,
    password: 'Test@1234',
    firstName: 'QA',
    lastName: 'Tester',
    address: '123 Test Street',
    country: 'United States',
    state: 'CA',
    city: 'Testville',
    zipcode: '90001',
    mobileNumber: '5551234567',
  };
}
