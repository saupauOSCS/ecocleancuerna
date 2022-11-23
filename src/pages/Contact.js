import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ymf4f7t",
        "template_ecoclean",
        form.current,
        "QJNG8voo_Ruj2zy_L"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result);
          console.log(result.text);
          userName.value = "";
          userEmail.value = "";
          userPhone.value = "";
          mensaje.value = "";
          setStatus("SUCCESS");
          console.log(status);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div>
            <h2>Contacto</h2>
            <p>
              Estamos ubicados en &nbsp;
              <b>
                PLAZA TAMAYO, calle Rufino Tamayo #52 local 10 Colonia
                Acapantzingo en Cuernavaca Morelos.
              </b>
            </p>
            <p>Horario:</p>
            <p>
              <b>Lunes a Viernes de 8:00 a 18:00 Hrs.</b>
            </p>
            <p>
              <b>Sábado de 9:00 a 16:00 Hrs.</b>
            </p>
            <br />
            <p>
              Permítanos atenderle, puede comunicarse al teléfono que aparece en
              esta página o visitarnos personalmente. ¡Le aseguramos limpieza a
              conciencia en cada una de sus prendas! ¡Venga y descubra cómo le
              facilitamos el cuidado de su ropa!
            </p>
            <br />
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <h2>Envíanos tus comentarios</h2>
          <div className="form-group">
            {status && renderAlert()}
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-floating mb-3">
                <div className="form-floating">
                  <input
                    type="nombre"
                    name="user_name"
                    className="form-control"
                    id="userName"
                    placeholder="Nombre"
                    required
                  />
                  <label for="userName">Nombre</label>
                </div>
              </div>
              <div className="form-floating mb-3">
                <div className="form-floating">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="userEmail"
                    placeholder="Email"
                    required
                  />
                  <label for="userEmail">Email</label>
                </div>
              </div>
              <div className="form-floating mb-3">
                <div className="form-floating">
                  <input
                    type="telefono"
                    name="user_phone"
                    className="form-control"
                    id="userPhone"
                    placeholder="Teléfono"
                    required
                  />
                  <label for="userPhone">Teléfono</label>
                </div>
              </div>
              <div className="form-floating mb-4">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Mensaje"
                    id="mensaje"
                    styles="height: 120px"
                  ></textarea>
                  <label for="mensaje">Mensaje</label>
                </div>
              </div>
              <div className="form-floating mb-3">
                <button className="btn btn-primary btn-block" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderAlert = () => (
  <div className="px-4 py-2 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Su mensaje fue enviado correctamente!!!</p>
  </div>
);
export default Contact;
