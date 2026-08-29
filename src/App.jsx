import Header from './components/layout/Header';

function App() {
  return (
    <div className="bg-background min-h-screen pt-20">
      <Header />
      {/* Aquí abajo iremos metiendo el resto de las secciones */}
      <h1 className="text-center mt-20 text-primary font-headline-sm">
        ¡El Header está vivo!
      </h1>
    </div>
  )
}

export default App