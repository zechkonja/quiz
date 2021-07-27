export async function createGame(params) {
  try {
    const url = `https://opentdb.com/api.php?amount=${params.amount}&category=${params.category}&type=${params.type}`;
    const response = await fetch(url, { method: "GET" });
    return response.json();
  } catch (e) {
    console.log("create game service error", e);
  }
}

export async function getCategories() {
  try {
    const url = "https://opentdb.com/api_category.php";
    const response = await fetch(url, { method: "GET" });
    return response.json();
  } catch (e) {
    console.log("game get category error", e);
  }
}
