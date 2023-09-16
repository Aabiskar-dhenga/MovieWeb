export const SetStorage = (item) => {
  let allData = GetStorage();

  let newData = [...allData, item];
  let stringifiedData = JSON.stringify(newData);
  localStorage.setItem("movie", stringifiedData);
};

export const GetStorage = () => {
  let Gdata = localStorage.getItem("movie");
  if (Gdata) {
    Gdata = JSON.parse(Gdata);
  }
  return Gdata ?? [];
};

export const DeleteFunctionality = (deletingId) => {
  let data = GetStorage();
  let remainingId = data.filter((item) => {
    return item.id !== deletingId;
  });
  let dataAfterStringfy = JSON.stringify(remainingId);
  localStorage.setItem("movie", dataAfterStringfy);
};
