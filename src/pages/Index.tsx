import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { WordExample } from "@/components/WordExample";
import { ArrowRight, BookOpen, Globe, MessageSquare, RefreshCw, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const commonExamples = [
  { foreign: "Фидбек", native: "Отзыв", context: "Оставьте, пожалуйста, отзыв о нашей работе." },
  { foreign: "Дедлайн", native: "Срок сдачи", context: "Срок сдачи проекта — следующий понедельник." },
  { foreign: "Контент", native: "Содержание", context: "Создание качественного содержания для сайта." },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Герой-секция */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
          <div className="container max-w-5xl mx-auto text-center">
            <h1 className="mb-6 leading-tight">Сохраним богатство русского языка</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Противостоим глобализации английского языка и вторжению англицизмов 
              в повседневную русскую речь.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/dictionary">
                  Словарь замен <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/problem">
                  Узнать о проблеме
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Проблема глобализации */}
        <section className="py-16 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="mb-4">Влияние глобализации на русский язык</h2>
                <p className="text-lg mb-4 text-muted-foreground">
                  С развитием интернета и международных связей английский язык стал доминировать 
                  в глобальном общении, что привело к массовому проникновению англицизмов в русскую речь.
                </p>
                <p className="text-lg mb-4 text-muted-foreground">
                  Многие современные профессии, технологии и явления получают английские названия, 
                  хотя для них существуют или могут быть созданы русские аналоги.
                </p>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link to="/problem">
                      Подробнее о проблеме <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1591127331775-8c04f815f6fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Глобализация и языковое влияние"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Секция с примерами слов */}
        <section className="py-16 px-4 bg-card">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Популярные англицизмы и их замены</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {commonExamples.map((example, index) => (
                <WordExample 
                  key={index}
                  foreign={example.foreign}
                  native={example.native}
                  context={example.context}
                />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline">
                <Link to="/dictionary">
                  Смотреть весь словарь <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Информация о проблеме */}
        <section className="py-16 px-4">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Почему это важно?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Культурная идентичность</h3>
                <p className="text-muted-foreground">
                  Язык — ключевой элемент культурной идентичности народа, требующий защиты и сохранения.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ясность общения</h3>
                <p className="text-muted-foreground">
                  Использование родных слов делает речь более понятной для всех поколений.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Развитие языка</h3>
                <p className="text-muted-foreground">
                  Поиск русских аналогов способствует обогащению словарного запаса и развитию языка.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Угрозы глобализации */}
        <section className="py-16 px-4 bg-muted">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Негативные последствия глобализации</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="rounded-lg overflow-hidden shadow-lg h-80">
                <img 
                  src="https://images.unsplash.com/photo-1589395937772-f67057e233c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Утрата языковой идентичности"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Утрата языкового многообразия</h3>
                    <p className="text-muted-foreground">
                      Глобализация ведет к доминированию английского языка и постепенному 
                      вытеснению национальных языков из ряда сфер общения.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Межпоколенческий разрыв</h3>
                    <p className="text-muted-foreground">
                      Молодежь, активно использующая англицизмы, создает коммуникационный барьер 
                      со старшим поколением, которое их не понимает.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Обеднение речи</h3>
                    <p className="text-muted-foreground">
                      Регулярное использование англицизмов приводит к ограничению словарного запаса 
                      и снижению способности выражать сложные мысли на родном языке.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container max-w-5xl mx-auto text-center">
            <h2 className="mb-6">Присоединяйтесь к движению</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Вместе мы можем сохранить красоту и богатство русского языка для будущих поколений.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/dictionary">
                Начать использовать словарь
              </Link>
            </Button>
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

export default Index;
