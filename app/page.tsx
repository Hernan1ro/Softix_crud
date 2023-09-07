"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { PageIcon } from "@/components/Icons/PageIcon";
import Link from "next/link";
import { Header } from "@/components/Header";
import Swal from "sweetalert2";
import { Button } from "@/components/Button";

export default function Home() {
  const [filter, setFilter] = useState("create_client");

  const componentName: any = {
    create_client: "Crear cliente",
    edit_client: "Editar cliente",
    search_client: "Buscar cliente",
  };
  const componentButton: any = {
    create_client: <Button type="create_client" text="Crear Cliente" />,
    edit_client: <Button type="edit_client" text="Editar Cliente" />,
    search_client: <Button type="search_client" text="Consultar Cliente" />,
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <aside className={styles.aside}>
          <div className={styles.aside_nav}>
            <div onClick={() => setFilter("create_client")}>
              <PageIcon
                is_active={filter === "create_client"}
                icon="create_client"
              />
            </div>
            <div onClick={() => setFilter("edit_client")}>
              <PageIcon
                is_active={filter === "edit_client"}
                icon="edit_client"
              />
            </div>
            <div onClick={() => setFilter("search_client")}>
              <PageIcon
                is_active={filter === "search_client"}
                icon="search_client"
              />
            </div>
          </div>
          <Image
            className={styles.logout_btn}
            src="/icons/signout.svg"
            alt="Sign out"
            width={45}
            height={45}
          />
        </aside>
        <div className={styles.main_content}>
          <div className={styles.form_container}>
            <div className={styles.form_container_name}>
              <h1>{componentName[filter]}</h1>
            </div>
            {componentButton[filter]}
          </div>
        </div>
      </main>
    </>
  );
}
