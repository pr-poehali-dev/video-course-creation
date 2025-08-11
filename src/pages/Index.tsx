import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="font-bold text-2xl text-green-600">EME</div>
              <div className="hidden md:flex space-x-6">
                <a href="#courses" className="text-slate-700 hover:text-green-600 transition-colors">Курсы</a>
                <a href="#about" className="text-slate-700 hover:text-green-600 transition-colors">О нас</a>
                <a href="#pricing" className="text-slate-700 hover:text-green-600 transition-colors">Цены</a>
                <a href="#contact" className="text-slate-700 hover:text-green-600 transition-colors">Контакты</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => setActiveTab('dashboard')}>
                <Icon name="User" size={16} className="mr-2" />
                Личный кабинет
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
            Профессиональное бизнес-обучение
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Развивайте навыки управления, лидерства и стратегического мышления с помощью наших экспертных видеокурсов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-3">
              <Icon name="Play" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-green-600 text-green-600 hover:bg-green-50">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Каталог курсов
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard/Personal Cabinet */}
      {activeTab === 'dashboard' && (
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Личный кабинет</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="hover-scale">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Icon name="Trophy" size={20} className="mr-2 text-amber-500" />
                    Прогресс обучения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Общий прогресс</span>
                        <span>67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div className="text-sm text-slate-600">
                      <p>Завершено курсов: <span className="font-semibold">4 из 6</span></p>
                      <p>Часов изучено: <span className="font-semibold">24 из 36</span></p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Icon name="Clock" size={20} className="mr-2 text-blue-500" />
                    Активные курсы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Управление проектами</span>
                      <Badge variant="secondary">80%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Лидерство в команде</span>
                      <Badge variant="secondary">45%</Badge>
                    </div>
                    <Button variant="link" className="p-0 h-auto text-green-600">
                      Продолжить изучение →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Icon name="Award" size={20} className="mr-2 text-green-500" />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Icon name="Medal" size={16} className="mr-2 text-gold-500" />
                      <span className="text-sm">Эксперт по продажам</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Target" size={16} className="mr-2 text-blue-500" />
                      <span className="text-sm">Стратег года</span>
                    </div>
                    <Button variant="link" className="p-0 h-auto text-green-600">
                      Все достижения →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Courses Section */}
      <section id="courses" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Популярные курсы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Стратегическое управление",
                description: "Основы планирования и реализации бизнес-стратегий",
                duration: "12 часов",
                students: "2,847",
                rating: 4.8,
                price: "15,990 ₽"
              },
              {
                title: "Лидерство и управление командой",
                description: "Развитие навыков управления персоналом и мотивации",
                duration: "8 часов",
                students: "1,932",
                rating: 4.9,
                price: "12,990 ₽"
              },
              {
                title: "Финансовый анализ",
                description: "Методы оценки финансового состояния компании",
                duration: "16 часов",
                students: "3,421",
                rating: 4.7,
                price: "18,990 ₽"
              }
            ].map((course, index) => (
              <Card key={index} className="hover-scale group">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 rounded-t-lg flex items-center justify-center">
                  <Icon name="Play" size={48} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <p className="text-slate-600 text-sm">{course.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Users" size={14} className="mr-1" />
                      {course.students}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Star" size={14} className="mr-1 text-amber-400" />
                      {course.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">{course.price}</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">О нашей платформе</h2>
              <p className="text-slate-600 mb-6 text-lg">
                Мы создали современную образовательную платформу для развития бизнес-навыков. 
                Наши курсы разработаны ведущими экспертами отрасли и помогают профессионалам 
                достигать новых высот в карьере.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15,000+</div>
                  <div className="text-slate-600">Студентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-slate-600">Курсов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">95%</div>
                  <div className="text-slate-600">Довольны результатом</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-slate-600">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl h-80 flex items-center justify-center">
              <Icon name="GraduationCap" size={120} className="text-white opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Тарифные планы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Базовый",
                price: "2,990 ₽",
                period: "в месяц",
                features: ["Доступ к 10 курсам", "Базовая поддержка", "Сертификат завершения"],
                recommended: false
              },
              {
                name: "Профессиональный",
                price: "5,990 ₽",
                period: "в месяц",
                features: ["Все курсы платформы", "Приоритетная поддержка", "Все сертификаты", "Персональный трекер"],
                recommended: true
              },
              {
                name: "Корпоративный",
                price: "От 15,000 ₽",
                period: "в месяц",
                features: ["Неограниченные лицензии", "Личный менеджер", "Кастомные курсы", "Аналитика команды"],
                recommended: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`hover-scale ${plan.recommended ? 'ring-2 ring-green-500' : ''}`}>
                {plan.recommended && (
                  <div className="bg-green-600 text-white text-center py-2 rounded-t-lg font-medium">
                    Рекомендуем
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-green-600">
                    {plan.price}
                    <span className="text-sm font-normal text-slate-500">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="mr-2 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.recommended ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-600 hover:bg-slate-700'}`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Свяжитесь с нами</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3 text-green-600" />
                  <span>info@edubusiness.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3 text-green-600" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-3 text-green-600" />
                  <span>Москва, ул. Деловая, 1</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-3 text-green-600" />
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-xl mb-4">EduBusiness</h4>
              <p className="text-slate-300">Ваш надёжный партнёр в профессиональном развитии</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Обучение</h5>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Все курсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бизнес-курсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Управление</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Компания</h5>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Поддержка</h5>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 EduBusiness. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;