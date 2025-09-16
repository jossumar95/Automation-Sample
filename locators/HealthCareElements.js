export const HEALTH_CARE_PAGE_ELEMENTS = {
 welcomeMessage: 'span.text-gray-700',
 logoutButton: (page) => page.getByRole('button', { name: 'Logout' }),
  searchInput: 'input[name="q"]',
  searchButton: 'button[type="submit"]',
  findDoctorsTab: (page) => page.getByRole('button', { name: 'Find Doctors' }),
  myAppointmentsTab: (page) => page.getByRole('button', { name: 'My Appointments' }),
  bookAppointmentButton: (page) => page.getByRole('button', { name: 'Book Appointment' }),
  notesTextarea: '#notes',
  datetimeInput: '#datetime',
  yourAppointmentsHeader: (page) =>
  page.getByRole('heading', { name: /Your Appointments/i }),
  finalBookAppointmentButton: (page) => page.locator('form button[type="submit"]:has-text("Book Appointment")'),
  
};