/* eslint-disable react/prop-types */
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Snackbar from "@mui/material/Snackbar";
import BackX from "../../../assets/backX.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";

export default function ResponsiveDialog({ open, handleClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      formData.from_name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      showSnackbar("Preencha todos os Campos, Por favor", "error");
    } else {
      emailjs
        .send(
          "service_xdp9pdj",
          "template_m9t2t7u",
          formData,
          "noMT23Z1MmxPntCTd"
        )
        .then(
          (response) => {
            console.log("Email Enviado Com Sucesso", response);
            setFormData({
              from_name: "",
              email: "",
              message: "",
            });
            if (fullScreen) {
              handleClose();
            }

            showSnackbar("Email Enviado Com Sucesso", "success");
          },
          (error) => {
            console.log("Error ao Enviar o Email", error);
            showSnackbar("Error ao Enviar o Email", "error");
          }
        );
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <div id="contato" className="bg-white ">
            <div className="flex flex-col items-center ">
              <div className="mx-auto  ">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h1 className="text-2xl leading-tight font-bold text-blue-700 mb-1">
                      Entre em Contato
                    </h1>
                  </div>
                  <button
                    className="text-gray-600 p-1 hover:text-gray-900 "
                    onClick={handleClose}
                  >
                    <img src={BackX} alt="" />
                  </button>
                </div>
                <p className="text-gray-700 leading-tight">
                  Dúvidas ou ideias? Estou aqui para ouvir e ajudar. Entre em
                  contato!
                </p>
                <div className="mt-8">
                  <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-gray-700">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
                        rows="4"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <Snackbar
          className="z-50"
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={handleSnackbarClose}
          disableWindowBlurListener={true}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Dialog>
      <Snackbar
        className="z-50"
        open={snackbarOpen}
        disableWindowBlurListener={true}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
