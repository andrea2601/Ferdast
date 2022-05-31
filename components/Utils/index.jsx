export async function get() {
  const response = await fetch(
    `https://sandbox.musement.com/api/v3/activities/82f6f46c-3923-4510-b5ba-b50aad624eb1.json`
  );
  const res = await response.json();

  return res;
}
