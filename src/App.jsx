import 'bulma/css/bulma.css';
import './App.css';
import Course from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import KompleWeb from './images/kompleweb.jpg';
import Csharp from './images/ccsharp.png';

function App() {
  return (

<div className='App'>
      <section className="hero is-dark">
        <div className="hero-body">
        <h1><a href='https://www.udemy.com' rel="noreferrer" target="_blank">Udemy Kursları</a></h1>
        </div>
      </section>

<div className='container'>
    <section className='section'>
      <div className='columns'>
          <div className='column'>
            <Course
              image={Angular}
              title='Angular | Baştan Sona Uygulamalı Angular Eğitimi'
              description='Angular, Google tarafından geliştirilen ve desteklenen SPA(Single Page Application) uygulama yapılmasına olanak sağlayan javascript kütüphanesidir. Angular modüler bir yapıya sahiptir. Uygulumanızı parçalara bölebilir ve tekrar kullanabilirsiniz.'
            />
          </div>

          <div className='column'>
            <Course
              image={Bootstrap}
              title='Uygulamalı Bootstrap 5 Eğitimi'
              description='Bootstrap 5 kütüphanesi bizi gereksiz css yazımından kurtarır.Kursta en çok karşılaşılan hatalar ve her bir class ın ne anlama geldiğini özelliaçıklamaya çalıştım. Kurs içeriğinde temel Bootstrap 5 özelliklerini gösterdim.'
            />
          </div>

          <div className='column'>
            <Course
              image={KompleWeb}
              title='Komple Uygulamalı Web Geliştirme Eğitimi'
              description='Bu kursta ilk bölümlerde frontend teknolojilerinden başlamaktayız. Sırasıyla Html 5, Css 3, Css Grid, Flexbox, Bootstrap 5 ,Javascript, Jquderslerini gördükten sonra C# a uzun soluklu bir dalış yapmaktayız. C# da sırasıyla temel işlemler Windows Form Uygulamaları ,Ado Net, Sql, Linq, Entity Framewderslerini işlemekteyiz.'
            />
          </div>

          <div className='column'>
            <Course
              image={Csharp}
              title='C Programlama ve C# ile Yazılımcı Olma Kursu'
              description='Bu kurs sayesinde C programlama ve C# dilinde sıfırdan master seviyeye geleceksiniz. C programla ile algoritma kurabilme yeteneğinizi iygeliştiriyor En popüler yazılım dili olan C# ile de bitirici vurucu yapıyoruz. 2 yazılım dilini de en dip detayına kadar nasıl kullanacağınızı öğreneceksiniz.'
            />
          </div>
        </div>
    </section>
</div>
</div>
  );
}

export default App;
