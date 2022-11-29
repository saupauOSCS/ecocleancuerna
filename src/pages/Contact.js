import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import Map from "../components/Map";

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
              Permítanos atenderle, puede comunicarse al teléfono que aparece en
              esta página o visitarnos personalmente. ¡Le aseguramos limpieza a
              conciencia en cada una de sus prendas! ¡Venga y descubra cómo le
              facilitamos el cuidado de su ropa!
            </p>
            <p>
              <b>Dirección:</b>
              <br />
              PLAZA TAMAYO, calle Rufino Tamayo #52 local 10 Colonia
              Acapantzingo en Cuernavaca, Morelos.
            </p>

            <p>
              <b>Horario de atención:</b>
              <table itemprop="openingHours">
                <tbody>
                  <tr>
                    <th className="x2TOCf">lun:</th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">8:00–18:00</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">mar:</th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">8:00–18:00</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">mié:</th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">8:00–18:00</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">jue:</th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">8:00–18:00</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">vie:</th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">8:00–18:00</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">sáb:</th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">9:00–16:00</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="x2TOCf">dom:</th>
                    <td className="o0m3Qb">
                      <span className="WF8WNe">Cerrado</span>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                  <label htmlFor="userName">Nombre</label>
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
                  <label htmlFor="userEmail">Email</label>
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
                  <label htmlFor="userPhone">Teléfono</label>
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
                  <label htmlFor="mensaje">Mensaje</label>
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
      <div className="col-sm-12">
        <h2>Visítanos</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.476435256469!2d-99.22692838562564!3d18.910294362075284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddf078b99b76b%3A0x52bfc5a08c61502d!2sTintoreria%20y%20Lavanderia%20ECOCLEAN!5e0!3m2!1sen!2sus!4v1669744599189!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
