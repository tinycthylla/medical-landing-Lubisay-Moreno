import { useEffect, useState, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import CtaDetailed from '../components/layout/CtaDetailed';
import Locations from '../components/layout/Locations';
import BlogLoader from '../components/UI/BlogLoader';
import { client, urlFor } from '../sanityClient';

const POSTS_PER_PAGE = 6;

const normalizeText = (text = '') =>
  text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

function RevealOnScroll({ children, className = '', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.01 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Blog({ onOpenModal }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          "excerpt": coalesce(excerpt, pt::text(body[_type == "block" && style == "normal"][0...1])),
          mainImage,
          "category": categories[0]->title
        }`;

        const data = await client.fetch(query);
        setArticles(data || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Extrae automáticamente las categorías que tienen artículos publicados
  const categories = useMemo(() => {
    const unique = new Set(articles.map((a) => a.category).filter(Boolean));
    return ['Todos', ...Array.from(unique)];
  }, [articles]);

  // Filtra por categoría y búsqueda en tiempo real (sin distinguir tildes)
  const filteredArticles = useMemo(() => {
    const term = normalizeText(searchQuery.trim());

    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'Todos' || article.category === selectedCategory;

      if (!matchesCategory) return false;
      if (!term) return true;

      const haystack = normalizeText(
        `${article.title || ''} ${article.excerpt || ''} ${article.category || ''}`
      );
      return haystack.includes(term);
    });
  }, [articles, selectedCategory, searchQuery]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(POSTS_PER_PAGE);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(POSTS_PER_PAGE);
  };

  const handleClearFilters = () => {
    setSelectedCategory('Todos');
    setSearchQuery('');
    setVisibleCount(POSTS_PER_PAGE);
  };

  if (isLoading) return <BlogLoader text="Cargando artículos..." />;

  return (
    <main className="flex-grow font-body-md bg-surface-variant/30 min-h-screen">
      {/* HEADER */}
      <header className="w-full pt-32 md:pt-40 pb-8 md:pb-10 px-6">
        <RevealOnScroll className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-5">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white border border-pink-100 text-brand-pink font-label-md text-[10px] sm:text-xs uppercase tracking-wider font-bold shadow-sm">
              Blog de Dra. Lubisay Moreno
            </span>
          </div>

          <h1 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-on-background leading-tight tracking-tight">
          Descubre nuevos temas y potencia el conocimiento relacionado a tu salud
        </h1>
        </RevealOnScroll>
      </header>

      {/* BUSCADOR, FILTROS Y GRID */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 pb-6 md:pb-8">
        {articles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-pink-100/50 shadow-sm max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-pink-200 text-6xl mb-4">
              edit_document
            </span>
            <h2 className="font-['Poppins'] text-2xl font-medium text-brand-purple mb-2">
              Próximamente
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto">
              La Dra. Lubisay Moreno está preparando artículos de alto valor clínico.
            </p>
          </div>
        ) : (
          <>
            {/* Controles: Buscador + Píldoras de Categorías */}
            <RevealOnScroll className="mb-8 md:mb-10 space-y-5">
              {/* Buscador Responsive */}
              <div className="max-w-lg mx-auto w-full">
                <label htmlFor="blog-search" className="sr-only">
                  Buscar artículos por tema o palabra clave
                </label>
                <div className="relative flex items-center bg-white rounded-full border border-pink-100 shadow-sm focus-within:border-brand-pink focus-within:ring-2 focus-within:ring-pink-100 transition-all">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-brand-purple/70 text-[20px] pl-4 pr-2 select-none"
                  >
                    search
                  </span>
                  <input
                    id="blog-search"
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Buscar tema (ej. VPH, endometriosis, embarazo...)"
                    className="w-full py-3 pr-10 bg-transparent font-['Poppins'] text-sm text-on-background placeholder:text-on-surface-variant/70 focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setVisibleCount(POSTS_PER_PAGE);
                      }}
                      aria-label="Limpiar búsqueda"
                      className="absolute right-3 p-1 text-on-surface-variant hover:text-brand-pink transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] block">
                        close
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* Píldoras de Categoría (scroll horizontal limpio en móvil, centradas en desktop) */}
              {categories.length > 1 && (
                <nav
                  aria-label="Filtrar artículos por categoría"
                  className="flex items-center gap-2.5 overflow-x-auto pb-2 -mx-2 px-2 sm:mx-0 sm:px-0 sm:pb-0 sm:flex-wrap sm:justify-center sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {categories.map((category) => {
                    const isActive = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => handleCategoryChange(category)}
                        aria-pressed={isActive}
                        className={`whitespace-nowrap shrink-0 px-4 py-2 rounded-full font-['Poppins'] text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border ${
                          isActive
                            ? 'bg-pink-50 text-brand-pink border-brand-pink/40 shadow-sm'
                            : 'bg-white text-brand-purple border-pink-100/80 shadow-sm hover:bg-pink-50 hover:text-brand-pink'
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </nav>
              )}
            </RevealOnScroll>

            {/* Estado sin coincidencias */}
            {filteredArticles.length === 0 ? (
              <div className="text-center py-14 px-6 bg-white rounded-3xl border border-pink-100/60 shadow-sm max-w-xl mx-auto">
                <h2 className="font-['Poppins'] text-xl font-medium text-brand-purple mb-2">
                  No encontramos artículos con esa búsqueda
                </h2>
                <p className="text-sm text-on-surface-variant mb-6">
                  Prueba con otra palabra clave o explora todas las categorías disponibles.
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="px-6 py-2.5 rounded-full bg-brand-pink text-white font-['Poppins'] text-xs uppercase tracking-wider font-medium hover:bg-brand-purple transition-colors cursor-pointer"
                >
                  Ver todos los artículos
                </button>
              </div>
            ) : (
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {visibleArticles.map((article) => (
                    <Link
                      key={article._id}
                      to={`/blog/${article.slug}`}
                      className="flex flex-col group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-pink-100/50 p-4"
                    >
                      {/* Imagen + Etiqueta de categoría (sin ícono ni readTime) */}
                      <div className="aspect-video rounded-2xl overflow-hidden relative bg-pink-50 mb-4">
                        {article.mainImage && (
                          <img
                            alt={article.title}
                            loading="lazy"
                            decoding="async"
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
                            src={urlFor(article.mainImage)
                              .width(640)
                              .auto('format')
                              .quality(80)
                              .url()}
                          />
                        )}
                        {article.category && (
                          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-brand-pink font-label-md text-[10px] uppercase tracking-wider font-bold shadow-sm">
                            {article.category}
                          </span>
                        )}
                      </div>

                      {/* Texto */}
                      <div className="flex flex-col flex-grow items-center text-center px-2 pb-2">
                        <h2 className="font-['Poppins'] font-medium text-lg text-on-background mb-3 leading-snug line-clamp-2 group-hover:text-brand-pink transition-colors">
                          {article.title}
                        </h2>

                        <p className="font-body-md text-sm text-on-surface-variant mb-6 line-clamp-3">
                          {article.excerpt ||
                            'Haz clic para leer este artículo completo y descubrir información relevante sobre tu salud.'}
                        </p>

                        <div className="mt-auto pt-2 w-full flex justify-center">
                          <span className="inline-block bg-brand-pink text-white font-label-md font-bold text-xs uppercase tracking-widest py-2.5 px-8 rounded-full group-hover:bg-brand-purple transition-colors shadow-sm">
                            Leer
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Botón Cargar Más */}
                {hasMore && (
                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
                      className="px-8 py-3 rounded-full bg-white text-brand-purple border border-pink-100 shadow-sm font-['Poppins'] text-xs sm:text-sm font-medium hover:bg-pink-50 hover:text-brand-pink transition-all duration-300 cursor-pointer"
                    >
                      Cargar más artículos
                    </button>
                  </div>
                )}
              </section>
            )}
          </>
        )}
      </div>

      <RevealOnScroll>
        <CtaDetailed onOpenModal={onOpenModal} />
      </RevealOnScroll>
      <RevealOnScroll>
        <Locations />
      </RevealOnScroll>
    </main>
  );
}