import { useEffect, useState, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '../sanityClient';
import { PortableText } from '@portabletext/react';
import CtaDetailed from '../components/layout/CtaDetailed';
import FAQ from '../components/layout/FAQ';
import FotoLuConsultorio from '../assets/img/lu_consultorio.webp';
import BlogLoader from '../components/UI/BlogLoader';

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

// Actualiza meta tags dinámicos en el <head>
const setMetaTag = (attr, key, content) => {
  if (!content) return;
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};


const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/dra.lubisaymoreno',
  tiktok: 'https://www.tiktok.com/@lubimorenoo',
  facebook: 'https://www.facebook.com/profile.php?id=61593076585177',
  whatsapp: 'https://wa.me/584129360494',
};

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

export default function BlogPost({ onOpenModal }) {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [toc, setToc] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef(null);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const textComponents = useMemo(
    () => ({
      types: {
        image: ({ value }) => {
          if (!value?.asset) return null;
          return (
            <figure className="my-7">
              <img
                src={urlFor(value).width(800).auto('format').quality(85).url()}
                alt={value.alt || post?.title || 'Imagen ilustrativa del artículo'}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover shadow-sm border border-pink-100"
              />
              {value.caption && (
                <figcaption className="text-center font-['Poppins'] text-xs text-on-surface-variant mt-2">
                  {value.caption}
                </figcaption>
              )}
            </figure>
          );
        },
      },
      block: {
        h2: ({ children, value }) => {
          const text = value.children?.map((child) => child.text).join('') || '';
          return (
            <h2
              id={slugify(text)}
              className="font-['Poppins'] font-medium text-2xl md:text-[28px] text-brand-purple mt-8 mb-3 scroll-mt-28 leading-snug tracking-tight"
            >
              {children}
            </h2>
          );
        },
        h3: ({ children }) => (
          <h3 className="font-['Poppins'] font-medium text-xl md:text-[22px] text-on-background mt-6 mb-2.5 leading-snug">
            {children}
          </h3>
        ),
        normal: ({ children }) => (
          <p className="font-['Poppins'] font-normal text-[15px] text-on-surface-variant leading-[1.45] mb-3.5">
            {children}
          </p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="my-7 p-6 rounded-2xl bg-[#FDF4F8] border-l-4 border-brand-pink text-on-surface-variant italic">
            <p className="font-['Poppins'] font-medium text-base md:text-[17px] mb-0 leading-[1.45]">
              {children}
            </p>
          </blockquote>
        ),
      },
      list: {
        bullet: ({ children }) => (
          <ul className="list-disc pl-6 mb-4 text-on-surface-variant space-y-1.5 font-['Poppins'] text-[15px] leading-[1.45]">
            {children}
          </ul>
        ),
        number: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4 text-on-surface-variant space-y-1.5 font-['Poppins'] text-[15px] leading-[1.45]">
            {children}
          </ol>
        ),
      },
      marks: {
        link: ({ children, value }) => {
          const href = value?.href || '';
          const isExternal = href.startsWith('http');
          return (
            <a
              href={href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="text-brand-pink font-medium underline underline-offset-2 hover:text-[#735D83] transition-colors wrap-break-word"
            >
              {children}
            </a>
          );
        },
      },
    }),
    [post?.title]
  );

  // Evita que al recargar el navegador restaure el scroll al final (Footer)
  useEffect(() => {
    let isCancelled = false;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const postQuery = `*[_type == "post" && slug.current == $slug][0]{
          title, mainImage, publishedAt, _updatedAt, body, excerpt,
          "readTime": round(length(pt::text(body)) / 5 / 200),
          "category": categories[0]->title
        }`;
        const currentPost = await client.fetch(postQuery, { slug });
        if (isCancelled) return;
        setPost(currentPost);

        if (currentPost) {
          const headings = (currentPost.body || [])
            .filter((block) => block._type === 'block' && block.style === 'h2')
            .map((block) => block.children?.map((c) => c.text).join('') || '')
            .filter(Boolean);
          setToc(headings);

          const recentQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]{
            _id, title, "slug": slug.current, mainImage, publishedAt, excerpt,
            "readTime": round(length(pt::text(body)) / 5 / 200),
            "category": categories[0]->title
          }`;
          const recent = await client.fetch(recentQuery, { slug });
          if (isCancelled) return;
          setRecentPosts(recent);
        }
      } catch (error) {
        if (!isCancelled) console.error('Error fetching data:', error);
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, [slug]);

  useEffect(() => {
    return () => {
      clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  // Asegura quedar arriba del todo justo al terminar de renderizar el post
  useEffect(() => {
    if (!isLoading) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      });
    }
  }, [isLoading, slug]);

  useEffect(() => {
    if (!post) return;

    const previousTitle = document.title;
    const pageUrl = window.location.href;
    const metaDesc =
      post.excerpt ||
      `${post.title} — Artículo médico redactado por la Dra. Lubisay Moreno, especialista en Ginecología y Obstetricia.`;
    const ogImage = post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).fit('crop').auto('format').url()
      : '';

    document.title = `${post.title} | Dra. Lubisay Moreno`;
    setMetaTag('name', 'description', metaDesc);
    setMetaTag('property', 'og:type', 'article');
    setMetaTag('property', 'og:title', post.title);
    setMetaTag('property', 'og:description', metaDesc);
    setMetaTag('property', 'og:url', pageUrl);
    if (ogImage) setMetaTag('property', 'og:image', ogImage);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', post.title);
    setMetaTag('name', 'twitter:description', metaDesc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    return () => {
      document.title = previousTitle;
    };
  }, [post]);

  // Scroll suave hacia cada H2 desde el índice "En este artículo"
  const handleScrollToHeading = (e, heading) => {
    e.preventDefault();
    const target = document.getElementById(slugify(heading));
    if (target) {
      const navbarOffset = 112;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const handleCopyLink = async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API unavailable');
      }
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt('Copia el enlace del artículo:', shareUrl);
    }
  };

  if (isLoading) return <BlogLoader text="Cargando artículo..." />;

  if (!post) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 bg-surface-variant/30">
        <h1 className="font-['Poppins'] font-medium text-2xl text-brand-purple">
          Artículo no encontrado
        </h1>
        <Link
          to="/blog"
          className="px-5 py-2.5 rounded-full bg-brand-pink text-white text-sm font-['Poppins'] font-medium hover:bg-brand-purple transition-colors"
        >
          Volver al Blog Médico
        </Link>
      </main>
    );
  }

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt || post.title,
        image: post.mainImage
          ? urlFor(post.mainImage).width(1200).auto('format').url()
          : undefined,
        datePublished: post.publishedAt,
        dateModified: post._updatedAt || post.publishedAt,
        inLanguage: 'es',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': shareUrl,
        },
        author: {
          '@type': 'Person',
          name: 'Dra. Lubisay Moreno',
          jobTitle: 'Médico Especialista en Ginecología y Obstetricia',
          url: `${origin}/acerca`,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dra. Lubisay Moreno - Ginecología y Obstetricia',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog Médico', item: `${origin}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: shareUrl },
        ],
      },
    ],
  };

  return (
    <main className="w-full pt-20 md:pt-24 bg-surface-variant/30 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />

      <div className="max-w-[1140px] mx-auto px-6 md:px-8 py-8 md:py-12 w-full">
        <RevealOnScroll key={`breadcrumb-${slug}`}>
          <nav aria-label="Ruta de exploración" className="py-3 mb-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-on-background font-label-md text-xs uppercase tracking-wider font-bold">
              <li>
                <Link to="/" className="hover:text-brand-pink transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-60">
                <span className="material-symbols-outlined text-[14px] align-middle">
                  chevron_right
                </span>
              </li>
              <li>
                <Link to="/blog" className="hover:text-brand-pink transition-colors">
                  Blog Médico
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-60">
                <span className="material-symbols-outlined text-[14px] align-middle">
                  chevron_right
                </span>
              </li>
              {post.category && (
                <>
                  <li>{post.category}</li>
                  <li aria-hidden="true" className="opacity-60">
                    <span className="material-symbols-outlined text-[14px] align-middle">
                      chevron_right
                    </span>
                  </li>
                </>
              )}
              <li
                aria-current="page"
                className="text-brand-pink truncate max-w-[220px] md:max-w-[420px]"
              >
                {post.title}
              </li>
            </ol>
          </nav>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <article className="lg:col-span-8">
            <RevealOnScroll key={`header-${slug}`}>
              <header className="mb-7">
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                  {post.category && (
                    <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white text-brand-pink border border-pink-100 shadow-sm font-label-md text-xs uppercase tracking-wider font-bold">
                      {post.category}
                    </span>
                  )}
                  {post.publishedAt && (
                    <time
                      dateTime={post.publishedAt}
                      className="text-on-surface-variant font-label-md text-xs font-semibold flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  )}
                  <span className="text-on-surface-variant font-label-md text-xs font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    {Math.max(1, post.readTime || 1)} min de lectura
                  </span>
                </div>

                <h1 className="font-['Poppins'] font-medium text-3xl sm:text-4xl lg:text-[42px] text-on-background tracking-tight leading-tight">
                  {post.title}
                </h1>
              </header>

              {post.mainImage && (
                <figure className="mb-9">
                  <div className="w-full max-w-[740px] aspect-16/10 max-h-[440px] rounded-3xl overflow-hidden shadow-md border border-pink-100/70 bg-white">
                    <img
                      src={urlFor(post.mainImage).width(960).auto('format').quality(85).url()}
                      alt={post.mainImage.alt || post.title}
                      fetchPriority="high"
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>
              )}
            </RevealOnScroll>

            <RevealOnScroll key={`body-${slug}`} delay={120}>
              <div className="max-w-[740px]">
                <PortableText value={post.body} components={textComponents} />
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <span className="font-['Poppins'] text-xs font-medium uppercase tracking-widest text-[#735D83]">
                  Compartir:
                </span>

                <div className="flex items-center gap-4">
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} — ${shareUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Compartir en WhatsApp"
                    title="Compartir en WhatsApp"
                    className="text-[#735D83] hover:text-brand-pink hover:-translate-y-0.5 transition-all"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.031 2C6.502 2 2 6.502 2 12.031c0 1.766.462 3.49 1.34 5.012L2 22l5.095-1.335a9.986 9.986 0 0 0 4.936 1.298h.004c5.528 0 10.03-4.502 10.03-10.032C22.065 6.502 17.56 2 12.031 2zm5.838 14.236c-.246.693-1.44 1.326-1.984 1.404-.506.073-1.15.104-1.855-.12-.43-.136-.98-.32-1.682-.623-2.96-1.278-4.892-4.274-5.04-4.47-.147-.196-1.203-1.6-1.203-3.052 0-1.452.762-2.165 1.032-2.46.27-.295.59-.368.786-.368.197 0 .394.002.565.01.182.008.426-.069.666.508.246.59.836 2.04.91 2.187.074.148.123.32.025.517-.098.196-.148.32-.295.492-.147.172-.31.384-.442.516-.147.147-.3.307-.13.602.172.295.764 1.26 1.64 2.04 1.128 1.005 2.078 1.318 2.373 1.465.295.148.467.123.64-.073.172-.197.737-.86.934-1.155.197-.295.394-.246.664-.148.27.098 1.722.812 2.017.96.295.147.492.22.566.344.073.123.073.713-.173 1.406z" />
                    </svg>
                  </a>

                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Compartir en Facebook"
                    title="Compartir en Facebook"
                    className="text-[#735D83] hover:text-brand-pink hover:-translate-y-0.5 transition-all"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                    </svg>
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Compartir en X"
                    title="Compartir en X"
                    className="text-[#735D83] hover:text-brand-pink hover:-translate-y-0.5 transition-all"
                  >
                    <svg className="size-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    aria-label="Copiar enlace"
                    title={copied ? '¡Enlace copiado!' : 'Copiar enlace'}
                    className="inline-flex items-center gap-1.5 text-[#735D83] hover:text-brand-pink hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <span
                      className={`material-symbols-outlined text-[21px] leading-none ${
                        copied ? 'text-brand-pink' : ''
                      }`}
                    >
                      {copied ? 'check' : 'link'}
                    </span>
                    {copied && (
                      <span className="font-['Poppins'] text-xs font-medium text-brand-pink">
                        Copiado
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          </article>

          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <RevealOnScroll key={`sidebar-${slug}`} delay={160} className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(68,45,82,0.08)] text-center">
                <Link
                  to="/acerca"
                  className="block w-full max-w-[210px] aspect-square mx-auto mb-4 group rounded-2xl overflow-hidden bg-pink-50"
                >
                  <img
                    src={FotoLuConsultorio}
                    alt="Dra. Lubisay Moreno en consultorio"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>

                <Link
                  to="/acerca"
                  className="inline-flex items-center justify-center gap-1.5 group"
                >
                  <h2 className="font-['Poppins'] text-lg font-semibold text-[#442D52] group-hover:text-brand-pink transition-colors">
                    Dra. Lubisay Moreno
                  </h2>
                  <span
                    className="material-symbols-outlined text-brand-pink text-[18px]"
                    title="Médico Verificada"
                  >
                    verified
                  </span>
                </Link>

                <p className="font-['Poppins'] text-xs font-medium text-on-surface-variant mt-0.5">
                  Ginecóloga y Obstetra
                </p>
                <p className="font-['Poppins'] text-xs text-on-surface-variant leading-[1.45] mt-3 mb-4">
                  Medicina basada en evidencia con trato cercano, empático y sin tabúes para acompañarte en cada etapa de tu vida.
                </p>

                <div className="flex items-center justify-center gap-5 my-5">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de la Dra. Lubisay Moreno"
                    className="text-[#442D52] hover:text-brand-pink hover:-translate-y-0.5 transition-all"
                  >
                    <svg className="size-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok de la Dra. Lubisay Moreno"
                    className="text-[#442D52] hover:text-brand-pink hover:-translate-y-0.5 transition-all"
                  >
                    <svg className="size-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>

                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook de la Dra. Lubisay Moreno"
                    className="text-[#442D52] hover:text-brand-pink hover:-translate-y-0.5 transition-all"
                  >
                    <svg className="size-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                    </svg>
                  </a>

                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp de la Dra. Lubisay Moreno"
                    className="text-[#442D52] hover:text-brand-pink hover:-translate-y-0.5 transition-all"
                  >
                    <svg className="size-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.031 2C6.502 2 2 6.502 2 12.031c0 1.766.462 3.49 1.34 5.012L2 22l5.095-1.335a9.986 9.986 0 0 0 4.936 1.298h.004c5.528 0 10.03-4.502 10.03-10.032C22.065 6.502 17.56 2 12.031 2zm5.838 14.236c-.246.693-1.44 1.326-1.984 1.404-.506.073-1.15.104-1.855-.12-.43-.136-.98-.32-1.682-.623-2.96-1.278-4.892-4.274-5.04-4.47-.147-.196-1.203-1.6-1.203-3.052 0-1.452.762-2.165 1.032-2.46.27-.295.59-.368.786-.368.197 0 .394.002.565.01.182.008.426-.069.666.508.246.59.836 2.04.91 2.187.074.148.123.32.025.517-.098.196-.148.32-.295.492-.147.172-.31.384-.442.516-.147.147-.3.307-.13.602.172.295.764 1.26 1.64 2.04 1.128 1.005 2.078 1.318 2.373 1.465.295.148.467.123.64-.073.172-.197.737-.86.934-1.155.197-.295.394-.246.664-.148.27.098 1.722.812 2.017.96.295.147.492.22.566.344.073.123.073.713-.173 1.406z" />
                    </svg>
                  </a>
                </div>

                <Link
                  to="/acerca"
                  className="block w-full py-3 px-5 rounded-full bg-brand-purple text-white font-label-md text-sm font-semibold hover:bg-brand-pink transition-colors shadow-sm"
                >
                  Conoce más sobre mí
                </Link>
              </div>

              {toc.length > 0 && (
                <div className="hidden lg:block p-6 bg-white rounded-3xl shadow-[0_10px_30px_rgba(68,45,82,0.08)]">
                  <p className="font-['Poppins'] text-sm font-semibold text-[#442D52] mb-3 px-2">
                    En este artículo
                  </p>
                  <ul className="space-y-1.5 font-['Poppins'] text-xs">
                    {toc.map((heading, index) => (
                      <li key={`${slugify(heading)}-${index}`}>
                        <a
                          href={`#${slugify(heading)}`}
                          onClick={(e) => handleScrollToHeading(e, heading)}
                          className="block py-1.5 px-2 rounded-xl text-on-surface-variant hover:bg-pink-50 hover:text-brand-pink hover:translate-x-1 transition-all duration-300"
                        >
                          {heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="relative overflow-hidden p-6 rounded-3xl bg-linear-to-br from-[#442D52] via-[#3A2447] to-[#4A2E5C] shadow-[0_10px_30px_rgba(68,45,82,0.16)] text-center">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -left-12 w-36 h-36 rounded-full bg-[#735D83]/30 blur-2xl"
                />
                <div className="relative z-10">
                  <p className="font-['Poppins'] text-lg font-semibold text-white mb-2 leading-snug">
                    ¿Tienes dudas sobre este tema?
                  </p>
                  <p className="font-['Poppins'] text-xs text-white/85 mb-5 leading-[1.5]">
                    Agenda tu consulta ginecológica o ecografía en un espacio seguro y sin prisas.
                  </p>
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full 
                    bg-white text-brand-purple font-label-md font-semibold text-sm hover:bg-brand-pink-light active:scale-[0.98] 
                    transition-all shadow-md hover:shadow-lg cursor-pointer">
                    Agendar Cita
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          </aside>
        </div>

        {recentPosts.length > 0 && (
          <RevealOnScroll key={`recent-${slug}`}>
            <section className="mt-16 pt-4" aria-labelledby="recent-posts-heading">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="font-['Poppins'] text-xs uppercase text-brand-pink tracking-widest font-medium">
                    Sigue Leyendo
                  </span>
                  <h2
                    id="recent-posts-heading"
                    className="font-['Poppins'] font-medium text-2xl md:text-3xl text-[#735D83] mt-1"
                  >
                    Últimos Artículos
                  </h2>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1 font-['Poppins'] text-xs font-medium uppercase tracking-wider text-brand-purple hover:text-brand-pink transition-colors"
                >
                  Ver todo el blog
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {recentPosts.map((item) => (
                  <article
                    key={item._id}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-pink-100/70 flex flex-col"
                  >
                    <Link
                      to={`/blog/${item.slug}`}
                      className="relative w-full aspect-16/10 bg-pink-50 block overflow-hidden"
                    >
                      {item.mainImage && (
                        <img
                          src={urlFor(item.mainImage).width(520).auto('format').quality(80).url()}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      )}
                      {item.category && (
                        <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm text-brand-pink text-[10px] uppercase font-bold tracking-wider rounded-full shadow-sm">
                          {item.category}
                        </span>
                      )}
                    </Link>
                    <div className="p-6 flex flex-col grow">
                      {item.publishedAt && (
                        <time
                          dateTime={item.publishedAt}
                          className="font-['Poppins'] text-[11px] text-on-surface-variant font-medium mb-2"
                        >
                          {new Date(item.publishedAt).toLocaleDateString('es-ES', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                      )}
                      <h3 className="font-['Poppins'] font-medium text-base text-on-background mb-2 line-clamp-2 hover:text-brand-pink transition-colors leading-snug">
                        <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p className="font-['Poppins'] text-xs text-on-surface-variant line-clamp-3 mb-5 grow leading-[1.45]">
                        {item.excerpt}
                      </p>
                      <Link
                        to={`/blog/${item.slug}`}
                        className="inline-flex items-center gap-1.5 font-['Poppins'] font-medium text-xs text-[#735D83] hover:text-brand-pink transition-colors mt-auto"
                      >
                        Leer artículo
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        )}
      </div>

      <RevealOnScroll key={`faq-${slug}`}>
        <div className="max-w-[1200px] mx-auto w-full">
          <FAQ />
        </div>
      </RevealOnScroll>
      <RevealOnScroll key={`cta-${slug}`}>
        <CtaDetailed onOpenModal={onOpenModal} />
      </RevealOnScroll>
    </main>
  );
}