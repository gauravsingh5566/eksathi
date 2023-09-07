import Swal from "sweetalert2";

export const Popup = (attr, title, description) => {
  if (attr == "loading") {
    Swal.fire({
      width: 400,
      padding: "3em",
      title: title ? title : "Loading...",
      html: description ? description : "Please Wait for few seconds..",
      didOpen: () => {
        Swal.showLoading();
      },
    });
  } else if (attr == "success") {
    Swal.fire({
      title: title ? title : "success",
      html: description,
      icon: "success",
      width: 400,
    });
  } else if (attr == "warning") {
    Swal.fire({
      title: title ? title : "success",
      html: description,
      icon: "warning",
      width: 400,
    });
  } else if (attr == "error") {
    Swal.fire({
      width: 400,
      title: title
        ? title
        : "Something Went Wrong Check your Network Connection",
      html: description,
      icon: "error",
    });
  } else {
    Swal.close();
  }
};
