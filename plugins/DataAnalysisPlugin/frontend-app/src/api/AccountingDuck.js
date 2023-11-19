import request from "../utils/request";

const apiUpload = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  
  return request(
    "/api/plugins/DataAnalysisPlugin/AccountingDuck/Upload",
    "POST",
    formData
  );
};

export { apiUpload };
