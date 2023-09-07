import styles from "@/app/page.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_bar}>
        <h3>Mi Aplicación React</h3>
        <div className={styles.nav_profile}>
          <div className={styles.profile_data}>
            <Image
              src="/user/hernan.jpg"
              alt="Profile image"
              width={45}
              height={45}
            />
            <div>
              <span>Hernán Mercado</span>
              <p>Desarrollador Frontend React</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
