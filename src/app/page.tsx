import CardFilm from "@/components/CardFilm/cardFilm";
import CardFilmProps from "@/components/CardFilm/interfaces";

export default function Home() {
  return (
    <main className="flex-auto">
      <div className="flex flex-wrap justify-center">
        <CardFilm title='Tropa De Elite' image="/tropa.webp" link="https://www.youtube.com/watch?v=uZBiNJQxtGw&pp=ygUWdHJhaWxlciB0cm9wYSBkZSBlbGl0ZQ%3D%3D"/>
        <CardFilm title='Tropa De Elite 2' image="/tropae2.jpg" link="https://www.youtube.com/watch?v=O8YrtINB5oI&pp=ygUYdHJhaWxlciB0cm9wYSBkZSBlbGl0ZSAy"/>
        <CardFilm title='Creed' image="/creed.webp" link="https://www.youtube.com/watch?v=661sQScpXJc&pp=ygUNdHJhaWxlciBjcmVlZA%3D%3D"/>
        <CardFilm title='Creed 2' image="/creed2.jpg" link="https://www.youtube.com/watch?v=HKXoW8FISj4&pp=ygUPdHJhaWxlciBjcmVlZCAy"/>
        <CardFilm title='Creed 3' image="/creed3.jpg" link="https://www.youtube.com/watch?v=koXO4bo8dEg&pp=ygUNdHJhaWxlciBjcmVlZA%3D%3D"/>
      </div>

      <div className="flex flex-wrap justify-center">
        <CardFilm title='Homem de Ferro' image="/iron.webp" link="https://www.youtube.com/watch?v=aKkud2sqd1o&pp=ygUXdHJhaWxlIGhvbWVtIGRlIGZlcnJvIDE%3D"/>
        <CardFilm title='Homem de Ferro 2' image="/iron2.jpeg" link="https://www.youtube.com/watch?v=b5qs_RtpkhA&pp=ygUXdHJhaWxlIGhvbWVtIGRlIGZlcnJvIDI%3D"/>
        <CardFilm title='Homem de Ferro 3' image="/iroon3.jpg" link="https://www.youtube.com/watch?v=igfXmU1r_mc&pp=ygUXdHJhaWxlIGhvbWVtIGRlIGZlcnJvIDM%3D"/>
        <CardFilm title='Spider Man' image="/spider.jpeg" link="https://www.youtube.com/watch?v=CyiiEJRZjSU&pp=ygUpdHJhaWxlciBob21lbSBhcmFuaGEgc2VtIHZvbHRhIHBhcmEgY2FzYSA%3D"/>
        <CardFilm title='Avengers' image="/avengers.webp" link="https://www.youtube.com/watch?v=TcMBFSGVi1c&pp=ygUZdHJhaWxlciBhdmVuZ2VycyBlbmRnYW1lXA%3D%3D"/>
      </div>
      
    </main>
  );
}
