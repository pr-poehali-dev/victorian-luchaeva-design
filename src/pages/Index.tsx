import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const books = [
    {
      title: 'Тайны Букингемского дворца',
      year: '2023',
      genre: 'Исторический детектив',
      image: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/485dbba2-faa0-4df9-87dc-ae018595ee70.jpg'
    },
    {
      title: 'Шпион её Величества',
      year: '2022',
      genre: 'Шпионский роман',
      image: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/485dbba2-faa0-4df9-87dc-ae018595ee70.jpg'
    },
    {
      title: 'Венецианская интрига',
      year: '2021',
      genre: 'Приключенческий роман',
      image: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/485dbba2-faa0-4df9-87dc-ae018595ee70.jpg'
    }
  ];

  const quotes = [
    {
      text: 'В тени королевских покоев скрываются тайны, способные изменить ход истории.',
      source: 'Тайны Букингемского дворца'
    },
    {
      text: 'Каждый шпион знает: самая опасная ложь — та, что облачена в правду.',
      source: 'Шпион её Величества'
    },
    {
      text: 'Венеция хранит секреты веков в своих туманных каналах.',
      source: 'Венецианская интрига'
    }
  ];

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'works', label: 'Произведения', icon: 'BookOpen' },
    { id: 'bio', label: 'Биография', icon: 'User' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'shop', label: 'Магазин', icon: 'ShoppingBag' },
    { id: 'events', label: 'Встречи', icon: 'Calendar' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-primary/20 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-wider">
                Юлия Лучаева
              </h1>
              <p className="text-sm text-muted-foreground mt-1 font-light tracking-widest">
                ПИСАТЕЛЬНИЦА • ПОЭТЕССА
              </p>
            </div>
          </div>
          
          <nav className="mt-6 flex flex-wrap justify-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveSection(item.id)}
                className="text-xs md:text-sm"
              >
                <Icon name={item.icon as any} className="w-4 h-4 mr-1" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 vintage-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 ornament-divider">
              <span className="text-accent text-6xl">❦</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Истории, рождённые<br />в тени империй
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Погрузитесь в мир викторианской Европы, где королевские тайны переплетаются 
              со шпионскими интригами, а каждая страница открывает новую загадку прошлого.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-base">
                <Icon name="BookOpen" className="w-5 h-5 mr-2" />
                Читать произведения
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <Icon name="ShoppingBag" className="w-5 h-5 mr-2" />
                Купить книги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Избранные произведения
            </h3>
            <Separator className="w-24 mx-auto bg-primary" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {books.map((book, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20"
              >
                <div className="h-80 bg-cover bg-center relative overflow-hidden group">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                    <h4 className="text-white text-2xl font-bold leading-tight">{book.title}</h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{book.genre}</p>
                  <p className="text-xs text-accent font-semibold">{book.year}</p>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    <Icon name="BookMarked" className="w-4 h-4 mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 vintage-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Избранные цитаты
            </h3>
            <Separator className="w-24 mx-auto bg-secondary" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {quotes.map((quote, index) => (
              <Card 
                key={index} 
                className="border-l-4 border-l-primary bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Icon name="Quote" className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg md:text-xl italic text-foreground leading-relaxed mb-3">
                        {quote.text}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        — {quote.source}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                О писательнице
              </h3>
              <Separator className="w-24 mx-auto bg-primary" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="aspect-[3/4] rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/2340e58b-d11c-4d51-a7e9-34fdc431b18b.jpg"
                    alt="Библиотека"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  Юлия Лучаева — современная писательница и поэтесса, чьё творчество 
                  переносит читателей в эпоху викторианской Европы конца XIX века.
                </p>
                <p>
                  Её романы наполнены духом приключений, королевскими интригами и шпионскими 
                  историями, где каждая деталь исторического антуража тщательно выверена.
                </p>
                <p>
                  Автор трёх бестселлеров, лауреат литературных премий, член Союза писателей. 
                  Произведения Юлии переведены на 12 языков и изданы в 25 странах мира.
                </p>
                <Button variant="outline" className="mt-4">
                  <Icon name="FileText" className="w-4 h-4 mr-2" />
                  Полная биография
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h4 className="text-xl font-bold text-primary mb-4">Юлия Лучаева</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Писательница исторических романов и шпионских детективов
              </p>
              <div className="flex gap-3">
                <Button size="icon" variant="outline">
                  <Icon name="Facebook" className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Instagram" className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Twitter" className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3 text-foreground">Навигация</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Произведения</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Биография</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Галерея</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Магазин</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3 text-foreground">Контакты</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <a href="mailto:info@luchaeva.ru" className="hover:text-primary transition-colors">
                    info@luchaeva.ru
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="w-4 h-4" />
                  <span>Санкт-Петербург</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Юлия Лучаева. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
