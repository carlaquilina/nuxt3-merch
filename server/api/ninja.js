export default defineEventHandler(async (event) => {
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=zzeWkiP0zUgeToN5YSZZemH2Sa1cGM1p8D2MvVRe"
  );
  return data;
});
