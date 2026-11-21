import { useEffect, useState } from 'react';
import CtaDetailed from '../components/layout/CtaDetailed';
import Locations from '../components/layout/Locations';
import { client, urlFor } from '../sanityClient';

export default function Blog({ onOpenModal }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPosts = async () => {
      try {
        // Traemos TODOS los artículos ordenados por fecha, sin separarlos
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          excerpt,
          "bodyText": pt::text(body), 
          mainImage,
          "category": categories[0]->title,
          readTime
        }`;
        
        const data = await client.fetch(query);
        setArticles(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center bg-surface-variant/30">
        <span className="material-symbols-outlined text-brand-pink text-4xl animate-spin mb-4">progress_activity</span>
        <p className="font-label-md text-brand-purple font-bold">Cargando artículos...</p>
      </div>
    );
  }

  return (
    <main className="flex-grow font-body-md bg-surface-variant/30 min-h-screen">
      
      {/* HEADER: Limpio, centrado y con etiqueta estilo píldora */}
      <header className="w-full pt-40 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Etiqueta encapsulada (coherente con el resto de la web) */}
          <div className="flex flex-col items-center text-center mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-pink-100 text-brand-pink font-label-md text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-sm">
              Blog de Dra. Lubisay Moreno
            </span>
          </div>
          
          <h1 className="font-headline-sm text-3xl md:text-4xl text-on-background font-bold leading-tight">
            Descubre nuevos temas y potencia el conocimiento relacionado a tu salud
          </h1>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL - GRID DE ARTÍCULOS */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 pb-16 md:pb-24">

        {/* MENSAJE SI NO HAY ARTÍCULOS */}
        {articles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-pink-100/50 shadow-sm max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-pink-200 text-6xl mb-4">edit_document</span>
            <h3 className="font-body-md text-2xl font-bold text-brand-purple mb-2">Próximamente</h3>
            <p className="text-on-surface-variant max-w-md mx-auto">
              La Dra. Lubisay Moreno está preparando artículos de alto valor clínico.
            </p>
          </div>
        ) : (
          /* GRID UNIFICADO: Todos los artículos en el mismo formato de cuadrícula */
          <section className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {articles.map((article) => (
                <a 
                  key={article._id} 
                  href={`/blog/${article.slug}`} 
                  className="flex flex-col group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-pink-100/50 p-4"
                >
                  {/* Contenedor de la imagen */}
                  <div className="aspect-video rounded-2xl overflow-hidden relative bg-pink-50 mb-4">
                    {article.mainImage && (
                      <img 
                        alt={article.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out" 
                        src={urlFor(article.mainImage).url()}
                      />
                    )}
                  </div>
                  
                  {/* Contenedor del texto */}
                  <div className="flex flex-col flex-grow items-center text-center px-2 pb-2">
                    <h4 className="font-headline-sm text-lg text-on-background mb-3 font-bold leading-snug line-clamp-2 group-hover:text-brand-pink transition-colors">
                      {article.title}
                    </h4>
                    
                    {/* Extracto del texto */}
                    <p className="font-body-md text-sm text-on-surface-variant mb-6 line-clamp-3">
                       {article.excerpt || article.bodyText || 'Haz clic para leer este artículo completo y descubrir información relevante sobre tu salud.'}
                    </p>
                    
                    {/* Botón sólido centrado en la parte inferior */}
                    <div className="mt-auto pt-2 w-full flex justify-center">
                      <span className="inline-block bg-brand-pink text-white font-label-md font-bold text-xs uppercase tracking-widest py-2.5 px-8 rounded-full group-hover:bg-brand-purple transition-colors shadow-sm">
                        Leer
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

      </div>

      <CtaDetailed onOpenModal={onOpenModal} />
      <Locations />
      
    </main>
  );
}