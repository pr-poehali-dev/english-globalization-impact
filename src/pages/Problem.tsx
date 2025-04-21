import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Globe, AlertTriangle } from "lucide-react";

const Problem = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Заголовок страницы */}
        <section className="py-16 px-4 bg-gradient-to-b from-background to-muted">
          <div className="container max-w-5xl mx-auto text-center">
            <h1 className="mb-6 leading-tight">Проблема глобализации английского языка</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Как англицизмы вытесняют русские слова и почему это угрожает нашему культурному наследию
            </p>
          </div>
        </section>

        {/* Основная проблема */}
        <section className="py-12 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="mb-4">Язык как культурный код нации</h2>
                <p className="text-lg mb-4 text-muted-foreground">
                  Русский язык — один из богатейших языков мира, имеющий тысячелетнюю историю. 
                  Он является носителем культурного кода нации, хранилищем наших ценностей и традиций.
                </p>
                <p className="text-lg mb-4 text-muted-foreground">
                  Однако в эпоху глобализации русский язык подвергается массированному воздействию 
                  англицизмов, которые вытесняют исконно русские слова и выражения.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/dictionary">
                      Словарь замен англицизмов <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Русские книги в библиотеке"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Статистика и факты */}
        <section className="py-12 px-4 bg-card">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-center mb-10">Масштаб проблемы</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <p className="text-muted-foreground">
                  молодых россиян регулярно используют англицизмы в повседневной речи
                </p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">15000+</div>
                <p className="text-muted-foreground">
                  английских заимствований появилось в русском языке за последние 30 лет
                </p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <p className="text-muted-foreground">
                  IT-терминологии в русском языке — заимствования из английского
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Негативные последствия */}
        <section className="py-16 px-4">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Почему глобализация угрожает русскому языку</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-start gap-4 mb-8">
                  <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Размывание культурной идентичности</h3>
                    <p className="text-muted-foreground">
                      Язык — основа национального самосознания. Утрата языковой самобытности 
                      ведёт к ослаблению культурной идентичности и разрыву связи между поколениями.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-8">
                  <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Коммуникационный барьер</h3>
                    <p className="text-muted-foreground">
                      Засилье англицизмов создаёт барьер между поколениями и социальными группами.
                      Старшее поколение часто не понимает речь, наполненную заимствованиями.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Бедность языковых средств</h3>
                    <p className="text-muted-foreground">
                      Частое использование англицизмов обедняет активный словарный запас 
                      носителей языка и снижает выразительность речи.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Глобализация и утрата идентичности"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Примеры замен */}
        <section className="py-12 px-4 bg-card">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1526632623135-890fa91651e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Русская речь и письменность"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="mb-4">Как сохранить чистоту русского языка</h2>
                <p className="text-lg mb-4 text-muted-foreground">
                  Для большинства англицизмов в русском языке существуют прекрасные 
                  отечественные аналоги, которые не уступают в точности и выразительности.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  Используя русские слова вместо заимствований, мы не только обогащаем свою 
                  речь, но и способствуем сохранению нашего культурного достояния.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/dictionary">
                      Смотреть словарь замен <BookOpen className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container max-w-5xl mx-auto text-center">
            <h2 className="mb-6">Присоединяйтесь к движению за чистоту языка</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Сохранение русского языка — задача каждого из нас. Начните с малого: 
              используйте русские слова вместо англицизмов в повседневной речи.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/dictionary">
                  Изучить словарь замен
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 border-t">
        <div className="container max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2023 РодноеСлово — проект по сохранению чистоты русского языка</p>
        </div>
      </footer>
    </div>
  );
};

export default Problem;
