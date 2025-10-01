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
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<"main" | "recipes" | "tips">("main");

  const recipes: Recipe[] = [];

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
                  <Button className="w-full mt-4">
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