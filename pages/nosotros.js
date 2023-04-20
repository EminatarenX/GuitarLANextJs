import Layout from "@/components/layout";
import Image from "next/image";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title="nosotros"
      description="Sobre nosotros, GuitarLA sobre musica"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>

          <Image src={'/img/nosotros.jpg'} width={1000} height={800} alt="imagen sobre nosotros"/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pellentesque ante in finibus pulvinar. Sed a ante molestie,
              faucibus dui quis, lobortis odio. Fusce in dapibus quam. Aliquam
              eget molestie odio, nec condimentum quam. Vivamus metus sem,
              laoreet non risus eu, finibus ultricies sapien. Duis a blandit
              leo. Sed in commodo justo, volutpat varius nulla.
            </p>

            <p>
              Sed ultricies ipsum vel enim venenatis, in ultrices purus
              porttitor. Morbi vitae mi eget odio fringilla egestas. Duis
              accumsan odio id ornare blandit. Mauris placerat ultrices diam
              malesuada mollis. Etiam bibendum tristique dui, vel imperdiet
              lorem luctus quis. Donec porttitor mi nec est euismod vestibulum.
              In erat lectus, molestie eu mi sit amet, eleifend euismod tellus.
              
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
