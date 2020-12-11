const URL = 'https://randomuser.me/api/';

export async function getApiPeople() {
  try {
    const res = await fetch(URL);
    const data = await res.json();

    return data.results[0];
  } catch (e) {
    console.error('Error >:V', e);
  }
}
