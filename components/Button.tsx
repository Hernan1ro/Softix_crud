import { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import { Login, createClient, updateClient, getClient } from "@/api";
import Swal from "sweetalert2";

export const Button = ({ type, text }: { type: string; text: string }) => {
  const [newClient, setNewClient] = useState({
    Cedula: "1081825389",
    Tipodocumento: "CC",
    Nombre1: "Hernan",
    Nombre2: "Fernando",
    Apellido1: "Pineda",
    Apellido2: "Lopez",
    Dv: "",
    Celular: "3014565767",
    Telefono: "",
    Empresa: "dd",
    Ocupacion: "",
    EstadoCivil: "",
    Correo: "sebastianprueba@gmail.com",
    Direccion: "",
    Observaciones: "",
    Autoriza: 1,
    FechaNacimiento: "2000-01-01T00:00:00",
    Afiliacion: "4",
    EpsArs: "",
    Ciudad: "11",
    Localidad: "001",
    Genero: "No especificado",
    Rural: 0,
    ValorConsulta: 0,
    Tipopersona: "Natural",
    Responsabilidadfiscal: "ZZ",
    Tributos: "ZZ",
    Codpostal: "",
    Observacionfidelizacion: "",
    Regimen: "49",
    Pais: "CO",
    Listaprecios: "1",
    Ventasbloqueadas: false,
    Maxcupo: 0,
    Diascupo: 0,
    Sedecreacion: "1",
    Creadopor: "999",
    RH: "o+",
  });
  const [editClient, setEditClient] = useState({
    Cedula: "1081825389",
    Tipodocumento: "CC",
    Nombre1: "Hernan David",
    Nombre2: "Fernando",
    Apellido1: "Pineda",
    Apellido2: "Lopez",
    Dv: "",
    Celular: "3014565767",
    Telefono: "",
    Empresa: "dd",
    Ocupacion: "",
    EstadoCivil: "",
    Correo: "sebastianprueba@gmail.com",
    Direccion: "",
    Observaciones: "",
    Autoriza: 1,
    FechaNacimiento: "2000-01-01T00:00:00",
    Afiliacion: "4",
    EpsArs: "",
    Ciudad: "11",
    Localidad: "001",
    Genero: "No especificado",
    Rural: 0,
    ValorConsulta: 0,
    Tipopersona: "Natural",
    Responsabilidadfiscal: "ZZ",
    Tributos: "ZZ",
    Codpostal: "",
    Observacionfidelizacion: "",
    Regimen: "49",
    Pais: "CO",
    Listaprecios: "1",
    Ventasbloqueadas: false,
    Maxcupo: 0,
    Diascupo: 0,
    Sedecreacion: "1",
    Creadopor: "999",
    RH: "o+",
  });
  const [token, setToken] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("haciendo submit");

    //-------------------- get token --------------//
    try {
      const data = await Login({
        email: "PRUEBADESARROLLADORFRONT",
        password: "MTExMTE=Ss1*",
      });
      console.log(data);
      setToken(data.token);
    } catch (err) {
      console.log(err, "Ha habido un error");
      Swal.fire({
        title: "Ups!",
        text: "No hemos podido procesar tu solicitud intenta más tarde",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      return;
    }

    //---------------- evaluation type -----------//

    if (type === "create_client") {
      try {
        const data = await createClient(newClient, token);
        console.log(data);
        Swal.fire({
          title: "Ups!",
          text: `${data}`,
          icon: "success",
          confirmButtonText: "Cerrar",
        });
      } catch (err) {
        console.log(err, "Ha habido un error");

        Swal.fire({
          title: "Ups!",
          text: "No hemos podido procesar tu solicitud intenta más tarde",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      }
    } else if (type === "update_client") {
      try {
        const data = await updateClient(
          Number(newClient.Cedula),
          editClient,
          token
        );
        console.log(data);

        Swal.fire({
          title: "Ups!",
          text: "Usuario actualizado exitosamente!!",
          icon: "success",
          confirmButtonText: "Cerrar",
        });
      } catch (err) {
        console.log(err, "Ha habido un error");
        Swal.fire({
          title: "Ups!",
          text: "No hemos podido procesar tu solicitud intenta más tarde",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      }
    } else {
      try {
        const data = await getClient(Number(newClient.Cedula), token);
        console.log(data);
        Swal.fire({
          title: "Enhorabuena",
          text: `Estos son los datos de ${
            data.nombre1 + " " + data.apellido1
          }...`,
          icon: "success",
          confirmButtonText: "Cerrar",
        });
      } catch (err) {
        console.log(err, "Ha habido un error");
        Swal.fire({
          title: "Ups!",
          text: `Cliente no encontrado`,
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <img src={`/user/${type}.svg`} alt="create_new_client" />
      <button type="submit">{text}</button>
    </form>
  );
};
