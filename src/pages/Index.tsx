import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Recipe {
  id: number;
  title: string;
  description: string;
  time: string;
  difficulty: string;
  image: string;
  servings?: number;
  ingredients?: string[];
  steps?: string[];
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<"main" | "recipes" | "tips">("main");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Суп с болгарским перцем и морковью",
      description: "Яркий и ароматный суп-пюре с запеченными болгарскими перцами, овощами и специями",
      time: "1 час 30 мин",
      difficulty: "Средне",
      image: "https://cdn.poehali.dev/files/8d0554fe-4e13-4c9e-a0f5-e8a89854dd91.jpg",
      servings: 5,
      ingredients: [
        "Перец сладкий красный – 1.7 шт.",
        "Масло оливковое – 1.7 ст.л.",
        "Карри – 0.4 ч.л.",
        "Лавровый лист – 0.9 шт.",
        "Лук репчатый – 0.9 шт.",
        "Морковь – 1.7 шт. (крупные, около 300 гр)",
        "Чеснок – 3.4 зуб.",
        "Соль – 0.9 ч.л.",
        "Сок лимонный – 1.7 ч.л.",
        "Вода – 0.9 л (или овощной бульон)",
        "Картофель – по размеру кастрюли",
        "Перец сладкий – 0.9 шт. (для подачи, по желанию)",
        "Зелень – 1.7 ст.л. (для подачи, по желанию)",
        "Масло оливковое – 0.9 ст.л. (для подачи, по желанию)"
      ],
      steps: [
        "Предварительно для запекания перцев нужно разогреть духовку до 175°C. Сладкие перцы помыть, выложить на противень и запечь в течение часа, иногда переворачивая щипцами или двумя лопаточками. После запекания переложить в миску, плотно накрыть пищевой пленкой и дать постоять 10 минут. Образовавшийся под пленкой пар поможет легко очистить перец от кожуры.",
        "Лук и чеснок для супа нужно нарезать.",
        "Морковь нарежем довольно крупно.",
        "На разогретом оливковом масле нужно слегка обжарить порошок карри, примерно 10-20 секунд, до появления приятного запаха.",
        "Добавить лук и чеснок, обжарить 5 минут.",
        "Затем добавить морковь и лавровый лист. Накрыть крышкой и обжаривать 7-10 минут.",
        "Добавить 1 литр воды и подождать, пока суп закипит. Затем нужно накрыть кастрюлю крышкой, уменьшить огонь до среднего, ближе к низкому и варить 25 минут. Суп должен едва побулькивать.",
        "Немного остывшие перцы очистить от кожуры и семян. Крупно нарезать.",
        "К сварившемуся супу добавить перец, вынуть лавровый лист и пюрировать блендером до гладкого состояния. Добавить немного лимонного сока и соль по вкусу.",
        "При подаче суп в тарелках можно украсить небольшими кусочками свежего красного перца, посыпать нарезанной зеленью и сбрызнуть несколькими каплями ароматного оливкового масла."
      ]
    },
    {
      id: 2,
      title: "Борщ",
      description: "Традиционный украинский борщ с говядиной и овощами",
      time: "2 часа",
      difficulty: "Средне",
      image: "/img/0ad329cf-7e56-42ef-9693-38e79d1aa6c1.jpg"
    },
    {
      id: 3,
      title: "Грибной суп",
      description: "Нежный крем-суп из свежих шампиньонов со сливками",
      time: "40 мин",
      difficulty: "Легко",
      image: "/img/e4c6ccb4-a9bb-45d5-a0d6-f7abeb971a10.jpg"
    },
    {
      id: 4,
      title: "Куриный суп с лапшой",
      description: "Домашний куриный бульон с лапшой и овощами",
      time: "1 час",
      difficulty: "Легко",
      image: "/img/77204c9f-dd6c-4348-ac19-790cd7291f0a.jpg"
    },
    {
      id: 5,
      title: "Плов",
      description: "Узбекский плов с бараниной, морковью и пряностями",
      time: "2 часа",
      difficulty: "Сложно",
      image: "/img/c862f432-d612-4483-9901-6250bd320588.jpg"
    },
    {
      id: 6,
      title: "Котлеты домашние",
      description: "Сочные котлеты из говядины и свинины с золотистой корочкой",
      time: "45 мин",
      difficulty: "Средне",
      image: "/img/dcb85c2e-31df-42df-ade1-b44f4a3f0478.jpg"
    },
    {
      id: 7,
      title: "Запеканка картофельная",
      description: "Нежная картофельная запеканка с сыром и сливками",
      time: "1 час",
      difficulty: "Легко",
      image: "/img/56b816ab-393e-43c6-9022-d524f3438c0d.jpg"
    },
    {
      id: 8,
      title: "Шарлотка",
      description: "Воздушный яблочный пирог с нежным бисквитом",
      time: "50 мин",
      difficulty: "Легко",
      image: "/img/dcb85c2e-31df-42df-ade1-b44f4a3f0478.jpg"
    },
    {
      id: 9,
      title: "Пирог с яблоками",
      description: "Классический яблочный пирог с хрустящей решеткой",
      time: "1 час 15 мин",
      difficulty: "Средне",
      image: "/img/7cf8e10d-796c-4381-a45b-aedb5a4f97d0.jpg"
    },
    {
      id: 10,
      title: "Печенье овсяное",
      description: "Домашнее хрустящее овсяное печенье с изюмом",
      time: "30 мин",
      difficulty: "Легко",
      image: "/img/208bbdb0-e492-403b-aa57-c3ae8183831a.jpg"
    },
    {
      id: 11,
      title: "Цезарь",
      description: "Классический салат Цезарь с курицей и пармезаном",
      time: "20 мин",
      difficulty: "Легко",
      image: "/img/4140fcea-70d7-4b77-9c98-141f08e93558.jpg"
    },
    {
      id: 12,
      title: "Греческий салат",
      description: "Свежий салат с помидорами, огурцами, фетой и маслинами",
      time: "15 мин",
      difficulty: "Легко",
      image: "/img/a6971e77-0502-442a-95a9-f90c228bcdbb.jpg"
    },
    {
      id: 13,
      title: "Оливье",
      description: "Традиционный праздничный салат с курицей и овощами",
      time: "40 мин",
      difficulty: "Средне",
      image: "/img/54202f08-147f-4525-8685-2850ba57961b.jpg"
    },
    {
      id: 14,
      title: "Пицца на сковороде",
      description: "Быстрая и вкусная пицца без духовки — идеально для завтрака или перекуса",
      time: "25 мин",
      difficulty: "Легко",
      image: "https://cdn.poehali.dev/projects/c9ed981c-38c8-42f1-a804-4fda875c4428/files/7ca4d3d7-fafe-4a27-b608-ab96d2c7e335.jpg",
      servings: 2,
      ingredients: [
        "Мука пшеничная — 1 стакан",
        "Сметана — 4 ст.л.",
        "Майонез — 4 ст.л.",
        "Яйцо куриное — 1 шт.",
        "Соль — 0.5 ч.л.",
        "Сода — 0.5 ч.л.",
        "Колбаса — 150 г",
        "Помидор — 1 шт.",
        "Сыр твердый — 150 г",
        "Масло растительное — для жарки"
      ],
      steps: [
        "Приготовьте тесто: в миске смешайте яйцо, сметану, майонез и соль.",
        "Добавьте муку и соду, тщательно перемешайте до однородной консистенции. Тесто должно быть как густая сметана.",
        "Разогрейте сковороду с небольшим количеством растительного масла на среднем огне.",
        "Вылейте тесто на сковороду, равномерно распределите по всей поверхности.",
        "Накройте крышкой и готовьте на минимальном огне 5-7 минут, пока низ не зарумянится.",
        "Нарежьте колбасу тонкими кружочками, помидор — ломтиками, сыр натрите на крупной терке.",
        "Когда основа схватится, выложите сверху колбасу и помидоры.",
        "Обильно посыпьте тертым сыром.",
        "Снова накройте крышкой и готовьте еще 5-7 минут, пока сыр не расплавится.",
        "Готовую пиццу переложите на блюдо, нарежьте порционными кусочками и подавайте горячей."
      ]
    }
  ];

  const tips = [
    {
      icon: "ChefHat",
      title: "Подготовка продуктов",
      text: "Всегда читайте рецепт полностью перед началом готовки и подготовьте все ингредиенты заранее"
    },
    {
      icon: "Clock",
      title: "Время приготовления",
      text: "Используйте таймер для контроля времени — это поможет не пережарить и не переварить блюда"
    },
    {
      icon: "Flame",
      title: "Температурный режим",
      text: "Следите за температурой плиты — средний огонь подходит для большинства блюд"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/90">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Книга Рецептов
            </h1>
            <div className="flex gap-2 md:gap-4">
              <Button
                variant={activeTab === "main" ? "default" : "ghost"}
                onClick={() => setActiveTab("main")}
                className="text-sm md:text-base"
              >
                Главная
              </Button>
              <Button
                variant={activeTab === "recipes" ? "default" : "ghost"}
                onClick={() => setActiveTab("recipes")}
                className="text-sm md:text-base"
              >
                Рецепты
              </Button>
              <Button
                variant={activeTab === "tips" ? "default" : "ghost"}
                onClick={() => setActiveTab("tips")}
                className="text-sm md:text-base"
              >
                Советы
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {activeTab === "main" && (
        <>
          <section className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Домашние рецепты с душой
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Коллекция проверенных семейных рецептов, которые наполнят ваш дом уютом и ароматами домашней кухни
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" onClick={() => setActiveTab("recipes")}>
                  Смотреть рецепты
                  <Icon name="ChefHat" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveTab("tips")}>
                  Полезные советы
                </Button>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 pb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Популярные рецепты
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {recipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {recipe.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h4 className="text-2xl font-bold">{recipe.title}</h4>
                    <p className="text-muted-foreground">{recipe.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                      <Icon name="Clock" size={16} />
                      <span>{recipe.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === "recipes" && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Все рецепты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {recipes.map((recipe) => (
              <Card
                key={recipe.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {recipe.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-2xl font-bold">{recipe.title}</h4>
                  <p className="text-muted-foreground">{recipe.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <Icon name="Clock" size={16} />
                    <span>{recipe.time}</span>
                  </div>
                  <Button className="w-full mt-4" onClick={() => setSelectedRecipe(recipe)}>
                    Посмотреть рецепт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeTab === "tips" && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Полезные советы
            </h2>
            <div className="grid gap-6">
              {tips.map((tip, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex gap-6 items-start">
                    <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                      <Icon name={tip.icon as any} size={32} className="text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{tip.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {tip.text}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedRecipe && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedRecipe(null)}>
          <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-card border-b border-border p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedRecipe.title}</h2>
              <Button variant="ghost" size="icon" onClick={() => setSelectedRecipe(null)}>
                <Icon name="X" size={24} />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              <img 
                src={selectedRecipe.image} 
                alt={selectedRecipe.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="flex gap-4 flex-wrap">
                <Badge className="text-base px-4 py-2">{selectedRecipe.difficulty}</Badge>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Clock" size={20} />
                  <span>{selectedRecipe.time}</span>
                </div>
                {selectedRecipe.servings && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Users" size={20} />
                    <span>{selectedRecipe.servings} порций</span>
                  </div>
                )}
              </div>

              <p className="text-lg text-muted-foreground">{selectedRecipe.description}</p>

              {selectedRecipe.ingredients && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ингредиенты</h3>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedRecipe.steps && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Приготовление</h3>
                  <ol className="space-y-4">
                    {selectedRecipe.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <p className="pt-1">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p className="text-sm md:text-base">
            © 2024 Книга Рецептов. Создано с любовью для вашей семьи
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;