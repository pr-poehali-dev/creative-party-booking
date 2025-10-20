import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const events = [
  {
    id: 1,
    title: 'Живопись & Вино',
    description: 'Раскройте свой творческий потенциал за бокалом вина',
    duration: '3 часа',
    icon: 'Palette',
  },
  {
    id: 2,
    title: 'Керамика',
    description: 'Создайте уникальную керамическую посуду своими руками',
    duration: '2.5 часа',
    icon: 'Cookie',
  },
  {
    id: 3,
    title: 'Флористика',
    description: 'Соберите стильный букет или цветочную композицию',
    duration: '2 часа',
    icon: 'Flower',
  },
  {
    id: 4,
    title: 'Свечи & Ароматы',
    description: 'Создайте ароматические свечи с индивидуальным дизайном',
    duration: '2 часа',
    icon: 'Sparkles',
  },
];

const prices = [
  {
    name: 'Базовый',
    price: '3 500',
    features: ['Мастер-класс', 'Все материалы', 'Чай/кофе', 'До 6 человек'],
  },
  {
    name: 'Премиум',
    price: '5 500',
    features: ['Мастер-класс', 'Все материалы', 'Напитки и закуски', 'Фотограф', 'До 10 человек'],
    popular: true,
  },
  {
    name: 'VIP',
    price: '8 500',
    features: ['Мастер-класс', 'Премиум материалы', 'Кейтеринг', 'Фотограф + видео', 'Декор зала', 'До 15 человек'],
  },
];

const reviews = [
  {
    name: 'Анна',
    text: 'Потрясающий вечер! Атмосфера невероятная, организация на высшем уровне. Обязательно вернёмся!',
    rating: 5,
  },
  {
    name: 'Мария',
    text: 'Отличный девичник! Мастер очень внимательный, всё объясняет понятно. Получили массу удовольствия.',
    rating: 5,
  },
  {
    name: 'Екатерина',
    text: 'Идеальное место для девичника! Красиво, уютно, интересно. Спасибо за прекрасные эмоции!',
    rating: 5,
  },
];

const gallery = [
  'https://cdn.poehali.dev/projects/a0f33650-c67b-4064-8396-c7d818fea37e/files/38368942-444c-4985-926e-89cefd7d8ddb.jpg',
  'https://cdn.poehali.dev/projects/a0f33650-c67b-4064-8396-c7d818fea37e/files/d9e5e089-dd50-453b-b4fa-490995f41605.jpg',
  'https://cdn.poehali.dev/projects/a0f33650-c67b-4064-8396-c7d818fea37e/files/a020fbf6-ed21-475e-a7ed-fb43c24de528.jpg',
];

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена! 🎉',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', date: '', guests: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">CreativeParty</h1>
          <div className="hidden md:flex gap-6">
            <a href="#events" className="hover:text-primary transition-colors">
              Мероприятия
            </a>
            <a href="#prices" className="hover:text-primary transition-colors">
              Цены
            </a>
            <a href="#gallery" className="hover:text-primary transition-colors">
              Галерея
            </a>
            <a href="#reviews" className="hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#contacts" className="hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
          <Button className="hidden md:flex" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Забронировать
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Незабываемые творческие девичники
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создавайте воспоминания вместе с подругами в атмосфере творчества и вдохновения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать место
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Sparkles" className="mr-2" size={20} />
              Смотреть программы
            </Button>
          </div>
        </div>
      </section>

      <section id="events" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши мероприятия</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите формат, который вам по душе, или создайте свою уникальную программу
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <Card key={event.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={event.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {event.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Цены и пакеты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Подберите идеальный вариант для вашего мероприятия
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {prices.map((price, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${price.popular ? 'border-primary border-2 scale-105' : ''}`}>
                {price.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{price.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{price.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="Check" className="text-primary mr-2 flex-shrink-0 mt-1" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={price.popular ? 'default' : 'outline'} onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12">
            Посмотрите, как проходят наши мероприятия
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl group cursor-pointer aspect-square">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Что говорят наши гости
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Забронировать мероприятие</CardTitle>
              <CardDescription className="text-base">
                Заполните форму, и мы свяжемся с вами для уточнения деталей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      placeholder="Анна"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Желаемая дата</label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Количество гостей</label>
                    <Input
                      type="number"
                      placeholder="6"
                      min="1"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Комментарий</label>
                  <Textarea
                    placeholder="Расскажите о ваших пожеланиях..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Москва, ул. Творческая, 15</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">hello@creativeparty.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent/20 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 CreativeParty. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
