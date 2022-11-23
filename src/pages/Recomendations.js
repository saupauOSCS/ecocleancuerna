import React from "react";
import imgServicios5 from "../assets/serv-05.jpg";

function Recomendations() {
  return (
    <div className="container">
      <div className="row">
        <div id="contenido">
          <div className="col-sm-12">
            <br />
            <br />
            <img
              className="img-fluid"
              src={imgServicios5}
              alt="Lavanderia Cuernavaca"
            />
            <br />
            <br />
            <p>
              La mayoría de los problemas del lavado de ropa, las telas dañadas,
              la falta de eliminación de manchas y los residuos de pelusa y
              mugre proviene de la mala limpieza. Con estos sencillos consejos,
              queremos ofrecerte información para mejorar el cuidado y lavado de
              tus prendas:
            </p>
          </div>
        </div>
      </div>
      <div className="padding-xs"></div>
      <div className="row">
        <h3> Recomendaciones </h3>
        <div className="col-sm-6">
          <ul className="contenido__ul">
            <li>
              Divide la ropa según el color, la hechura, el tipo de tela, la
              textura de la superficie y la cantidad de suciedad.
            </li>
            <li>Identifica las manchas y trátalas según su origen.</li>
            <li>
              Mide la cantidad que se recomienda en el envase del lavado de
              ropa.
            </li>
            <li>
              Verifica que en las bolsas de las prendas no se encuentran objetos
              o pertenencias olvidadas.
            </li>
            <li>No sobrecargues la lavadora o secadora.</li>
            <li>
              Escoge la temperatura para lavar que se recomienda en la etiqueta
              de instrucciones de la prenda de vestir.
            </li>
            <li>Utiliza el ciclo correcto para lavar y secar según la tela.</li>
            <li>
              No usar blanqueador de cloro en prendas de vestir de seda, lana,
              spandex ni en prendas que se destiñen.
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul className="contenido">
            <li>
              Saca la ropa inmediatamente de la secadora y no seques la ropa más
              de lo debido.
            </li>
            <li>
              Limpia con regularidad todos los fieltros de la lavadora y
              secadora.
            </li>
            <li>
              No guardes ropa sucia de una temporada a otra. Evitaras el
              disgusto de encontrarte después con manchas imposibles de quitar
              (manchas antiguas o de armario)
            </li>
            <li>
              No dejes la ropa de fuera de temporada en un lugar donde le pueda
              dar la luz directa, podría decolorarse.
            </li>
            <li>
              No guardes tu ropa en lugares húmedos (sótanos y desvanes) ni las
              dejes en bolsas de plástico.
            </li>
            <li>
              Cuando lleves tu ropa a la Tintorería o Lavandería indica siempre
              las manchas que lleva y su origen.
            </li>
          </ul>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Recomendations;
