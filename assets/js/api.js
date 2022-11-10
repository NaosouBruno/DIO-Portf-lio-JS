const fetchProfileDate = async () => {
  const url =
    "https://raw.githubusercontent.com/NaosouBruno/DIO-Portf-lio-JS/feature/dinamicDices/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
};
