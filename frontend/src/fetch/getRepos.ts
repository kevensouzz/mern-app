export default async function getRepos() {
  const res = await fetch("https://api.github.com/users/kevensouzz/repos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
