import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Leaf, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-20 px-4 md:px-8" style={{ backgroundImage: 'url("/hero-background.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">Makalo</h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow">Najbolji namaz ikada</p>
          <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
            Saznaj više
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Zašto Makalo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Heart className="h-12 w-12 text-red-500" />}
              title="Ukusno"
              description="Savršena kombinacija sastojaka za neodoljiv ukus koji će vas oduševiti."
            />
            <BenefitCard
              icon={<Leaf className="h-12 w-12 text-green-500" />}
              title="Zdravo"
              description="Napravljeno od prirodnih sastojaka, bez dodatih konzervansa i aditiva."
            />
            <BenefitCard
              icon={<Zap className="h-12 w-12 text-yellow-500" />}
              title="Energetski"
              description="Savršen izvor energije za aktivan dan, pun hranljivih sastojaka."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Makalo. Sva prava zadržana.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-400">Facebook</a>
            <a href="#" className="hover:text-orange-400">Instagram</a>
            <a href="#" className="hover:text-orange-400">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const BenefitCard = ({ icon, title, description }) => (
  <Card className="text-center">
    <CardHeader>
      <div className="mx-auto bg-orange-100 rounded-full p-3 w-20 h-20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

export default Index;