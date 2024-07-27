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

      {/* New Section Below Hero */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img src="/makalo-jar.jpg" alt="Makalo jar" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Otkrij Makalo</h2>
              <p className="text-lg mb-6">
                Makalo je više od običnog namaza - to je iskustvo za vaša čula. Napravljen od pažljivo odabranih sastojaka, 
                Makalo donosi savršenu ravnotežu ukusa i teksture koja će oduševiti i najzahtevnije gurmane. 
                Bilo da ga koristite za doručak, užinu ili kao dodatak vašim omiljenim jelima, Makalo će 
                svaki zalogaj pretvoriti u pravu poslasticu.
              </p>
              <Button className="bg-orange-500 text-white hover:bg-orange-600">
                Isprobaj Makalo
              </Button>
            </div>
          </div>
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

      {/* Poručivanje Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Poručivanje</h2>
              <p className="text-lg mb-6">
                Želite li da uživate u neodoljivom ukusu Makala? Poručivanje je jednostavno i brzo! 
                Samo nekoliko klikova vas deli od toga da vam Makalo stigne na kućnu adresu. 
                Bilo da naručujete za sebe ili kao poklon za voljene, Makalo će doneti radost 
                u svaki dom. Ne propustite priliku da isprobate najbolji namaz na tržištu!
              </p>
              <Button className="bg-orange-500 text-white hover:bg-orange-600">
                Poruči odmah
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/makalo-order.jpg" alt="Poručivanje Makala" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
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