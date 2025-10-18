import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const books = [
    {
      id: 'bukingham',
      title: 'Тайны Букингемского дворца',
      year: '2023',
      genre: 'Исторический детектив',
      image: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/485dbba2-faa0-4df9-87dc-ae018595ee70.jpg',
      price: 890,
      pages: 456,
      description: 'Захватывающий исторический детектив о тайнах королевского двора'
    },
    {
      id: 'spy',
      title: 'Шпион её Величества',
      year: '2022',
      genre: 'Шпионский роман',
      image: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/485dbba2-faa0-4df9-87dc-ae018595ee70.jpg',
      price: 850,
      pages: 398,
      description: 'Шпионский роман в духе классических произведений XIX века'
    },
    {
      id: 'venice',
      title: 'Венецианская интрига',
      year: '2021',
      genre: 'Приключенческий роман',
      image: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/485dbba2-faa0-4df9-87dc-ae018595ee70.jpg',
      price: 820,
      pages: 412,
      description: 'Приключения и интриги на узких улочках загадочной Венеции'
    }
  ];

  const addToCart = (bookId: string) => {
    setCart(prev => ({
      ...prev,
      [bookId]: (prev[bookId] || 0) + 1
    }));
  };

  const removeFromCart = (bookId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[bookId] > 1) {
        newCart[bookId]--;
      } else {
        delete newCart[bookId];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [bookId, quantity]) => {
      const book = books.find(b => b.id === bookId);
      return total + (book?.price || 0) * quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

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

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/21c81439-5db4-406b-bb09-2be1b2c90df4.jpg',
      city: 'Лондон',
      country: 'Англия',
      description: 'Туманный вечер у Вестминстера. Здесь родилась идея «Шпиона её Величества».'
    },
    {
      url: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/3c5065f4-e65f-484b-9a62-ff968f397fa9.jpg',
      city: 'Венеция',
      country: 'Италия',
      description: 'Каналы и тайны старой Венеции — вдохновение для «Венецианской интриги».'
    },
    {
      url: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/17f70adc-11ca-43c2-9e3f-bb014eeced08.jpg',
      city: 'Париж',
      country: 'Франция',
      description: 'Эйфелева башня эпохи Belle Époque. Париж всегда хранит свои секреты.'
    },
    {
      url: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/c354f6d6-e0b9-4f32-b217-ad9460b5ed6c.jpg',
      city: 'Прага',
      country: 'Чехия',
      description: 'Старый город Праги — место, где история оживает на каждом шагу.'
    },
    {
      url: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/fa34b277-f4ea-4e82-b6c5-e7ebd4b5ea16.jpg',
      city: 'Вена',
      country: 'Австрия',
      description: 'Императорские дворцы Вены хранят тайны монархов и придворных интриг.'
    },
    {
      url: 'https://cdn.poehali.dev/projects/862732c7-61b8-4ff3-8625-66b6b6449afa/files/7f716926-7051-4dc3-83af-42c187147b19.jpg',
      city: 'Эдинбург',
      country: 'Шотландия',
      description: 'Величественный замок на скале — символ шотландской истории и легенд.'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Презентация «Тайны Букингемского дворца»',
      date: '2024-11-15',
      time: '19:00',
      location: 'Книжный клуб «Петербургские тайны»',
      address: 'Невский проспект, 28',
      city: 'Санкт-Петербург',
      description: 'Встреча с читателями, презентация нового романа, автограф-сессия',
      status: 'upcoming',
      seats: 45
    },
    {
      id: 2,
      title: 'Литературный вечер «Шпионы викторианской эпохи»',
      date: '2024-11-22',
      time: '18:30',
      location: 'Библиотека им. Достоевского',
      address: 'ул. Рубинштейна, 15',
      city: 'Санкт-Петербург',
      description: 'Лекция об истории шпионажа XIX века, обсуждение романа',
      status: 'upcoming',
      seats: 60
    },
    {
      id: 3,
      title: 'Мастер-класс «Как создать исторический роман»',
      date: '2024-12-05',
      time: '16:00',
      location: 'Литературный центр «Дом книги»',
      address: 'Невский проспект, 62',
      city: 'Санкт-Петербург',
      description: 'Творческий мастер-класс для начинающих писателей',
      status: 'upcoming',
      seats: 30
    },
    {
      id: 4,
      title: 'Онлайн-встреча с читателями',
      date: '2024-12-12',
      time: '20:00',
      location: 'Онлайн (Zoom)',
      address: 'Ссылка будет выслана после регистрации',
      city: 'Онлайн',
      description: 'Вопросы и ответы, обсуждение будущих проектов',
      status: 'upcoming',
      seats: 100
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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
            {getTotalItems() > 0 && (
              <Button 
                variant="default" 
                size="sm"
                className="relative"
                onClick={() => scrollToSection('shop')}
              >
                <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                Корзина
                <span className="ml-2 bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {getTotalItems()}
                </span>
              </Button>
            )}
          </div>
          
          <nav className="mt-6 flex flex-wrap justify-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-xs md:text-sm"
              >
                <Icon name={item.icon as any} className="w-4 h-4 mr-1" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 vintage-pattern">
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
              <Button size="lg" className="text-base" onClick={() => scrollToSection('works')}>
                <Icon name="BookOpen" className="w-5 h-5 mr-2" />
                Читать произведения
              </Button>
              <Button size="lg" variant="outline" className="text-base" onClick={() => scrollToSection('shop')}>
                <Icon name="ShoppingBag" className="w-5 h-5 mr-2" />
                Купить книги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="py-16 bg-card/30">
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
                  <p className="text-xs text-accent font-semibold mb-1">{book.year}</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{book.price} ₽</span>
                    <span className="text-xs text-muted-foreground">{book.pages} стр.</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" size="sm">
                      <Icon name="BookMarked" className="w-4 h-4 mr-2" />
                      Подробнее
                    </Button>
                    <Button 
                      variant="default" 
                      className="flex-1" 
                      size="sm"
                      onClick={() => addToCart(book.id)}
                    >
                      <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                      {cart[book.id] ? `В корзине (${cart[book.id]})` : 'Купить'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="quotes" className="py-16 vintage-pattern">
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

      <section id="gallery" className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Галерея путешествий
            </h3>
            <Separator className="w-24 mx-auto bg-accent" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Города, которые вдохновили на создание романов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <Card 
                key={index}
                className="overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 border-primary/10"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.url}
                    alt={image.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-2xl font-bold mb-1">{image.city}</h4>
                      <p className="text-sm text-white/80 mb-2">{image.country}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" className="w-6 h-6" />
          </Button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].city}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-white space-y-4 p-6">
                <div>
                  <h3 className="text-4xl font-bold mb-2">{galleryImages[selectedImage].city}</h3>
                  <p className="text-xl text-white/70">{galleryImages[selectedImage].country}</p>
                </div>
                <Separator className="bg-white/20" />
                <p className="text-lg leading-relaxed text-white/90">
                  {galleryImages[selectedImage].description}
                </p>
                
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)}
                  >
                    <Icon name="ChevronLeft" className="w-4 h-4 mr-1" />
                    Назад
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                    onClick={() => setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)}
                  >
                    Далее
                    <Icon name="ChevronRight" className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="bio" className="py-16 bg-secondary/5">
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

      <section id="shop" className="py-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Интернет-магазин
            </h3>
            <Separator className="w-24 mx-auto bg-primary" />
            <p className="text-muted-foreground mt-4">
              Все книги с автографом автора
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  {books.map((book) => (
                    <Card 
                      key={book.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20"
                    >
                      <div className="h-48 bg-cover bg-center relative overflow-hidden group">
                        <img 
                          src={book.image} 
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-5">
                        <h4 className="font-bold text-lg mb-2 text-foreground leading-tight">{book.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{book.description}</p>
                        <div className="flex items-center gap-3 mb-3 text-sm">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Icon name="BookOpen" className="w-4 h-4" />
                            {book.pages} стр.
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Icon name="Calendar" className="w-4 h-4" />
                            {book.year}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-primary">{book.price} ₽</span>
                          <span className="text-xs text-green-600 font-semibold">В наличии</span>
                        </div>
                        {cart[book.id] ? (
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => removeFromCart(book.id)}
                              className="flex-1"
                            >
                              <Icon name="Minus" className="w-4 h-4 mr-1" />
                              Убрать
                            </Button>
                            <span className="px-4 py-2 bg-accent/10 rounded font-semibold">
                              {cart[book.id]}
                            </span>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => addToCart(book.id)}
                              className="flex-1"
                            >
                              <Icon name="Plus" className="w-4 h-4 mr-1" />
                              Добавить
                            </Button>
                          </div>
                        ) : (
                          <Button 
                            variant="default" 
                            className="w-full"
                            onClick={() => addToCart(book.id)}
                          >
                            <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                            В корзину
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-24 border-2 border-primary/30">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4 text-foreground">Корзина</h4>
                    
                    {getTotalItems() > 0 ? (
                      <>
                        <div className="space-y-3 mb-6">
                          {Object.entries(cart).map(([bookId, quantity]) => {
                            const book = books.find(b => b.id === bookId);
                            if (!book) return null;
                            return (
                              <div key={bookId} className="flex justify-between items-start text-sm border-b border-border pb-3">
                                <div className="flex-1">
                                  <p className="font-semibold text-foreground">{book.title}</p>
                                  <p className="text-muted-foreground text-xs">{quantity} × {book.price} ₽</p>
                                </div>
                                <p className="font-bold text-primary">{quantity * book.price} ₽</p>
                              </div>
                            );
                          })}
                        </div>
                        
                        <Separator className="my-4" />
                        
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-lg font-semibold">Итого:</span>
                          <span className="text-2xl font-bold text-primary">{getTotalPrice()} ₽</span>
                        </div>

                        <div className="space-y-3">
                          <Button className="w-full" size="lg">
                            <Icon name="CreditCard" className="w-5 h-5 mr-2" />
                            Оформить заказ
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => setCart({})}
                          >
                            <Icon name="Trash2" className="w-4 h-4 mr-2" />
                            Очистить корзину
                          </Button>
                        </div>

                        <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                          <div className="flex items-start gap-2">
                            <Icon name="Gift" className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-foreground">Бесплатная доставка</p>
                              <p className="text-xs text-muted-foreground">При заказе от 2000 ₽</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-secondary/10 rounded-lg">
                          <div className="flex items-start gap-2">
                            <Icon name="PenTool" className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-foreground">С автографом</p>
                              <p className="text-xs text-muted-foreground">Все книги подписаны автором</p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <Icon name="ShoppingCart" className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
                        <p className="text-muted-foreground">Корзина пуста</p>
                        <p className="text-sm text-muted-foreground/70 mt-2">
                          Добавьте книги из каталога
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-16 bg-card/20 vintage-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Встречи с читателями
            </h3>
            <Separator className="w-24 mx-auto bg-secondary" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Присоединяйтесь к литературным встречам, презентациям и мастер-классам
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card 
                  key={event.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-secondary"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2 text-foreground leading-tight">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <Icon name="MapPin" className="w-4 h-4 text-secondary" />
                          <span className="font-semibold">{event.city}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <div className="bg-secondary/10 rounded-lg p-3 border border-secondary/20">
                          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                            {new Date(event.date).toLocaleDateString('ru-RU', { month: 'short' })}
                          </div>
                          <div className="text-2xl font-bold text-secondary">
                            {new Date(event.date).getDate()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Clock" className="w-4 h-4 text-secondary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <Icon name="Building" className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">{event.location}</p>
                          <p className="text-xs">{event.address}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <Separator className="my-4" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Users" className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Осталось мест: <span className="font-semibold text-foreground">{event.seats}</span>
                        </span>
                      </div>
                      <Button size="sm" variant="default">
                        <Icon name="CheckCircle" className="w-4 h-4 mr-2" />
                        Записаться
                      </Button>
                    </div>

                    {event.city === 'Онлайн' && (
                      <div className="mt-3 p-3 bg-accent/10 rounded-lg flex items-center gap-2">
                        <Icon name="Video" className="w-4 h-4 text-accent" />
                        <span className="text-xs text-muted-foreground">
                          Онлайн-формат через Zoom
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-8 text-center">
                <Icon name="Mail" className="w-12 h-12 mx-auto text-primary mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Хотите пригласить автора?
                </h4>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Я с радостью приму участие в литературных фестивалях, книжных клубах 
                  и образовательных мероприятиях. Свяжитесь со мной для обсуждения деталей.
                </p>
                <Button size="lg" variant="default">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить приглашение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Контакты
            </h3>
            <Separator className="w-24 mx-auto bg-primary" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Свяжитесь со мной для сотрудничества, интервью или приглашений на мероприятия
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-bold text-foreground mb-6">Напишите мне</h4>
                    
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">
                          Ваше имя
                        </label>
                        <Input 
                          placeholder="Введите ваше имя"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">
                          Email
                        </label>
                        <Input 
                          type="email"
                          placeholder="your@email.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">
                          Тема сообщения
                        </label>
                        <Input 
                          placeholder="О чём вы хотите написать?"
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">
                          Сообщение
                        </label>
                        <Textarea 
                          placeholder="Ваше сообщение..."
                          rows={6}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        />
                      </div>

                      <Button className="w-full" size="lg">
                        <Icon name="Send" className="w-5 h-5 mr-2" />
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Mail" className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground mb-1">Email</h5>
                        <a 
                          href="mailto:info@luchaeva.ru" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@luchaeva.ru
                        </a>
                        <p className="text-xs text-muted-foreground mt-1">
                          Отвечаю в течение 24 часов
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Icon name="MapPin" className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground mb-1">Адрес</h5>
                        <p className="text-muted-foreground">
                          Санкт-Петербург, Россия
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Для личных встреч — по предварительной договорённости
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Icon name="Phone" className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground mb-1">Телефон</h5>
                        <p className="text-muted-foreground">
                          +7 (812) 123-45-67
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Пн-Пт: 10:00 - 18:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-foreground mb-3">Социальные сети</h5>
                    <div className="flex gap-3">
                      <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                        <Icon name="Facebook" className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                        <Icon name="Instagram" className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                        <Icon name="Twitter" className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                        <Icon name="Youtube" className="w-5 h-5" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Следите за новостями о новых книгах и мероприятиях
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Icon name="Briefcase" className="w-6 h-6 text-accent flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">
                          Для деловых предложений
                        </h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Издательства, литературные агенты, организаторы мероприятий — 
                          пишите на деловую почту:
                        </p>
                        <a 
                          href="mailto:business@luchaeva.ru"
                          className="text-accent font-semibold hover:underline"
                        >
                          business@luchaeva.ru
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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