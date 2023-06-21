export default async function getData() {
  const res = await fetch("https://api.github.com/users/kevensouzz");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}