import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { WordExample } from "@/components/WordExample";
import { Search, Filter, ArrowUpDown } from "lucide-react";

interface WordPair {
  foreign: string;
  native: string;
  context: string;
  category?: string;
}

// База слов для словаря
const dictionaryWords: WordPair[] = [
  { foreign: "Фидбек", native: "Отзыв", context: "Оставьте, пожалуйста, отзыв о нашей работе.", category: "Бизнес" },
  { foreign: "Дедлайн", native: "Срок сдачи", context: "Срок сдачи проекта — следующий понедельник.", category: "Бизнес" },
  { foreign: "Контент", native: "Содержание", context: "Создание качественного содержания для сайта.", category: "Интернет" },
  { foreign: "Аккаунт", native: "Учётная запись", context: "Войдите в свою учётную запись.", category: "Интернет" },
  { foreign: "Месседж", native: "Сообщение", context: "Отправьте ваше сообщение администратору.", category: "Интернет" },
  { foreign: "Юзер", native: "Пользователь", context: "Пользователь может изменить настройки.", category: "Интернет" },
  { foreign: "Хайп", native: "Ажиотаж", context: "Вокруг фильма создался ажиотаж.", category: "Медиа" },
  { foreign: "Селфи", native: "Самоснимок", context: "Сделать самоснимок на фоне достопримечательности.", category: "Технологии" },
  { foreign: "Фейк", native: "Подделка", context: "Эти новости оказались подделкой.", category: "Медиа" },
  { foreign: "Мейнстрим", native: "Основное направление", context: "Это уже стало основным направлением в искусстве.", category: "Культура" },
  { foreign: "Тренд", native: "Тенденция", context: "Новая тенденция в моде этого сезона.", category: "Мода" },
  { foreign: "Апгрейд", native: "Обновление", context: "Обновление системы заняло два часа.", category: "Технологии" },
];

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWords, setFilteredWords] = useState<WordPair[]>(dictionaryWords);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = dictionaryWords.filter(word => 
      word.foreign.toLowerCase().includes(searchTerm.toLowerCase()) || 
      word.native.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWords(results);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Заголовок страницы */}
        <section className="py-12 px-4 bg-gradient-to-b from-background to-muted">
          <div className="container max-w-5xl mx-auto text-center">
            <h1 className="mb-4">Словарь замен англицизмов</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Найдите русские аналоги для популярных заимствованных слов и обогатите свою речь
            </p>
          </div>
        </section>

        {/* Поиск */}
        <section className="py-8 px-4 bg-card">
          <div className="container max-w-5xl mx-auto">
            <form onSubmit={handleSearch} className="flex gap-2 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Введите слово для поиска..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" variant="default">Найти</Button>
              <Button type="button" variant="outline" onClick={() => {
                setSearchTerm("");
                setFilteredWords(dictionaryWords);
              }}>
                Сбросить
              </Button>
            </form>

            <div className="flex justify-between items-center mb-6">
              <h2>Результаты ({filteredWords.length})</h2>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" /> Фильтр
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ArrowUpDown className="h-4 w-4" /> Сортировка
                </Button>
              </div>
            </div>

            {/* Результаты поиска */}
            {filteredWords.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredWords.map((word, index) => (
                  <WordExample 
                    key={index}
                    foreign={word.foreign}
                    native={word.native}
                    context={word.context}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Ничего не найдено. Попробуйте изменить запрос.</p>
              </div>
            )}
          </div>
        </section>

        {/* Предложить свой вариант */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container max-w-5xl mx-auto text-center">
            <h2 className="mb-6">Знаете хороший русский аналог?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Наш словарь постоянно пополняется. Если вы знаете удачную замену для англицизма, поделитесь ею с нами.
            </p>
            <Button size="lg" variant="secondary">
              Предложить замену
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

export default Dictionary;
